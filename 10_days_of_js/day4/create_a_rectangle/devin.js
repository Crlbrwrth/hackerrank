function Rectangle(a, b) {
    let rectangle = {
        length: a,
        width: b,
        perimeter: 2 * a + 2 * b,
        area: a * b
    };

    return rectangle;
}

console.log(Rectangle(2, 4));
