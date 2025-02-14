//module = require('qunit').module;
module = QUnit.module;

QUnit.module('connect-header');

test("import", function () {
  ok(require('../lib'), "index.js");
  ok(require('../lib/header.js'), "header.js");
});

var header = require('../lib');
test("arguments", function () {
  throws(function () {
    header([]);
  }, Error, "invalid: []");

  ok(header(), "valid: undefined");
  ok(header(null), "valid: null");
  ok(header(0), "valid: 0");
  ok(header(false), "valid: false");
});


var MockRequest = function () {
};
var MockResponse = function (h) {
  h = h || {};
  this._h = h;
  this.setHeader = function (key, val) {
    this._h[key] = val;
  };
  this.removeHeader = function (key) {
    delete this._h[key];
  };
  this.toString = function () {
    return JSON.stringify(this._h);
  };
};

test("result", function () {
  expect(6);

  var req = new MockRequest(),
    next = function () {
    ok(true, 'next called');
  };

  var res = new MockResponse(), arg = {}, middleware = header(arg);
  middleware(req, res, next);
  equal(res.toString(), JSON.stringify(arg), 'do nothing');

  res = new MockResponse(), arg = {'x-k0':'v0', 'x-k1':'v1'}, middleware = header(arg);
  middleware(req, res, next);
  equal(res.toString(), JSON.stringify(arg), 'set header x-k0, x-k1');

  res = new MockResponse({'x-k0':'v0', 'x-k1':'v1'}), arg = {'x-k1':null}, middleware = header(arg);
  middleware(req, res, next);
  equal(res.toString(), JSON.stringify({'x-k0':'v0'}), 'remove header x-k1');
});

