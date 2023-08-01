problems = ["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]

def arithmetic_arranger(problems, add=False):
    top = ""
    bottom = ""
    divider = ""
    result = ""
    
    for problem in problems:
        problem = problem.split()
        if problem[1] != "+" and problem[1] != "-":
            return "Error: Operator must be '+' or '-'."
        elif len(problem[0]) > 4 or len(problem[2]) > 4:
            return "Error: Numbers cannot be more than four digits."
        else:
            try:
                typecheck = int(problem[0])
                typecheck = int(problem[2])
            except:
                return "Error: Numbers must only contain digits."

        # Check if the top is longer or shorter than bottom number
        if len(problem[0]) > len(problem[2]):
            tmp_top = " " * 2 + problem[0] + " " * 4
            bottom_spaces = len(problem[0]) - len(problem[2])
            tmp_bottom = problem[1] + " " + " " * bottom_spaces + problem[2] + " " * 4
        else:
            top_spaces = len(problem[2]) - len(problem[0])
            tmp_top = " " * 2 + " " * top_spaces + problem[0] + " " * 4
            tmp_bottom = problem[1] + " " + problem[2] + " " * 4
        
        # Create the length of the dashes and the results
        if len(tmp_top) > len(tmp_bottom):
            dashes = "-" * (len(tmp_top) - 4) + " " * 4
        else:
            dashes = "-" * (len(tmp_bottom) - 4) + " " * 4

        if add == True:
            num1 = int(problem[0])
            num2 = int(problem[2])
            if problem[1] == "-":
                tmp_result = str(num1 - num2)
            else:
                tmp_result = str(num1 + num2)
            result_spaces = (len(dashes) - 4) - len(tmp_result)
            tmp_result = " " * result_spaces + tmp_result + " " * 4
            result += tmp_result
                
        
        #add tmp values to variables
        top += tmp_top
        bottom += tmp_bottom
        divider += dashes

            

    if add == True:
        arranged_problems = (top + "\n") + (bottom + "\n") + (divider + "\n") + (result)
    else:
        arranged_problems = (top + "\n") + (bottom + "\n") + (divider)
    return arranged_problems

print(arithmetic_arranger(problems, True))