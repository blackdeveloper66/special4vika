function createNdsFunction(k) {
    return function(sum) {
        return sum * k;
    };
}

var nds_0  = createNdsFunction(0);
var nds_10 = createNdsFunction(0.1);
var nds_18 = createNdsFunction(0.18);
var nds_20 = createNdsFunction(0.2);

console.log(nds_0(1000));
console.log(nds_10(1000));
console.log(nds_18(1000));
console.log(nds_20(1000));

/*
function nds_0(sum) {
    return sum * 0;
}

function nds_10(sum) {
    return sum * 0.10;
}

function nds_18(sum) {
    return sum * 0.18;
}

function nds_20(sum) {
    return sum * 0.2;
}
*/