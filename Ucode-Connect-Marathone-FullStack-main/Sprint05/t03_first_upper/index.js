function firstUpper(stroka){
    if (!stroka) return stroka;
    if (stroka == "" || stroka == null) return "";
    stroka = stroka.trim().toLowerCase();
    stroka = stroka.charAt(0).toUpperCase() + stroka.slice(1, stroka.length);
    return stroka;
}

module.exports.firstUpper = firstUpper;
