/**
 * The program shows how to get input
 *   and deal with numbers.
 *
 * By:      Mr. Coxall
 * Version: 1.0
 * Since:   2020-01-01
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const lengthString = prompt('Enter log length (0.25, 0.5 or 1.0): ')
const lengthInt = Number(lengthString)
const answer = 1100 / (lengthInt * 20)
console.log(`${answer} logs can fit in the truck`)

console.log('\nDone.')
