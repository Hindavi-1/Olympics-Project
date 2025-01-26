import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
from xgboost import XGBClassifier
import joblib
from preprocessor import preprocess, prepare_features

# Load data
athlete_df = pd.read_csv('athlete.csv')
region_df = pd.read_csv('noc_regions.csv')

# Preprocess data
processed_df = preprocess(athlete_df, region_df)

# Define features and target
features = ['Age', 'Height', 'Weight', 'Sport', 'Event', 'Team', 'region']
target = ['Gold', 'Silver', 'Bronze']

# Prepare features and target
X, y = prepare_features(processed_df, features, target)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = XGBClassifier(objective='multi:softprob', eval_metric='mlogloss', use_label_encoder=False)
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, 'olympic_medal_predictor.pkl')
print("Model saved as olympic_medal_predictor.pkl")

# Evaluate the model
y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))
