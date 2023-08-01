from tictactoe import initial_state, player, actions, result, winner, terminal, utility, minimax

EMPTY = None
sample = [[EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY]]


#test player
test = sample.copy()
print(player(test), "player X")

test = [[EMPTY, "X", EMPTY],
            [EMPTY, "O", EMPTY],
            [EMPTY, EMPTY, "X"]]

print(player(test), "player O")
print("PASS")
print("------------------------------------------------------------------------------------------------------")


#test actions
test = sample.copy()
print(test)
print(actions(test))
test = [[EMPTY, "X", EMPTY],
            [EMPTY, "O", EMPTY],
            [EMPTY, EMPTY, "X"]]
print(actions(test))

print("PASS")
print("------------------------------------------------------------------------------------------------------")


#test result
tmp = [[EMPTY, "X", EMPTY],
            [EMPTY, "O", EMPTY],
            [EMPTY, EMPTY, "X"]]
test = [["O", "X", EMPTY],
            [EMPTY, "O", EMPTY],
            [EMPTY, EMPTY, "X"]]
print(test == result(tmp, (0,0)))
print("PASS")
print("------------------------------------------------------------------------------------------------------")


#test winner
print(winner(test) == None)

test = [["O", "X", "X"],
            ["X", "O", EMPTY],
            [EMPTY, EMPTY, "O"]]

print(winner(test) == "O")

test = [["O", "O", EMPTY],
            [EMPTY, EMPTY, EMPTY],
            ["X", "X", "X"]]

print(winner(test) == "X")

test = [["O", "X", EMPTY],
            [EMPTY, "X", EMPTY],
            ["O", "X", "O"]]

print(winner(test))
print("PASS")
print("------------------------------------------------------------------------------------------------------")


#test terminal
test = [["O", "O", EMPTY],
            [EMPTY, EMPTY, EMPTY],
            ["X", "X", "X"]]
print(terminal(test) == True)

test = [["O", "O", EMPTY],
            [EMPTY, EMPTY, EMPTY],
            ["X", EMPTY, "X"]]

print(terminal(test) == False)

test = [["O", "X", "X"],
        ["X", "O", "O"],
        ["X", "O", "X"]]
print(terminal(test)==True)

print("PASS")
print("------------------------------------------------------------------------------------------------------")



#test utility

print(utility(test) == 0)

test = [["O", "O", EMPTY],
            [EMPTY, EMPTY, EMPTY],
            ["X", "X", "X"]]

print(utility(test) == 1)

test = [["O", "X", "X"],
            ["X", "O", EMPTY],
            [EMPTY, EMPTY, "O"]]

print(utility(test)==-1)


print("PASS")
print("------------------------------------------------------------------------------------------------------")

