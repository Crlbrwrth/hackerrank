function bonAppetit(bill, k, b) {
    let mealCost = bill.reduce((acc, cur) => {
        return acc + cur;
    });

    let annsBill = (mealCost - bill[k]) / 2;

    return annsBill === b
        ? console.log("Bon Appetit")
        : console.log(b - annsBill);
}
