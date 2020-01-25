function kangaroo(x1, v1, x2, v2) {
    let difference = x2 - x1;
    let answer = "";

    if (v1 > v2 && difference % (v1 - v2) === 0) {
        answer = "YES";
    } else {
        answer = "NO";
    }

    return answer;
}
