// import metodo from 'biblioteca'
// * carrega tudo da lib
// as => alias para o metodo (novo nome)
// ex: import { union } from 'ramda' | import { union as juntaTudo} from 'ramda'
import { union, uniq } from 'ramda'

import sum, { sub, multiplicacao, div as dividir, PI } from './utils'

import react from 'react'
import reactDom from 'react-dom'

const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [2, 6, 7, 8, 8]

const arr3 = union(arr1, arr2);

const arr4 = uniq(arr1)

console.log(arr3)

console.log(arr4)

console.log(sum(1, 2))
console.log(sub(1, 2))
console.log(multiplicacao(2, 2))
console.log(dividir(2, 2))
console.log(PI)