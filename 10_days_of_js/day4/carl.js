// RECTANGLE OBJECT

function Rectangle(a, b) {
    let obj = {
        length: a,
        width: b,
        perimeter: 2 * a + 2 * b,
        area: a * b
    };
    return obj;
}

// COUNT OBJECTS

function getCount(objects) {
    return objects.filter(o => o.x === o.y).length;
}

// CLASSES

class Polygon {
    constructor(arr) {
        this.array = arr;
    }
    perimeter() {
        return this.array.reduce((sum, e) => (sum += e));
    }
}
