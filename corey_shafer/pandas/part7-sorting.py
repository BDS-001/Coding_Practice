import pandas as pd

df = pd.read_csv("data/survey_results_public.csv")
schema_df = pd.read_csv('data/survey_results_schema.csv')
print(df.info())

people = {
    'first':['corey','jane','john', 'adam'],
    'last':['schafer', 'doe', 'doe', 'doe'],
    'email':['coreymscafer@gmail.com', 'janedoe@email.com', 'johndoe@email.com', 'a@email.com']
}

ds = pd.DataFrame(people)
p = ds

p = ds.sort_values(by='last')
p = ds.sort_values(by='last', ascending=False)
#passing a list sorts in order by last then first then whatever next
p = ds.sort_values(by=['last', 'first'], ascending=False)
# list also works for ascending which correspoind to the column order
ds.sort_values(by=['last', 'first'], ascending=[False, True], inplace=True)

p = ds

p = ds.sort_index()

p = ds['last'].sort_values()

#using df
df.sort_values(by=['Country', 'CompTotal'], ascending=[True,False], inplace=True)
p = df[['Country', 'CompTotal']]
p = df['CompTotal'].nlargest(10)
p = df.nlargest(10, 'CompTotal')
p = df.nsmallest(10, 'CompTotal')

print(p)