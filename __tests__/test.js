import { mount, register, unregister } from "riot"
import test from "./test.riot"
import testTs from "./test-ts.riot"

beforeAll(() => {
  register("test", test)
  register("test-ts", testTs)
})

afterAll(() => {
  unregister("test")
})

it("should work with an uncompiled tag", () => {
  document.body.innerHTML = `
    <test></test>
  `

  mount("test")

  expect(document.querySelector("test").textContent).toBe("Hello, world!")
})

it("should compile tag with typescript", () => {
  document.body.innerHTML = `
    <test-ts></test-ts>
  `

  mount("test-ts")

  expect(document.querySelector("test-ts").textContent).toBe("Hello, TypeScript world!")
})
