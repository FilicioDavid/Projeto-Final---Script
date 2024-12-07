/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
*/
let [userpassword] = lines

const correctpaswd = 2002

do {
    console.log('Senha Invalida')
} while (userpassword != correctpaswd)
    console.log('Acesso Permitido')