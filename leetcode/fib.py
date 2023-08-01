def memoize(n):
    return [None for _ in n + 1]

def bottomfib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1

    prev2 = 0
    prev1 = 1
    count = 2
    num = 1
    
    while count <= n:
        if count == n:
            return num
        else:
            prev2, prev1 = prev1,num
            num = prev1 + prev2
            count += 1

        


def main():
    print('yes')
    print(bottomfib(30))




if __name__ == "__main__":
    main()