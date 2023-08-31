data = '0.0146 2,370 2095 0.7 153.3 5906.4 -225 5'
dataList = data.split(' ')

for data in dataList:
    print(f'td{{{data}}}+', end='')

print('td{}')