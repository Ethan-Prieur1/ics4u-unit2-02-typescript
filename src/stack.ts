/**
 * This class creates a stack
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-10-04
 */

class Stack {
  stackArray: number[] = []

  push(pushedNumber: number): void {
    // add a number to the array
    this.stackArray.push(pushedNumber)
  }

  showStack(): void {
    console.log(this.stackArray)
  }
}
export = Stack
