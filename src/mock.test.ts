import { two } from './mock'

let klass: two

beforeAll(() => {
  klass = new two()
})

test('klass is defined', () => {
  expect(klass).toBeDefined
})
