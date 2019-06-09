import { compile } from "@riotjs/compiler";
import babelJest from "babel-jest";

export function process(src, filename, config, options) {
  // riot compile
  const { code } = compile(src, {
    options: {
      file: filename
    }
  });
  // babel compile, required by `export default {}`
  return babelJest.process(code, filename, config, options)
}
