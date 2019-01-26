"use strict";

var _mocha = require("mocha");

var _sinon = _interopRequireDefault(require("sinon"));

var _finalize_helpers = require("./finalize_helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mocha.describe)('wrapDefinitions', () => {
  (0, _mocha.describe)('pass parameters to wrapper', () => {
    (0, _mocha.beforeEach)(function () {
      this.code = '';
      this.definitionFunctionWrapper = _sinon.default.mock().returns(this.code);
      this.expected_pattern = 'expected pattern';
      this.definitions = [{
        code: this.code,
        options: {
          wrapperOptions: {}
        },
        pattern: this.expected_pattern
      }];
    });
    (0, _mocha.it)('passes the pattern to the wrapper', function () {
      (0, _finalize_helpers.wrapDefinitions)({
        cwd: '.',
        definitionFunctionWrapper: this.definitionFunctionWrapper,
        definitions: this.definitions
      });

      _sinon.default.assert.calledWith(this.definitionFunctionWrapper, _sinon.default.match.any, _sinon.default.match.any, _sinon.default.match(this.expected_pattern));
    });
  });
});