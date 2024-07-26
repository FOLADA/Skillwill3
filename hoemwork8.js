const user1 = {
    banks: [
        { address: { city: 'Tbilisi' } },
        { address: { city: 'Kutaisi' } },
        { address: { city: 'Batumi' } },
    ]
}
function city(user1){
    const {banks} = user1
    if (banks && banks[2] && banks[2].address){
        const {city} = banks[2].address
        return city 
    } else { 
        return undefined
    }
}

console.log(city(user1))