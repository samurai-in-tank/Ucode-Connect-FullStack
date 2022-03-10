let cleanArr = (x) => {
    let data_array = []
    for (let i = 0; i < x.length; i++) {
        if (x[i]) {
            data_array.push(x[i])
        }
    }
    let secarr = [];
    for (let i = 0; i < data_array.length; i++) {
        let current = data_array[i];
        if (!~secarr.indexOf(current)) {
            secarr.push(current)
        }
    }
    return secarr
}

let addWords = (obj, wrds) => {
    let add_data_array = Object.values(obj)
    add_data_array = String(add_data_array)
    add_data_array = add_data_array + " " + wrds
    add_data_array = add_data_array.split(" ")
    add_data_array = cleanArr(add_data_array)
    obj["words"] = add_data_array.join(" ")
    return obj
}

let removeWords = (obj, wrds) => {
    let remove_data_array = Object.values(obj)
    remove_data_array = String(remove_data_array)
    remove_data_array = remove_data_array.split(" ")
    remove_data_array = cleanArr(remove_data_array)
    let remove_S_data_array = cleanArr(wrds.split(" "))

    for (let i = 0; i < remove_S_data_array.length; i++) {
        let item = remove_S_data_array[i]
        let index = remove_data_array.indexOf(item)
        if (index > -1) {
            remove_data_array.splice(index, i)
        }
    }
    obj["words"] = remove_data_array.join(" ")
    return obj
}

let changeWords = (obj, wrds, newwords) => {
    let change_data_array = Object.values(obj)
    change_data_array = String(change_data_array)
    change_data_array = change_data_array.split(" ")
    change_data_array = cleanArr(change_data_array)
    let news = cleanArr(newwords.split(" "))
    let olds = cleanArr(wrds.split(" "))

    for (let i = 0; i < olds.length; i++) {
        let item = olds[i]
        let index = change_data_array.indexOf(item)
        if (index > -1) {
            change_data_array.splice(index, i)
        }
    }
    for (let i = 0; i < news.length; i++) {
        let item = news[i]
        change_data_array.push(item)
    }

    obj["words"] = change_data_array.join(" ")
    return obj
}
