import { mount, register, unregister } from "riot"
import test from "./test.riot"

beforeAll(() => {
  register("test", test)
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

