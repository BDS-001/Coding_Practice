def check(s):
    s = s.lower()
    reverse_range = (len(s) - 1)
    # loop though each letter in the word
    for index in range(len(s)):
        #start a loop to go from the back of a word to the current index
        for i in range(reverse_range, -1, -1):
            #skip the check of first and last letter to get subsequences only
            if index == 0 and i == reverse_range:
                continue
            # if i is less than or equal to the length of array and i doesnt equal the current index then proceed otherwise break and check next index
            if i >= 0 and index < i:
                #if 2 leters match there is a chance for a pallendrome the string is equal to the index up to the copy letter
                if s[index] == s[i]:
                    if i == reverse_range:
                        test = s[index:]
                    else:
                        test = s[index:i + 1]

                    reverse = pal(test)
                    if reverse == test:
                        return reverse
            else:
                break
    return 'No Pallendrome sequence'
        
        
def pal(pallendrome):
    reverse = ''
    for letter in pallendrome:
        reverse = letter + reverse
    return reverse


def main():
    string = 'gfjnyioytdjbsfgdaactgttcaatjdroinmdytjmdty'
    print(check(string))
    

if __name__ == '__main__':
    main()