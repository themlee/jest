import { sum, mul, div, asyncDiv } from './one';
// beforeAll / beforeEach / afterAll / afterEach
describe('Adds', () => {
  test('adds 1 + 2 to equal 3', done => {
    const callback = (result: number) => {
      expect(result).toBe(3)
      done()
    }
    sum(1, 2, callback)
  })
  
  test('adds 3 + 5 to equal 8', done => {
    const callback = (result: number) => {
      expect(result).toBe(8)
      done()
    }
    sum(3, 5, callback)
  })
})

describe('Muls', () => {
  test('mul 1 * 2 to equal 2', () => {
    expect.assertions(1)
    mul(1, 2).then((result:number) => expect(result).toBe(2))
  })

  test('mul 3 * 5 to equal 15', () => {
    expect.assertions(1)
    expect(mul(3, 5)).resolves.toBe(15)
  })
})

describe('Divs', () => {
  test('div 2 / 1 to equal 2', () => {
    expect(div(2, 1)).toBe(2)
  })

  test('div 2 / 0 to equal inv', () => {
    expect.assertions(1)
    expect(asyncDiv(2, 0)).rejects.toMatch('error')
  })

  test('div 2 / 1 to equal 2', () => {
    expect.assertions(1)
    expect(asyncDiv(2, 1)).resolves.toBe(2)
  })

  test('div 12 / 6 to equal 2', () => {
    expect(div(12, 6)).toBe(2)
  })
})
