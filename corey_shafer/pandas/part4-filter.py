import pandas as pd

df = pd.read_csv("data/survey_results_public.csv")
schema_df = pd.read_csv('data/survey_results_schema.csv')
print(df.info())

#filter mask
filt = (df['ResponseId'] == 30)

#ways to get results
p = df[filt]
p = df.loc[filt]
p = df.loc[filt, 'Country']

#    & for and, | for or
filt = (df['ResponseId'] < 50) & (df['Country'] == 'Canada')
#using the filter where respnse id is less than 50 and there country is canada show the devtype from the results
p = df.loc[filt, 'DevType']

filt = (df['Country'] == 'Japan') | (df['Country'] == 'Canada')
p = df.loc[filt, 'DevType']

#use filter to exclude with tilde, get opposite results
p = df.loc[~filt, ['CompTotal','Currency', 'CompFreq']]

high_salary = (df['CompTotal'] > 70000)
p = df.loc[high_salary, ['CompTotal','CompFreq', 'Country', 'LanguageHaveWorkedWith']]

#use a list of values
countries = ['United States', 'India', 'United Kingdom', 'Germany', 'Canada']
filt = df['Country'].isin(countries)
p = df.loc[filt, ['Country', 'LanguageHaveWorkedWith']]

#filter strings
p = df['LanguageHaveWorkedWith']
#must set a fil value for NAN ro you will get an error
filt = df['LanguageHaveWorkedWith'].str.contains('Python', na=False)
p = df.loc[filt, ['LanguageHaveWorkedWith', 'CompTotal']]

print(p)