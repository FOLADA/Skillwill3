function Numbers(...numbers) {
    if (numbers.length <= 2) {
        return "დაამატეთ რიცხვები."
    }
    const Num1 = numbers[0] + numbers[1]
    let Num2 = 1
    for (let i = 2; i < numbers.length; i++) {
        Num2 *= numbers[i]
    }
    return [Num1, Num2]
}
console.log(Numbers(1,2,3,4))
console.log(Numbers(5,6))
console.log(Numbers(5,6,8,9))
console.log(Numbers(1,45,65,76,89,12,31,4,5))
