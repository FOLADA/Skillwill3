const user  = {
    name : 'Saba',
    lName : 'Foladashvili',
    profile : { 
        age : 15,
        nickname : 'Folada'
    },
    Hobbies : ['Reading', 'Teaching']
}
const deepcopy = (user) => {
    const Newuser = { ...user, 
        profile : { 
            ...user.profile
        },
        Hobbies : [
            ...user.Hobbies
        ]
    }
    return Newuser
}
const newUserCopy = deepcopy(user)
console.log(newUserCopy)
console.log(newUserCopy === user)
