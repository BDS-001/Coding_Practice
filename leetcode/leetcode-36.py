class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        MAX = 9
        i = 0
        j = 0
        used = []
        
        #check rows
        while True:
            check = board[i][j]
            if check.isnumeric():
                if check in used:
                    return False
                used.append(check)
            j += 1
            if j == MAX:
                j = 0
                i += 1
                used = []
                if i == MAX:
                    i = 0
                    j = 0
                    break
                
        #check columns    
        while True:
            check = board[i][j]
            if check.isnumeric():
                if check in used:
                    return False
                used.append(check)
                
            i += 1
            if i == MAX:
                i = 0
                j += 1
                used = []
                if j == MAX:
                    i = 0
                    j = 0
                    break
                    
        rowmax = 3
        rowmin = 0
        columnmax = 3
        columnmin = 0
        #check columns
        col = 0
        row = 0
        while True:
            check = board[col][row]
            if check.isnumeric():
                if check in used:
                    return False
                used.append(check)
            
            # if row i at the end of the box move down one and reset row
            row += 1
            if row == rowmax:
                row = rowmin
                col += 1
                # if box column reaches max move over to the next box to the right
                #reset used array
                if col == columnmax:
                    rowmin += 3
                    rowmax += 3
                    row = rowmin
                    col = columnmin
                    used = []
                    #if rows cannot move over anymore move down ad resset rows to 0
                    if rowmax > 9:
                        rowmin = 0
                        rowmax = 3
                        columnmin += 3
                        columnmax += 3
                        row = rowmin
                        col = columnmin
                        # if the column can no longer move down the check is over return True
                        if columnmax > 9:
                            return True
                        
                    
                    