import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()

# Import data (Make sure to parse dates. Consider setting index column to 'date'.)
df = pd.read_csv('fcc-forum-pageviews.csv', parse_dates = ['date'], index_col = 'date')


# Clean data
df = df[(df['value'] > df['value'].quantile(0.025)) &              
        (df['value'] < df['value'].quantile(0.975))]


def draw_line_plot():
    # Draw line plot
    print(df.head())
    
    fig, ax = plt.subplots()
    fig.set_size_inches(20, 10, forward=True)
    ax.plot(df.index, df['value'])
    
    fig.suptitle('Daily freeCodeCamp Forum Page Views 5/2016-12/2019')
    ax.set_xlabel('Date', fontsize=12)
    ax.set_ylabel('Page Views', fontsize=10)




    # Save image and return fig (don't change this part)
    fig.savefig('line_plot.png')
    return fig

def draw_bar_plot():
    # Copy and modify data for monthly bar plot
    months = ['', 'january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august',                 'september', 'october', 'november', 'december']
    hue_order = months[1:]
    
    df_bar = df.copy()
    df_bar['year'] = df.index.year
    df_bar['month'] = df.index.month
    df_bar = df_bar.sort_values(['year', 'month'])
    df_bar = df_bar.groupby(['year', 'month'], as_index=False)['value'].mean()
    df_bar['month'] = df_bar['month'].apply(lambda x: months[x])
    print(df_bar.head())

    # Draw bar plot
    fig = sns.catplot(x='year', y='value', data=df_bar, kind='bar',    hue='month',hue_order=hue_order)

    # Save image and return fig (don't change this part)
    fig.savefig('bar_plot.png')
    return fig

def draw_box_plot():
    # Prepare data for box plots (this part is done!)
    df_box = df.copy()
    df_box.reset_index(inplace=True)
    df_box['year'] = [d.year for d in df_box.date]
    df_box['month'] = [d.strftime('%b') for d in df_box.date]

    # Draw box plots (using Seaborn)
    df_box['month_num'] = df_box['date'].dt.month
    df_box = df_box.sort_values('month_num')
    print(df_box.head())
    fig, ax = plt.subplots(nrows=1,ncols=2, figsize=(20,10))
    ax[0] = sns.boxplot(x='year', y='value', data=df_box, ax=ax[0]).set(title='Year-wise Box Plot (Trend)', ylabel='Page Views')
    ax[1] = sns.boxplot(x='month', y='value', data=df_box, ax=ax[1]).set(title='Month-wise Box Plot (Seasonality)')






    # Save image and return fig (don't change this part)
    fig.savefig('box_plot.png')
    return fig
