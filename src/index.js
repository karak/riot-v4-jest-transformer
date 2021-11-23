import { compile } from "@riotjs/compiler";
import babelJest from "babel-jest";

export function process(src, filename, config, options) {
  // riot compile
  const { code } = compile(src, {
    options: {
      file: filename
    }
  });
  
  // supports babel-jest@27
  // see: https://github.com/bitttttten/jest-transformer-mdx/issues/22
  const babelProcess = babelJest.default?.process ?? babelJest.process;

  // babel compile, required by `export default {}`
  return babelProcess(code, filename, config, options);
}
