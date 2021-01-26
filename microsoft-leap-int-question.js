function printSpaces(i, n, str) {
    for (let j = i; j < n; j++) {
        str = str + " "
    }

    return str
}

function printTriangle(n) {
    var str = ""
    for (let i = 1; i < n + 1; i++) {
        str = printSpaces(i, n, str)

        for (let j = 0; j < i; j++) {
            let number = i.toString()
            str = str + ` ${number}`
        }

        str = str + "\n"
    }
    console.log(str)
}

printTriangle(4)
