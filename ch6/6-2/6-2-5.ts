interface Properties {
    name: string
    age: number
    walk: () => void
    jump: () => Promise<void>
}

type Filter<T, U> = {
    [K in keyof T]: T[K] extends U ? true : false
}