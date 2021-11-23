import { mount, register, unregister } from "riot"
import test from "./test.riot"
import testTs from "./test-ts.riot"

class TagTester {

  /**
   * Constructor.
   *
   * @param {string} tagName - name of tag to test
   */
  constructor(tagName) {
    this.tagName = tagName;
  }

  /**
   * Create an element and mounting it.
   */
  injectElement() {
    document.body.innerHTML = `
      <${this.tagName}></${this.tagName}>
    `;
    mount(this.tagName);
  }

  /**
   * Get the root element.
   * @returns {Element}
   */
  getElement() {
    return document.querySelector(this.tagName);
  }
}

beforeAll(() => {
  register("test", test)
  register("test-ts", testTs)
})

afterAll(() => {
  unregister("test")
})

it("should work with an uncompiled tag", () => {
  const tag = new TagTester("test")

  tag.injectElement()

  expect(tag.getElement().textContent).toBe("Hello, world!")
})

it("should compile tag with typescript", () => {
  const tag = new TagTester("test-ts")

  tag.injectElement()

  expect(tag.getElement().textContent).toBe("Hello, TypeScript world!")
})
