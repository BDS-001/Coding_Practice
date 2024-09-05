def create_bar_graph_grid(data):
    if not data:
        return "Empty data array"

    # Find the maximum value in the data for scaling
    max_value = max(data)

    # Create the grid
    grid = []
    for y in range(max_value, 0, -1):
        row = []
        for x in range(len(data)):
            if data[x] >= y:
                row.append('█')
            else:
                row.append(' ')
        grid.append(row)

    # Convert grid to string
    result = ""
    for row in grid:
        result += ''.join(row) + '\n'

    # Add x-axis
    result += '▔' * len(data) + '\n'

    # Add x-axis labels
    x_labels = ''.join(str(i % 10) for i in range(len(data)))
    result += x_labels + '\n'

    return result

# Additional test cases
print(create_bar_graph_grid([0,1,2,0,3,0,1,2,0,0,4,2,1,2,5,0,1,2,0,2]))