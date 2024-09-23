1
const arr = []

2
const arr2 = [1, 2, 3, 4, 5, 6, 7]

3
console.log(arr2.length)

4
console.log(arr2[0])
console.log(arr2[3])
console.log(arr2[6])

5
const mixedDataTypes = [5, 'kaas', false, 6, true, 'ham']
console.log(mixedDataTypes)

6
const itCompanies= ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

7
console.log(itCompanies)

8
console.log(itCompanies.length)

9
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

10
itCompanies.forEach(company =>
    console.log(company)
)

11
itCompanies.forEach(company => {
    const companyUppercase = company.toUpperCase();
    console.log(companyUppercase)
})

12
console.log(itCompanies.toString())

13
let index = itCompanies.indexOf('Kaas')
if(index != -1){
    console.log(index)
} else {
    console.log('not found')
}

14
for (let i = 0; i < itCompanies.length; i++){
    const count = itCompanies[i].split('o'). length -1
    if(count > 1){
        itCompanies.splice(i, 1)
        i--
    }
}
console.log(itCompanies)

itCompanies.push('Google', 'Microsoft', 'Facebook');

15
sortCompanies = itCompanies.sort()
console.log(sortCompanies)

16
reverseCompanies = itCompanies.reverse()
console.log(reverseCompanies)