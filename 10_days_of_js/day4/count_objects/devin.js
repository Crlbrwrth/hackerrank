// function getCount(objects) {
//     return objects.filter(object => object.x === object.y).length;
// }
//

function getCount(objects) {
    let counter = 0;
    for (let i = 0; i < objects.length - 1; i++) {
        if (objects[i].x === objects[i].y) {
            counter++;
        }
    }

    return counter;
}

getCount([{ x: 1, y: 1 }, { x: 3, y: 2 }, { x: 4, y: 4 }, { x: 6, y: 8 }]);
