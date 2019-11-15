function marsExploration(s) {
    return s.length - s.split("").filter((e, i) => ((e === "S") && (i % 3 !== 1)) || ((e === "O") && (i % 3 === 1))).length;
}