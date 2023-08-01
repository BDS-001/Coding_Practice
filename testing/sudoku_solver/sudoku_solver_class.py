class Sudoku:
    def __init__(self, board=[]):
        self.board = board
        self.solution = []
        self.solved = False
        self.y_regions = {"top":(0,3), 
                "mid":(3,6),
                "bottom":(6,9)
                }
        self.x_regions = {"left":(0,3), 
                "mid":(3,6),
                "right":(6,9)
                } 

    @property
    def board(self):
        return self._board
    
    @board.setter
    def board(self, b):
        if not b:
            print("Using Demo Board")
            self._board = self.create_board()
        else:
            if len(b) != 9:
                raise ValueError("Board does not have 9 rows")
            for row in b:
                if len(row) != 9:
                    raise ValueError("Board does not have 9 columns")
            self._board = b

    def create_board(self):
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

    def check_rows(self,board):
        for row in board:
            for num in range(1,10):
                if row.count(num) > 1:
                    return False
        return True

    def check_columns(self,board):
        for column in range(9):
            column_nums = []
            for row in board:
                column_nums.append(row[column])
            for num in range(1,10):
                if column_nums.count(num) > 1:
                    return False
        return True

    def check_squares(self,board):
        for x in self.x_regions.values():
            for y in self.y_regions.values():
                if self.valid_square(x,y,board) == False:
                    return False
        return True

    def valid_square(self,x,y,board):
        square = []
        for i in range(x[0],x[1]):
            for j in range(y[0],y[1]):
                square.append(board[i][j])
        for num in range(1,10):
            if square.count(num) > 1:
                return False
        return True

    def complete(self,board):
        for row in board:
            if row.count(0) != 0:
                return False
        return True

    def valid_board(self,board):
        return self.check_rows(board) and self.check_columns(board) and self.check_squares(board)
        
    def solve(self):
        if self.solved:
            for row in self.solution:
                print(row)
        else:
            self.backtrack_solve(self.board)
            if self.solved:
                for row in self.solution:
                    print(row)
            else:
                print("there is no solution")

    def backtrack_solve(self,board, x=0, y=0):
        #base case
        if self.solved == True:
            return

        if self.complete(board) and self.valid_board(board):
            self.solution = board
            self.solved = True
            return
        
        if not self.valid_board(board):
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
            self.backtrack_solve(board,next_x,next_y)
        else:
            from copy import deepcopy
            for num in range(1,10):
                tmp = deepcopy(board)
                tmp[x][y] = num
                self.backtrack_solve(tmp,next_x,next_y)

def main():
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
    
    starting_board = Sudoku(board)
    starting_board.solve()
    return

if __name__ == "__main__":
   main()