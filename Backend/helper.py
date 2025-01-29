import numpy as np;
import pandas as pd

def country_year_list(df):
    years = df['Year'].unique().tolist()
    years.sort()
    years.insert(0, 'Overall')

    country = np.unique(df['region'].dropna().values).tolist()
    country.sort()
    country.insert(0, 'Overall')

    return years,country




# def medal_tally(df):
#     medal_tally_df = df.drop_duplicates(subset=['Team','NOC','Games','Year','City','Sport','Event','Medal'])
#     medal_tally_df = medal_tally_df.groupby('region').sum()[['Gold','Silver','Bronze']].sort_values('Gold', ascending=False).reset_index()

#     medal_tally_df['Total']= medal_tally_df['Gold'] + medal_tally_df['Silver'] + medal_tally_df['Bronze']

#     medal_tally_df['Gold'] = medal_tally_df['Gold'].astype('int')
#     medal_tally_df['Silver'] = medal_tally_df['Silver'].astype('int')
#     medal_tally_df['Bronze'] = medal_tally_df['Bronze'].astype('int')
#     medal_tally_df['Total'] = medal_tally_df['Total'].astype('int')

#     print(medal_tally_df.head())

#     return medal_tally_df



def medal_tally(df):
    # Drop duplicates to avoid double counting
    medal_tally_df = df.drop_duplicates(subset=['Team', 'NOC', 'Games', 'Year', 'City', 'Sport', 'Event', 'Medal'])
    
    # Ensure columns are numeric with a safer approach
    medal_tally_df = medal_tally_df.copy()  # Avoid SettingWithCopyWarning
    for col in ['Gold', 'Silver', 'Bronze']:
        # Convert to numeric and fill NaN with 0
        medal_tally_df[col] = pd.to_numeric(medal_tally_df[col], errors='coerce').fillna(0)
    
    # Group by 'region' and aggregate medal counts
    grouped_df = (
        medal_tally_df
        .groupby('region', as_index=False)
        .agg({'Gold': 'sum', 'Silver': 'sum', 'Bronze': 'sum'})
    )

    # Calculate total medals
    grouped_df['Total'] = grouped_df['Gold'] + grouped_df['Silver'] + grouped_df['Bronze']

    # Sort by Gold medals
    grouped_df = grouped_df.sort_values('Gold', ascending=False).reset_index(drop=True)

    # Convert all columns to integers
    grouped_df[['Gold', 'Silver', 'Bronze', 'Total']] = grouped_df[['Gold', 'Silver', 'Bronze', 'Total']].astype(int)

    print(grouped_df.head())  # Debugging step to check output

    return grouped_df
