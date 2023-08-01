import pandas as pd

df = pd.read_csv("data/survey_results_public.csv")
schema_df = pd.read_csv('data/survey_results_schema.csv')
print(df.info())

people = {
    'first':['corey','jane','john'],
    'last':['schafer', 'doe', 'doe'],
    'email':['coreymscafer@gmail.com', 'janedoe@email.com', 'johndoe@email.com']
}

ds = pd.DataFrame(people)

#update Columns
ds.columns = ['First Name', 'Last Name', 'User Emails']
p = ds

#change elements of all column names
ds.columns = [x.lower() for x in ds.columns]
ds.columns = ds.columns.str.replace(' ', '_')

#change specific, doestn change df so must use inplace
ds.rename(columns={'first_name':'first', 'last_name':'last', 'user_emails':'email'}, inplace=True)

#change rows
#requires all feilds to be types again
ds.loc[2] = ['john', 'doe', 'johndoe@email.com']
#change specific columns
ds.loc[2, ['last', 'email']] = ['smith', 'johnsmith@email.com']
#p = ds[ds.index.duplicated()]
ds.loc[2, 'last'] = 'smithers'
#changing only one value you can also use at
ds.at[2, 'last'] = 'smithers'

p = ds.loc[2]

# change manipulate values of entire row
ds['email'] = ds['email'].str.lower()

# 4 methods: apply, map, applymap, replace

#apply can return values but it can also be used to update values
p = ds['email'].apply(len)

def update_email(email):
    return email.upper()
ds['email'] = ds['email'].apply(update_email)
ds['email'] = ds['email'].apply(lambda x: x.lower())

p = ds

#apply runs on each column in dataframe not the data so amount of entries, using axis colmns gives number of clumns used by each row, lambda works on the series not each row
p = ds.apply(len)
p = ds.apply(len, axis='columns')
p = ds.apply(pd.Series.min)
ds.apply(lambda x: x.min())

#map only for datafram, does apply for each series
p = ds.applymap(len)
p = ds.applymap(str.lower)

# map only on series used to subustutte, anything not specified will change to NaN. use replace to keep all other values
p = ds['first'].map({'corey':'chris', 'jane':'mary'})
p = ds['first'].replace({'corey':'chris', 'jane':'mary'})



df.rename(columns={'CompTotal':'Salary'}, inplace=True)
p = df[['Salary']]

print(p)