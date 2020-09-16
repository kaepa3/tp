interface User {
    name: string
    age: number
    gender: 'male' | 'female' | 'other'
    birth: {
        day: Date
        place?: {
            country?: string | null
            state?: string
        }
    }
}
type Unbox<T> = T extends { [k: string]: infer U } ? U
    : T extends (infer U)[] ? U
    : T
type isPrimitive<T> = T extends Unbox<T> ? T : never