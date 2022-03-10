let start_rand = +prompt('Enter the number for the beginning of a range', '1');
let end_rand = +prompt('Enter the number for the end of a range', '100');

function dell_znach(start_rand, end_rand) {
    for (let i = start_rand; i <= end_rand; i++) {
        let sms_log = " - "
        if (i % 2 === 0)
            sms_log = " is even"
        if (i % 3 === 0 && i % 2 !== 0)
            sms_log = " is a multiple of 3"
        else if (i % 3 === 0)
            sms_log = sms_log.concat(", a multiple of 3")
        if (i % 10 === 0)
            sms_log = sms_log.concat(", a multiple of 10")
        console.log(i + sms_log + "\n")
    }
}

dell_znach(start_rand, end_rand);
