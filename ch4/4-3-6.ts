type UserC = { gender: string;[k: string]: any }
type UserD = UserC & { name: string }
type UserE = UserC & { age: number }

function isUserD(user: UserD | UserE): user is UserC {
    return user.name !== undefined
}
