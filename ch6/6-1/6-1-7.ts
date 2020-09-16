function boxed<T extends string>(props: T) {
    return { value: props }
}

const boxed0 = boxed("test")
const boxed1 = boxed(0)

