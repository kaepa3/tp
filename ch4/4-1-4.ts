function greet(name?: string | undefined) {
    if (name === undefined) return 'Hello'
    return `Hello ${name.toUpperCase()}`
}

console.log(greet())
console.log(greet('Taro'))