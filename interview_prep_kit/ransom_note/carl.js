function checkMagazine(magazine, note) {

    for (let i = 0; i < note.length; i++) {
        if (magazine.some((e) => e == note[i])) {
            magazine.splice(magazine.indexOf(note[i]), 1);
        } else {
            console.log("No");
            return;
        }
    }
    console.log("Yes");

    
    // This solution was inefficient and timed out on 2 testcases

    // let can = "Yes";
    // note.forEach(w => {
    //     if (magazine.some((e) => e == w)) {
    //         magazine.splice(magazine.indexOf(w), 1);
    //     } else {
    //         can = "No";
    //     }
    // });
    // console.log(can);


}