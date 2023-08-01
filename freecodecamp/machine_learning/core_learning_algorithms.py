def main():
    import pandas as pd

    data = {
        'survived':[0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1],
    }

    sex = []
    for num in data['survived']:
        if num == 0:
            sex.append('male')
        else:
            sex.append('female')
    data['sex'] = sex
    data['age'] = [22,38,26,35,28,2,27,14,4,20,30,14,2,28,31,28,28,35,28,38]
    data['n_siblings_'] = [1,1,0,1,0,3,0,1,1,0,1,0,4,0,1,0,0,0,1,1]
    
    for k,v in data.items():
        print(k , len(v))
    df = pd.DataFrame.from_dict(data)
    print(df.head())



if __name__=="__main__":
    main()