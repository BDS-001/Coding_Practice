import pandas as pd

df = pd.read_csv("data/survey_results_public.csv")
schema_df = pd.read_csv('data/survey_results_schema.csv')
pd.set_option('display.max_rows', 78)
#print(schema_df['qname'])
#print(schema_df)

p = schema_df[['qname', 'question']]
#need both brackets so pass in a list

#show columns
p = df.columns

#get a row iloc / loc
p = df.iloc[0]
p = df.iloc[[0,5]]

#get rows at specific column
p = df.iloc[[3, 8], 6]

#index defualt labesl are integers otherwise use name of index
p = df.loc[[4,45]]
p = df.loc[[4,45], ['LearnCode', 'EdLevel', 'YearsCode']]



#get all hobbies columns
p = df['Trans']

# count unique values
#p = p.value_counts()

p = df.loc[0, 'Trans']
p = df.loc[[0,1,2], 'Trans']
#slicing is inclusive with no brackts
p = df.loc[0:2, 'Trans']
p = df.loc[0:2, 'Trans':'WorkExp']

print(df.columns)
print(p)