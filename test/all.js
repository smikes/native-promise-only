"use strict";

var assert = require("assert"),
    path = require("path");

require("../lib/npo.src.js");

// behavior from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Static_methods
describe("ES6 Promise.all", function () {
    it("should be a function");
    it("should take a single, iterable argument");

    // 0 elements
    it("should accept an empty array");

    // 1 element
    it("should accept an array of one promise");
    it("should resolve immediately when a one-promise-array resolves");
    it("should reject immediately when a one-promise-array rejects");
    
    // 2 elements
    it("should accept an array of two promises");
    it("should not resolve immediately when one of a two-promise-array resolves");
    it("should resolve after both promises of a two-promise-array resolve");
    it("should reject immediately when the first member of a two-promise-array rejects");
    it("should reject immediately when the second member of a two-promise-array rejects");

});
