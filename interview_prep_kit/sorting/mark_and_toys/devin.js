function maximumToys(prices, k) {
    let funds = k;
    let toysPurchased = 0;

    let toys = prices.sort((min, max) => {
        return min - max;
    });

    toys.forEach(e => {
        if (funds - e > 0) {
            funds -= e;
            toysPurchased++;
        }
    });

    return toysPurchased;
}
