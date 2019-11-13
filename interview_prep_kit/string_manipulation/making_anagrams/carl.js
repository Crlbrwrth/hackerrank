function makeAnagram(a, b) {
    let a2 = a
        .split("")
        .filter(e => b.indexOf(e) >= 0)
        .sort();
    let b2 = b
        .split("")
        .filter(e => a.indexOf(e) >= 0)
        .sort();

    let x = equalize(a2, b2);
    console.log(a.length - x[0].length + b.length - x[1].length);
    return a.length - x[0].length + b.length - x[1].length;
}

function equalize(str1, str2, i = 0) {
    if (!str1[i] && !str2[i]) {
        console.log("aaa");
        return [str1, str2];
    }
    if (str1[i] === str2[i]) {
        console.log("oi", str1, str2, i);
        equalize(str1, str2, i + 1);
    }
    if (!str1[i]) {
        console.log("1 done");
        str2.splice(i);
        console.log("end1: ", str1, str2, i);
    }
    if (!str2[i]) {
        console.log("2 done");
        str1.splice(i);
        console.log("end2: ", str1, str2, i);
    }
    if (str1[i] < str2[i]) {
        str1.splice(i, 1);
        console.log("str1xx: ", str1, "str2xx: ", str2, "i: ", i);
        equalize(str1, str2, i);
    }
    if (str2[i] < str1[i]) {
        str2.splice(i, 1);
        console.log("str1yy: ", str1, "str2yy: ", str2, "i: ", i);
        equalize(str1, str2, i);
    }
    return [str1, str2];
}

// console.log(a.length - a2.length + (b.length - b2.length));
