interface User {
    name: string
    age: number | null
    gender: 'male' | 'female' | 'other'
    birthplace?: string
}

type ReadonlyWrapUser = Readonly<User>

type RequireWrapUser = {
    readonly name: string
    readonly age: number | null
    readonly gender: 'male' | 'female' | 'other'
    readonly birthplace?: string
}



