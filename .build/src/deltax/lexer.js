"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var lexer_exports = {};
__export(lexer_exports, {
  Lexer: () => Lexer
});
module.exports = __toCommonJS(lexer_exports);
class Lexer {
  _code;
  constructor(code) {
    this._code = code;
  }
  get code() {
    return this._code;
  }
  set code(code) {
    this._code = code;
  }
  parse() {
    console.log(this.code);
    const length = this.code.length;
    let pos = 0;
    let tokens = [];
    const CORE_FUNCTIONS = [
      "print"
    ];
    const varChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    while (pos < length) {
      let currentChar = this.code[pos];
      if (currentChar in [" ", "\n"]) {
        pos++;
        continue;
      }
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Lexer
});
//# sourceMappingURL=lexer.js.map
