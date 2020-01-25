function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];

    let s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
    let s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;

    let array = [s1, s2];

    array = array.sort((min, max) => {
        return min - max;
    });

    return array;
}
