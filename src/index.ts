import { TransformOptions } from '@jest/transform';
import { compile, CompilerOptions } from "@riotjs/compiler";
import babelJest from "babel-jest";

export function process(
  src: string,
  filename: string,
  options: TransformOptions<CompilerOptions>
) {

  // riot compile
  const { code } = compile(src, {
    file: filename
  });

  // supports babel-jest@27
  // see: https://github.com/bitttttten/jest-transformer-mdx/issues/22
  const babelProcess = (babelJest as any).default?.process ?? babelJest.process;

  // babel compile, required by `export default {}`
  return babelProcess(code, filename, options);
}