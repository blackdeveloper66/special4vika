console.log(nds(1000, 0.18));
console.log(nds(2000));
console.log(nds(3000, 0));

function nds(sum, k) {
    if (k == 0) { return 0; }

    return (k || 0.18) * sum;
}