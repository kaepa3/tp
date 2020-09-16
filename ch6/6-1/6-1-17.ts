class Person<T extends string>{
    name: T
    constructor(name: T) {
        this.name = name
    }
}
const person = new Person('Taro')
const personName = person.name