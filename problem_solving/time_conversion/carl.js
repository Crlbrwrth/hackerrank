function timeConversion(s) {
    if (s == "12:00:00AM") return "00:00:00";
    if (s == "12:00:00PM") return "12:00:00";
    if (s.slice(0, 2) == "12" && s.slice(-2) == "AM") {
        return "00" + s.slice(2, -2);
    }
    if (s.slice(0, 2) == "12") return s.slice(0, -2);
    if (s.slice(-2) == "PM") {
        return (Number(s.slice(0, 2)) + 12).toString() + s.slice(2, -2);
    }
    return s.slice(0, -2);
}

console.log(timeConversion("12:45:54PM"));
