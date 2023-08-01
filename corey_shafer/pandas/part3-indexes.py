import pandas as pd

df = pd.read_csv("data/survey_results_public.csv")
schema_df = pd.read_csv('data/survey_results_schema.csv')
print(df.columns)

#set the index
df.set_index('ResponseId', inplace=True)
p = df
p = df.index
p = df.loc[1, 'Gender']

# rest index
df.reset_index(inplace=True)
p = df.head(10)

#set index when imporitng data
df = pd.read_csv("data/survey_results_public.csv", index_col='ResponseId')
p = df.head(10)


p = schema_df
#set the questiuons name as index (these are thre columns in df)
schema_df = pd.read_csv('data/survey_results_schema.csv', index_col='qname')
p = schema_df.head(10)
#search for the trans index and get the question column
p = schema_df.loc['Trans', 'question']

p = schema_df.loc['Sexuality', 'question']

# sort
schema_df.sort_index(ascending=False, inplace=True)
p = schema_df.head()


print(p)