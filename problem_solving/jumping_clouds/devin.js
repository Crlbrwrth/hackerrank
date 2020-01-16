function jumpingOnClouds(c, k) {
    let energy = 100;
    let currentCloud = 1;

    console.log("Cloud array: ", c.length);
    console.log("Jump length: ", k);

    for (let i = 0; i <= c.length; i += k) {
        if (c[i] === 0) {
            energy--;
            currentCloud += k;
        } else if (c[i] === 1) {
            energy -= 3;
            currentCloud += k;
        }

        console.log("Cloud after move: ", currentCloud);

        if (i > c.length && currentCloud - c.length + k === c.length) {
            return energy;
        } else if (i > c.length && currentCloud - c.length + k !== c.length) {
            i = currentCloud - c.length;
        }
    }

    return energy;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 0], 3));
