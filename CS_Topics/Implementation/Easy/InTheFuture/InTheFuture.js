/*
 * Complete the function below.
 */
function calcDays(input) {
    input = input.split(' ');
    var asha = +input[0];
    var kelly = +input[1];
    var lead = +input[2];

    var cob = {
        asha: lead,
        kelly: 0,
        day: 0
    }
    if (asha >= kelly) return -1
    while(cob.asha >= cob.kelly){
        cob.asha += asha;
        cob.kelly += kelly;
        cob.day++
    }

    return cob.day;
}

console.log(calcDays('3 6 6'))
console.log(calcDays('4 5 1'))
