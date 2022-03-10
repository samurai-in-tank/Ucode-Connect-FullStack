// let date = new Date('02-05-1940');
let date = new Date('01-01-1939');

exports.calculateTime = () => {
    let result = {};
    let now = new Date();
    result.years = () => {
        return now.getFullYear() - date.getFullYear() -1;
    };
    result.months = () => {
        return now.getMonth() - date.getMonth() -1;
    };
    result.days = () => {
        return now.getDate() - date.getDate() -4;
    };
    return result;
}
