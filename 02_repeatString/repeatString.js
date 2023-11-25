const repeatString = function(cadena, n) {
    let repeat = "";
    if(n < 0){
        return "ERROR"
    }
    for(let i = 0; i < n; i++){
        repeat += cadena;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
