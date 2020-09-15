function getFormattedValue(value: number, unit: string | null = null) {
    const _value = value.toFixed(1)
    if (unit === null) return `${_value}`
    return `${value.toFixed(1)} ${unit.toUpperCase()}`
}

console.log(getFormattedValue(100))
console.log(getFormattedValue(100, 'kg'))
console.log(getFormattedValue(100, 0))
