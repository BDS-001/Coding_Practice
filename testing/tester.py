EMPTY = None


board = [[EMPTY, EMPTY, EMPTY],
            ["X", EMPTY, EMPTY],
            [EMPTY, EMPTY, "X"]]

print(sum(x.count("O") for x in board))


moves = [4,6,7,4,3,6,4]
test = [0 for _ in range(len(moves))]
print(test)





print("X" in board)

x = 0
if not x:
    print("not")