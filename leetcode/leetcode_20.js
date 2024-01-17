var isValid = function(s) {
    const legend = {
        "{": "}",
        "(": ")",
        "[": "]"
    };

    const stack = [];

    for (const bracket of s) {
        if (legend[bracket]) {
            stack.push(bracket);
        } else {
            const top = stack.pop();
            if (legend[top] !== bracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
};