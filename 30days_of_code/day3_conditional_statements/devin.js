function main() {
    const N = parseInt(readLine(), 10);

    console.log(
        N % 2 === 1
            ? "Weird"
            : N % 2 === 0 && N > 20
            ? "Not Weird"
            : N % 2 === 0 && N <= 5
            ? "Not Weird"
            : "Weird"
    );
}
