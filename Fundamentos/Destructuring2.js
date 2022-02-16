const [a, b] = [10, 20]
console.log(a, b)

const [n1, n2 , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, p, l ] ] = [[, 8, 5], [9, 6, 1]]
console.log(p) 