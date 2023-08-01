import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress

def draw_plot():
    # Read data from file
    df = pd.read_csv('epa-sea-level.csv')
    #print(df.head())
    #print(df['Year'].head())
    x = df['Year']
    y = df['CSIRO Adjusted Sea Level']


    # Create scatter plot
    plt.plot(x, y, 'ro', label='From 1880')


    # Create first line of best fit
    res = linregress(df['Year'], df['CSIRO Adjusted Sea Level'])
    x = pd.Series([date for date in range(1880, 2051)])
    y = res.intercept + res.slope*x
    plt.plot(x, y, 'b-', label='1880 to current line of best fit')


    # Create second line of best fit
    df = df[df['Year'] > 1999]
    res = linregress(df['Year'], df['CSIRO Adjusted Sea Level'])
    x = pd.Series([date for date in range(2000, 2051)])
    y = res.intercept + res.slope*x
    plt.plot(x, y, 'g-', label='2000 to current line of best fit')
    plt.xlim(1880, 2050)


    # Add labels and title
    plt.legend()
    plt.xlabel('Year')
    plt.ylabel('Sea Level (inches)')
    plt.title('Rise in Sea Level')

    
    # Save plot and return data for testing (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return plt.gca()
