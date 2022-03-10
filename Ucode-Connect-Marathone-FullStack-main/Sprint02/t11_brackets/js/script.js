function checkBrackets(str) {
    let data_left = 0;
    let data_right = 0;
    let data_result = 0;

    if (!str)
        return String(-1);
    
    for (let i = 0 ; i < str.length; i++) {
        if (str[i] === '(')
            data_left++;
        else if (str[i] === ')') {
            data_right++;
            if (data_right > data_left) {
                data_result++;
                data_right = 0;
                data_left = 0;
            }
        }
    }
    if (data_left === 0 && data_right === 0 && data_result === 0)
        data_result = -1;
    else if (data_left > data_right)
        data_result += data_left - data_right;
    
    return String(data_result);
}
