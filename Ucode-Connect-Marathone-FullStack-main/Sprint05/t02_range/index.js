function checkDivision(start_rand, end_rand) {
    if(start_rand == null)
        start_rand = 60;
    if(end_rand == null)
        end_rand = 60;

    for (let i = start_rand; i <= end_rand; i++) {
        var sms_log = " - "
        if (i % 2 === 0)
            sms_log = " is divisible by 2"
        if (i % 3 === 0 && i % 2 !== 0)
            sms_log = " is divisible by 3"
        else if (i % 3 === 0)
            sms_log = sms_log.concat(", is divisible by 3")
        if (i % 10 === 0)
            sms_log = sms_log.concat(", is divisible by 10")
        console.log("The number " + i + sms_log + "")
    }
}

module.exports.checkDivision = checkDivision;
