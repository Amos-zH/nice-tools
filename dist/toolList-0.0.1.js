'use strict';

/**
 * 验证不能包含字母
 * @param { string } value
 */
const isNoWord = value => /^[^A-Za-z]*$/g.test(value);
/**
 * 验证中文和数字
 * @param { string } value
 */

const isCHNAndEN = value => /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);

var regs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isNoWord: isNoWord,
  isCHNAndEN: isCHNAndEN
});

var version = "0.0.1";

const tools = { ...regs
};
console.log('tools: ', tools);
console.log('version ' + version);

module.exports = tools;
