/**
 * This is the standard index.ts starting point.
 *
 * author  Ethan Prieur
 * version 1.0
 * since   2022-10-04
 */

import Stack from './stack'
import promptSync from 'prompt-sync'

const myNewStack = new Stack()

const prompt = promptSync()
const someNumberString = prompt('Enter a number: ')
const someNumberInt = parseInt(someNumberString)
myNewStack.push(someNumberInt)
myNewStack.showStack()
