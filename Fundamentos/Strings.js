const escola = 'Cod3r'
console.log(escola.charAt(4))
console.log(escola.charAt(9))
console.log(escola.charAt(0))
console.log(escola.charCodeAt(4))
console.log(escola.indexOf('r'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))// o último não é incluso

console.log('escola '.concat(escola).concat('!!!!'))
console.log('escola '+ escola + '!!!!')
console.log(escola.replace(3, 'e').concat('///').concat(escola))
console.log(escola.replace(3, 'e') + '///' + escola)

console.log('Maria,Pedro,Ana'.split(','))
