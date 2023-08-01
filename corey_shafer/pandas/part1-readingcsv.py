import pandas as pd

df = pd.read_csv("data/survey_results_public.csv")
#print(df)
#print(df.shape)
#print(df.info())
#pd.set_option('display.max_columns', 79)
#print(df.head(10))

schema_df = pd.read_csv('data/survey_results_schema.csv')
pd.set_option('display.max_rows', 78)
print(schema_df)