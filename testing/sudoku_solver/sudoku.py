def main():
    starting_board = create_board()
    if len(starting_board) != 9:
        raise ValueError("Board does not have 9 rows")
    for row in starting_board:
        if len(row) != 9:
            raise ValueError("Board does not have 9 columns")
    backtrack_solve(starting_board)
    return

def create_board():
    board = [[0 for _ in range(9)] for _ in range(9)]
    board = [
    [0,0,9,4,3,8,7,0,0],
    [0,0,8,1,0,9,3,0,0],
    [0,0,7,0,0,0,9,0,0],
    [0,9,0,0,6,0,0,1,0],
    [2,0,0,0,0,0,0,0,3],
    [0,0,0,5,0,7,0,0,0],
    [8,0,3,0,0,0,4,0,6],
    [6,0,0,0,4,0,0,0,9],
    [0,0,5,0,0,0,8,0,0]]
    
    return board

def check_rows(board):
    for row in board:
        for num in range(1,10):
            if row.count(num) > 1:
                return False
    return True

def check_columns(board):
    for column in range(9):
        column_nums = []
        for row in board:
            column_nums.append(row[column])
        for num in range(1,10):
            if column_nums.count(num) > 1:
                return False
    return True

def check_squares(board):
    for x in x_regions.values():
        for y in y_regions.values():
            if valid_square(x,y,board) == False:
                return False
    return True

def valid_square(x,y,board):
    square = []
    for i in range(x[0],x[1]):
        for j in range(y[0],y[1]):
            square.append(board[i][j])
    for num in range(1,10):
        if square.count(num) > 1:
            return False
    return True

def complete(board):
    for row in board:
        if row.count(0) != 0:
            return False
    return True

def valid_board(board):
    return check_rows(board) and check_columns(board) and check_squares(board)
    
def backtrack_solve(board, x=0, y=0):
    if complete(board) and valid_board(board):
        for row in board:
            print(row)
        return
    
    if not valid_board(board):
        return
    
    #incremention location
    next_y = y + 1
    if next_y > 8:
        next_y = 0
        next_x = x + 1
    else:
        next_x = x

    #check every combo from 1 to 
    if board[x][y] != 0:
        backtrack_solve(board,next_x,next_y)
    else:
        for num in range(1,10):
            tmp = copy.deepcopy(board)
            tmp[x][y] = num
            backtrack_solve(tmp,next_x,next_y)



if __name__ == "__main__":
   import copy
   y_regions = {"top":(0,3), 
                "mid":(3,6),
                "bottom":(6,9)
                }
   x_regions = {"left":(0,3), 
                "mid":(3,6),
                "right":(6,9)
                } 
   main()