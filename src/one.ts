export const sum = (a: number, b: number, callback: any) => {
  callback(a + b)
}

export const mul = (a: number, b: number): Promise<number> => {
  return new Promise((resolve, _reject) => {
    resolve(a* b)
  })
}

export const div = (a: number, b: number): number => {
  return a / b
}

export const asyncDiv = (a: number, b: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('error')
    }
    resolve(a / b)
  })
}
