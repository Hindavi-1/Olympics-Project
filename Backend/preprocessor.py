import pandas as pd



# def preprocess(df, region_df):
#     # filtering dataframes
#     df = df[df['Season'] == 'Summer']
#     df = df.merge(region_df, on="NOC", how='left')
#     # dropping duplicates
#     df.drop_duplicates(inplace=True)
#     df = pd.concat([df, pd.get_dummies(df['Medal'])], axis=1)
#     return df


def preprocess(df, region_df):
    """
    Preprocess the athlete dataset for Olympic medal prediction.
    
    Parameters:
    - df: DataFrame containing athlete data.
    - region_df: DataFrame containing NOC region data.
    
    Returns:
    - Preprocessed DataFrame ready for training or prediction.
    """
    # Filter for Summer Olympics
    df = df[df['Season'] == 'Summer']
    # Merge with region data
    df = df.merge(region_df, on="NOC", how='left')
    # Drop duplicates
    df.drop_duplicates(inplace=True)
    # One-hot encode the Medal column
    df = pd.concat([df, pd.get_dummies(df['Medal'])], axis=1)
    return df



def prepare_features(data, features, target):
    """
    Select features and handle missing values for training or prediction.
    
    Parameters:
    - data: DataFrame after basic preprocessing.
    - features: List of feature column names.
    - target: List of target column names.
    
    Returns:
    - X: Features DataFrame.
    - y: Target DataFrame (only for training).
    """
    # Filter for relevant columns
    data = data[features + target]
    # Handle missing values
    data.fillna(0, inplace=True)
    # Encode categorical variables
    data = pd.get_dummies(data, columns=['Sport', 'Event', 'Team', 'region'], drop_first=True)
    
    # Split features and target
    X = data.drop(columns=target)
    y = data[target] if target else None
    
    return X, y

