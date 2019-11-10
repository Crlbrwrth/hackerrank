function gradingStudents(grades) {
    return grades.map(e => {
        if (e < 38) return e;
        if (e % 5 > 2) return e + 5 - (e % 5);
        return e;
    });
}
console.log(gradingStudents([40, 50, 55]));
