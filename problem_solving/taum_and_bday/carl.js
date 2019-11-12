function taumBday(b, w, bc, wc, z) {
    let priceA = w * wc + (wc + z) * b;
    let priceB = b * bc + (bc + z) * w;
    let priceC = b * bc + w * wc;
    console.log(priceA, priceB, priceC);
    
    return Math.min(priceA, priceB, priceC);
}

console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924));
