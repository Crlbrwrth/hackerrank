function timeConversion(s) {
    let am = s.split("").includes("A");
    let arr = s.slice(0, -2).split(":");

    if (am === true && arr[0] == "12") {
        arr[0] = "00";
    } else if (am === false && arr[0] !== "12") {
        arr[0] = Number(arr[0]) + 12;
    }

    return arr.join(":");
}

console.log(timeConversion("07:05:45PM"));
