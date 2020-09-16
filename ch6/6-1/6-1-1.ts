interface Box<T extends string | number> {
    value: T
}

const box0: Box = { value: 'test' }
const box1: Box<string> = { value: 'test' }
const box2: Box<number> = { value: 0 }
const box3: Box<boolean> = { value: false }
