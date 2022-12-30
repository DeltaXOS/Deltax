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
var token_exports = {};
__export(token_exports, {
  Token: () => Token,
  TokenTypes: () => TokenTypes
});
module.exports = __toCommonJS(token_exports);
class Token {
  _type;
  _value;
  constructor(type, value) {
    this._type = type;
    this._value = value;
    console.log(`TOKEN: ${type} : ${value}`);
  }
}
var TokenTypes = /* @__PURE__ */ ((TokenTypes2) => {
  TokenTypes2[TokenTypes2["STRING"] = 0] = "STRING";
  TokenTypes2[TokenTypes2["CORE_FUNCTION"] = 1] = "CORE_FUNCTION";
  return TokenTypes2;
})(TokenTypes || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Token,
  TokenTypes
});
//# sourceMappingURL=token.js.map
