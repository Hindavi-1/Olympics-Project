# import json
# from flask import Flask, jsonify
# from flask_cors import CORS
# import pandas as pd
# import preprocessor,helper

# app = Flask(__name__)
# CORS(app)  # Enable CORS to allow requests from your React app

# # Sample medal tally data
# df = pd.read_csv('./dataset/athlete_events.csv')
# region_df = pd.read_csv('./dataset/noc_regions.csv')

# df = preprocessor.preprocess(df, region_df)


# medal_tally = [
#     {"rank": 1, "country": "USA", "gold": 39, "silver": 41, "bronze": 33, "total": 113},
#     {"rank": 2, "country": "China", "gold": 38, "silver": 32, "bronze": 18, "total": 88},
#     {"rank": 3, "country": "Japan", "gold": 27, "silver": 14, "bronze": 17, "total": 58},
# ]

# df1 = helper.medal_tally(df)
# medalTally = df1.fillna(0).to_dict(orient="records")  

# @app.route('/api/medal-tally', methods=['GET'])
# def get_medal_tally():
#     print(json.dumps(medal_tally, indent=4))
#     return jsonify(medalTally)



# if __name__ == '__main__':
#     app.run(debug=True)

import pandas as pd
from preprocessor import preprocess, prepare_features
from predict import predict_medal

# Example Usage
if __name__ == "__main__":
    # Load data
    athlete_df = pd.read_csv('athlete.csv')
    region_df = pd.read_csv('noc_regions.csv')
    
    # Preprocess data
    processed_df = preprocess(athlete_df, region_df)
    
    # Define features and target
    features = ['Age', 'Height', 'Weight', 'Sport', 'Event', 'Team', 'region']
    target = ['Gold', 'Silver', 'Bronze']
    
    # Prepare data
    X, y = prepare_features(processed_df, features, target)
    
    # Example input for prediction
    input_data = {
        "Age": 24,
        "Height": 180,
        "Weight": 80,
        "Sport_Basketball": 1,
        "Event_Basketball Men's Basketball": 1,
        "Team_China": 1,
        "region_China": 1,
    }
    
    # Predict medals
    result = predict_medal(input_data, feature_columns=X.columns)
    print(result)
