function chocolateFeast(n, c, m) {
    let barsEaten = 0;
    let wrappers = 0;

    let intialBars = Math.floor(n/c);
    barsEaten += intialBars;
    wrappers = intialBars;
    console.log("wrappers: ", wrappers);
    console.log("barsEaten: ", barsEaten);
    
    

    while (wrappers >= m) {
        barsEaten += Math.floor(wrappers/m);
        wrappers = Math.floor(wrappers/m) + wrappers % m;
    }
    return barsEaten;
}

console.log(chocolateFeast(6, 2, 2));
