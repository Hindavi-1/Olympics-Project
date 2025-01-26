import joblib
import pandas as pd

# Load the trained model
model = joblib.load('olympic_medal_predictor.pkl')

def predict_medal(input_data, feature_columns):
    """
    Predict Olympic medals using the trained model.
    
    Parameters:
    - input_data: Dictionary or DataFrame containing input features.
    - feature_columns: List of feature column names expected by the model.
    
    Returns:
    - Predictions as a dictionary with medal probabilities.
    """
    # Convert input data to DataFrame
    if isinstance(input_data, dict):
        input_df = pd.DataFrame([input_data])
    else:
        input_df = input_data
    
    # Ensure the input DataFrame has all feature columns
    for col in feature_columns:
        if col not in input_df:
            input_df[col] = 0  # Add missing columns with default values

    # Make predictions
    probabilities = model.predict_proba(input_df)
    predictions = model.predict(input_df)
    
    return {
        "predicted_medal": predictions.tolist(),
        "probabilities": probabilities.tolist()
    }
