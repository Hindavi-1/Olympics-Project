import pandas as pd



# def preprocess(df, region_df):
#     # filtering dataframes
#     df = df[df['Season'] == 'Summer']
#     df = df.merge(region_df, on="NOC", how='left')
#     # dropping duplicates
#     df.drop_duplicates(inplace=True)
#     df = pd.concat([df, pd.get_dummies(df['Medal'])], axis=1)
#     return df




# def preprocess(df, region_df):
#     """
#     Preprocess the athlete dataset for Olympic medal prediction.
    
#     Parameters:
#     - df: DataFrame containing athlete data.
#     - region_df: DataFrame containing NOC region data.
    
#     Returns:
#     - Preprocessed DataFrame ready for training or prediction.
#     """
#     # Filter for Summer Olympics only
#     df = df[df['Season'] == 'Summer']
    
#     # Merge athlete data with NOC region data
#     df = df.merge(region_df, on="NOC", how='left')
    
#     # Drop duplicates
#     df.drop_duplicates(inplace=True)
    
#     # One-hot encode the Medal column (Gold, Silver, Bronze)
#     df = pd.concat([df, pd.get_dummies(df['Medal'])], axis=1)
    
#     # Rename columns for clarity if necessary
#     df.rename(columns={"Gold": "Gold", "Silver": "Silver", "Bronze": "Bronze"}, inplace=True)
    
#     return df



# def preprocess(df, region_df):
#     """
#     Preprocess the athlete dataset for Olympic medal prediction.
#     """
#     # Filter for Summer Olympics only
#     df = df[df['Season'] == 'Summer']
    
#     # Merge athlete data with NOC region data
#     df = df.merge(region_df, on="NOC", how='left')
    
#     # Drop duplicates
#     df.drop_duplicates(inplace=True)
    
#     # Map medals to numeric values
#     medal_mapping = {'Gold': 3, 'Silver': 2, 'Bronze': 1, None: 0, 'NA': 0}
#     df['Medal'] = df['Medal'].map(medal_mapping)
    
#     # Handle NaN values explicitly
#     df['Medal'].fillna(0, inplace=True)
#     df['Medal'] = df['Medal'].astype(int)  # Convert to integer type
    
#     return df


def preprocess(df, region_df):
    """
    Preprocess the athlete dataset for Olympic medal prediction.
    """
    # Filter for Summer Olympics only
    df = df[df['Season'] == 'Summer']
    
    # Merge athlete data with NOC region data
    df = df.merge(region_df, on="NOC", how='left')
    
    # Drop duplicates
    df.drop_duplicates(inplace=True)
    
    # One-hot encode the Medal column
    medal_mapping = {'Gold': 3, 'Silver': 2, 'Bronze': 1}
    df['Medal'] = df['Medal'].map(medal_mapping)
    
    # Create separate columns for Gold, Silver, and Bronze medals
    df['Gold'] = (df['Medal'] == 3).astype(int)
    df['Silver'] = (df['Medal'] == 2).astype(int)
    df['Bronze'] = (df['Medal'] == 1).astype(int)
    
    # Fill NaN values in numerical columns (e.g., Age, Height, Weight)
    df.fillna(0, inplace=True)
    
    return df


def prepare_features(data, features, target):
    """
    Select features and handle missing values for training or prediction.
    """
    # Ensure all relevant columns are present
    required_columns = features + target
    missing_columns = [col for col in required_columns if col not in data.columns]
    if missing_columns:
        raise ValueError(f"Missing columns in data: {missing_columns}")
    
    # Filter for relevant columns and handle missing values
    data = data[required_columns].copy()
    data.fillna(0, inplace=True)
    
    # One-hot encode categorical variables
    data = pd.get_dummies(data, columns=['Sport', 'Event', 'Team', 'region'], drop_first=True)
    
    # Split features and target
    X = data.drop(columns=target)
    y = data[target].values.ravel() if target else None
    
    return X, y
