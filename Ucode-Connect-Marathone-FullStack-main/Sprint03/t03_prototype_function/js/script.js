String.prototype.removeDuplicates = function removeDuplicates() {
    let str = this.replace(/ +(?= )/g,'').trim();
    let data_array = str.split(' ');

    str = data_array.filter((item, index, data_array) => {
        return data_array.indexOf(item) === index;
    }).join(' ');

    return str;
};
