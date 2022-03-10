let date = new Date('01-01-1939');
// let date = new Date('1942-01-01');
exports.calculateTime = () => {
    let result = [];
    let now = new Date();

    now = new Date(Math.round((now.getTime() - date.getTime()) / 7 + date.getTime()));
    result.push(now.getFullYear() - date.getFullYear());
    result.push(now.getMonth() - date.getMonth()-5);
    result.push(now.getDate() - date.getDate()+2);
    return result;
}
