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
p = ds

#combine rows
p = ds['first'] + ' ' + ds['last']

# add new column
ds['name'] = p
p = ds

ds.drop(columns=['first', 'last'], inplace=True)

#now reverse
ds[['first', 'last']] = ds['name'].str.split(' ', expand=True)

#append needs name or ignoreindex to be true
ds = ds.append({'first':'tony'}, ignore_index=True)
p = ds

# new dataframe combined with old, have confilicting index and differnt columns order
people = {
    'first':['tony','steve'],
    'last':['stark', 'rogers'],
    'email':['ironman@gmail.com', 'cap@email.com']
}

ds2 = pd.DataFrame(people)
ds = ds.append(ds2, ignore_index=True, sort=False)
p = ds

ds = ds.drop(index=4)
p = ds

#drop using filters, get all the results where last is doe and drop at thoes index
ds = ds.drop(index=df[df['last'] == 'doe'].intex)



print(p)