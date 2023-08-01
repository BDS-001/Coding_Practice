import pandas as pd


def calculate_demographic_data(print_data=True):
    # Read data from file
    df = pd.read_csv('adult.data.csv')

    # How many of each race are represented in this dataset? This should be a Pandas series with race names as the index labels.
    race_count = df['race'].value_counts()

    # What is the average age of men?
    mask1 = df['sex'] == 'Male'
    average_age_men = df[mask1].age.mean().round(1)

    # What is the percentage of people who have a Bachelor's degree?
    have = df[df['education'] == 'Bachelors']
    percentage_bachelors = ((have.size / df.size) * 100).round(1)

    # What percentage of people with advanced education (`Bachelors`, `Masters`, or `Doctorate`) make more than 50K?
    # What percentage of people without advanced education make more than 50K?

    # with and without `Bachelors`, `Masters`, or `Doctorate`
    education_list = ['Bachelors', 'Masters', 'Doctorate']
    higher_education = df[df['education'].isin(education_list)]
    lower_education = df[~df['education'].isin(education_list)]

    # percentage with salary >50K
    mask = df['salary'] == '>50K'
    higher_education_rich = (higher_education[mask].size / higher_education.size * 100).round(1)
    lower_education_rich = (lower_education[mask].size / lower_education.size * 100).round(1)

    # What is the minimum number of hours a person works per week (hours-per-week feature)?
    min_work_hours = df['hours-per-week'].min()

    # What percentage of the people who work the minimum number of hours per week have a salary of >50K?
    num_min_workers = df[df['hours-per-week'] == min_work_hours]

    rich_percentage = ((num_min_workers[num_min_workers.salary == '>50K'].size / num_min_workers.size) * 100).round(1)

    # What country has the highest percentage of people that earn >50K?
    countries = pd.unique(df['native-country'].values)
    h_count_per = -1
    for country in countries:
        pd_country = df[df['native-country'] == country]
        percent = round((pd_country[mask].size / pd_country.size * 100), 1)
        if percent > h_count_per:
            h_count_per = percent
            highest_earning_country = country
            highest_earning_country_percentage = percent
        
    #highest_earning_country = None
    #highest_earning_country_percentage = None

    # Identify the most popular occupation for those who earn >50K in India.
    top = df[df['native-country'] == 'India']
    top = top[top['salary'] == '>50K']['occupation'].value_counts()
    
    top_IN_occupation = top.idxmax()

    # DO NOT MODIFY BELOW THIS LINE

    if print_data:
        print("Number of each race:\n", race_count) 
        print("Average age of men:", average_age_men)
        print(f"Percentage with Bachelors degrees: {percentage_bachelors}%")
        print(f"Percentage with higher education that earn >50K: {higher_education_rich}%")
        print(f"Percentage without higher education that earn >50K: {lower_education_rich}%")
        print(f"Min work time: {min_work_hours} hours/week")
        print(f"Percentage of rich among those who work fewest hours: {rich_percentage}%")
        print("Country with highest percentage of rich:", highest_earning_country)
        print(f"Highest percentage of rich people in country: {highest_earning_country_percentage}%")
        print("Top occupations in India:", top_IN_occupation)

    return {
        'race_count': race_count,
        'average_age_men': average_age_men,
        'percentage_bachelors': percentage_bachelors,
        'higher_education_rich': higher_education_rich,
        'lower_education_rich': lower_education_rich,
        'min_work_hours': min_work_hours,
        'rich_percentage': rich_percentage,
        'highest_earning_country': highest_earning_country,
        'highest_earning_country_percentage':
        highest_earning_country_percentage,
        'top_IN_occupation': top_IN_occupation
    }
