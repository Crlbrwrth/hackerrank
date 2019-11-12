function staircase(n) {
    let steps = n;
    let blankSpace = " ";
    let step = "";

    for (let i = 0; i <= n; i++) {
        if (steps === 0) {
            return;
        } else {
            step += "#";
            console.log(blankSpace.repeat(steps) + step);
            steps--;
        }
    }
}

staircase(2);
