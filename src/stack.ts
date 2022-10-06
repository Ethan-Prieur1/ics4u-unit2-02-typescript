/**
 * This class creates a stack
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-10-04
 */

class Stack {
  readonly stackArray: number[] = []

  // getters
  public getStack(): number[] {
    return this.stackArray
  }

  // methods
  public push(pushedNumber: number): void {
    // add a number to the array
    this.stackArray.push(pushedNumber)
  }

  public pop(): void {
    // pops a number from the stack
    this.stackArray.pop()
  }
}
export = Stack
