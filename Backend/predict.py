# import joblib
# import pandas as pd

# # Load the trained model
# model = joblib.load('olympic_medal_predictor.pkl')

# def predict_medal(input_data, feature_columns):
#     """
#     Predict Olympic medals using the trained model.
    
#     Parameters:
#     - input_data: Dictionary or DataFrame containing input features.
#     - feature_columns: List of feature column names expected by the model.
    
#     Returns:
#     - Predictions as a dictionary with medal probabilities.
#     """
#     # Convert input data to DataFrame
#     if isinstance(input_data, dict):
#         input_df = pd.DataFrame([input_data])
#     else:
#         input_df = input_data
    
#     # Ensure the input DataFrame has all feature columns
#     # for col in feature_columns:
#     #     if col not in input_df:
#     #         input_df[col] = 0  # Add missing columns with default 
#     # Find missing columns
#     missing_cols = [col for col in required_columns if col not in input_df.columns]

#     # Create a DataFrame with missing columns and default values
#     missing_df = pd.DataFrame(0, index=input_df.index, columns=missing_cols)

#     # Concatenate the missing columns to the original DataFrame
#     input_df = pd.concat([input_df, missing_df], axis=1)


#     # Make predictions
#     probabilities = model.predict_proba(input_df)
#     predictions = model.predict(input_df)
    
#     return {
#         "predicted_medal": predictions.tolist(),
#         "probabilities": probabilities.tolist()
#     }



import joblib
import pandas as pd

# Load the trained model
model = joblib.load('olympic_medal_predictor.pkl')

# Define the required columns (expected features for the model)
required_columns = model.feature_names_in_  # Automatically retrieve expected features from the model

def predict_medal(input_data):
    """
    Predict Olympic medals using the trained model.
    
    Parameters:
    - input_data: Dictionary or DataFrame containing input features.
    
    Returns:
    - Predictions as a dictionary with medal probabilities.
    """
    # Convert input data to DataFrame
    if isinstance(input_data, dict):
        input_df = pd.DataFrame([input_data])
    else:
        input_df = input_data

    # Ensure the input DataFrame has all required feature columns
    missing_cols = [col for col in required_columns if col not in input_df.columns]

    if missing_cols:
        # Create a DataFrame with missing columns and default values (0 in this case)
        missing_df = pd.DataFrame(0, index=input_df.index, columns=missing_cols)
        # Concatenate the missing columns to the original DataFrame
        input_df = pd.concat([input_df, missing_df], axis=1)

    # Reorder columns to match the model's expected feature order
    input_df = input_df[required_columns]

    # Make predictions
    probabilities = model.predict_proba(input_df)
    predictions = model.predict(input_df)
    
    return {
        "predicted_medal": predictions.tolist(),
        "probabilities": probabilities.tolist()
    }




