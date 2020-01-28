let counter = 0

function fac (number, product) {
    return product.split('').reverse().map((e, i) => {
    let str = ''
    let y = 0
    while (y < i) {
        str += '0'
        y++
    }
    return String(Number(e) * number) + str
    }).reverse().map(e => e.split('').map(f => {
        return Number(f)
    }))
}

// console.log(fac(1111, '5555'));

function sumUp(arr) {
    let sumArr = []
    while (arr.some(e => e.length)) {
        arr.forEach((e, i) => {
            if (JSON.stringify(e) !== '[]') {
                if (i === 0) sumArr.unshift(Number(e.pop()))
                else sumArr[0] += Number(e.pop())
            }
        })
    }
    return sumArr
}

// console.log(sumUp(fac(19, '199')))


function moveDecimalsUp (arr) {
    let newArr = [...arr]
    while(newArr.some(e => e > 9)) {
        arr.forEach((e, i) => {
            if (e > 9) {
                newArr[i] -= 10
                if (i > 0) {
                    newArr[i - 1]++
                }
            }
        })
        if (newArr[0] === 0) {
            newArr.unshift(1)
            counter++
        }
        arr = [...newArr]
    }
    console.log(counter)
    return newArr
}

// console.log(":) ", moveDecimalsUp(sumUp(fac(1111, '5555'))));


function extraLongFactorials (n) {
    console.time("lol")
    let curr = 1
    let sum = '1'
    while (curr <= n) {
        let sumArr = fac(curr, sum)
        let reducedDecimals = sumUp(sumArr)
        sum = moveDecimalsUp(reducedDecimals).join('')
        curr++
    }
    console.timeEnd("lol")
    console.log(sum)
}

// extraLongFactorials(45)

function runningTime(arr) {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        console.log(i, 'start')
        if (arr[i] > arr[i + 1]) {
            console.log(i, 'ääää');
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            counter++
            i = -1
        }
    }
    return counter
}

console.log(runningTime([10, 9, 8, 7, 6 ,5, 4, 3, 2, 1]))