class Category:

    def __init__(self, name):
        self.name = name
        self.total = 0
        self.ledger = []

    def __str__(self):
        return str(self.total)

    def deposit(self, amount, desc=''):
        self.total += amount
        deposit = {'amount': amount, 'description' : desc}
        self.ledger.append(deposit)
        return
    
    def withdraw(self, amount, desc=''):
        if amount > self.total:
            return False
        else:
            self.total -= amount
            amount *= -1
            withdraw = {'amount': amount, 'description' : desc}
            self.ledger.append(withdraw)
            return True

    def transfer(self, amount, source):
        if source.total > amount:
            return False
        source.deposit(amount, f'Tranfer from {self.name}')
        self.withdraw(amount, f'Transfer to {source.name}')
        return True

    def get_withdrawls(self):
        withdrawls = 0
        print('***********************************************************************************')
        print(self.name)
        for entry in self.ledger:
            print(entry)
            if entry['amount'] < 0:
                withdrawls += entry['amount'] *-1
                print(withdrawls)
        return round(withdrawls, 2)

    def get_balance(self):
        #define needed variables
        WIDTH = 30
        result = ''

        # Create the title of the output
        title = WIDTH - len(self.name)
        title_left = title / 2
        title_right = title / 2
        if title % 2 == 1:
            title_left += 0.5
            title_right -= 0.5
        title_left = int(title_left)
        title_right = int(title_right)
        title = '*' * title_left + self.name + '*' * title_right
        result += title + '\n'
        # add ledger results to the output
        for entry in self.ledger:
            # make sure the description isnt longer than 23 characters
            desc = entry['description'][:23]
            amount = str(entry['amount'])
            space = WIDTH - (len(desc) + len(amount))
            result += desc + " " * space + amount + '\n'
        #add the total to the result and return the string
        result += f'Total: {str(self.total)}\n'
        return result


def get_total(categories):
    total_spending = 0
    for category in categories:
        total_spent = category.get_withdrawls()
        total_spending += total_spent
    return total_spending

def create_spend_chart(categories):
    y_axis = []
    category_data = []
    longest_name = 0
    total_spending = get_total(categories)
    spend_chart = 'Percentage spent by category\n\n'

    for i in range(11):
        scale = (i) * 10
        if scale == 100:
            y_axis.append(f'{scale}|')
        elif scale == 0:
            y_axis.append(f'  {scale}|')
        else:
            y_axis.append(f' {scale}|')

    for category in categories:
        percent = round((category.get_withdrawls() / total_spending) * 100)
        name = category.name
        if len(name) > longest_name:
            longest_name = len(name)
        category_dict = {'name': name, 'percent' : percent}
        category_data.append(category_dict)
    
    name_divider = [" " * 4] * int(longest_name + 1)
    name_divider[0] += '---' * len(categories)

    for entry in category_data:
        for i in range(11):
            if entry['percent'] >= i * 10:
                y_axis[i] += ' o '
            else:
                y_axis[i] += '   '

        name = entry['name']
        for i in range(longest_name):
            i += 1
            name = entry['name']
            word_length = len(entry['name'])
            if i > word_length:
                name_divider[i] += '   '
            else:
                name_divider[i] += f' {name[i - 1]} '


    for i in range(len(y_axis) - 1, -1, -1):
        spend_chart += y_axis[i] + '\n'
    for letter in name_divider:
        spend_chart += letter + '\n'

    return spend_chart



