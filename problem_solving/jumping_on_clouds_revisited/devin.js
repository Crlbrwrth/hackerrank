// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    // C = CLouds , K = Jump Size;
    let energy = 100;
    let loop = 0;

    for (let i = 0 + k; energy > 0; i += k) {
        if (i > c.length - 1) {
            i = i - c.length;
            loop++;
            if (c[i] === 1) {
                energy -= 3;
            }

            if (c[i] === 0) {
                energy -= 1;
            }
        } else {
            if (c[i] === 1) {
                energy -= 3;
            }

            if (c[i] === 0) {
                energy -= 1;
            }
        }

        if (i === 0 && loop > 0) {
            return energy;
        }
    }
}
