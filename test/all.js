"use strict";

var assert = require("assert"),
    path = require("path");

require("../lib/npo.src.js");

function unexpectedResolve(resolved) {
    throw "Unexpected resolve " + resolve;
}

function unexpectedReject(err) { 
    throw "Unexpected reject " + err;
}


// behavior from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Static_methods
describe("ES6 Promise.all", function () {
    it("should be a function", function() {
	assert.equal(typeof Promise.all,"function");
    });
    it("should take a single, iterable argument", function () {
	assert.equal(Promise.all.length,1);
    });

    // 0 elements
    describe("with 0-element array", function () {

	it("should accept an empty array", function () {
	    var p = Promise.all([]);
	});
	it("should return a resolved promise", function (done) {
	    var p = Promise.all([]);
	    assert.ok(p instanceof Promise);
	    p.then(function(result) {
		done();
	    }, unexpectedReject );
	});
    });

    describe("with 1-element array", function () {
	// 1 element
	it("should accept an array of one promise", function (done) {
	    var p1 = new Promise(function (resolve, reject) {
		setImmediate(function() { resolve(1); });
	    });
	    
	    Promise.all([p1]).then(function (resolved) {
		assert.equal(resolved, 1);
		done();
	    }, unexpectedReject);
	});
	it("should resolve immediately", function (done) {
	    var obj = {};
	    
	    var p1 = new Promise(function (resolve, reject) {
		setImmediate(function () { resolve(obj); });
	    });

	    Promise.all([p1]).then(function (resolved) {
		assert.equal(resolved[0], obj);
		done();
	    });
	});
	it("should reject immediately", function (done) {
	    var obj = {};
	    
	    var p1 = new Promise(function (resolve, reject) {
		setImmediate(function () { reject(obj); });
	    });

	    Promise.all([p1]).then(unexpectedResolve, function (err) {
		assert.equal(err, obj);
		done();
	    });
	});
    });
    
    // 2 elements
    describe("with 2-element array", function () {
	it("should accept an array of two promises");
	it("should not resolve immediately when one of a two-promise-array resolves");
	it("should resolve after both promises of a two-promise-array resolve");
	it("should reject immediately when the first member of a two-promise-array rejects");
	it("should reject immediately when the second member of a two-promise-array rejects");
    });
});
