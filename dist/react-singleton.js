'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Singleton = function () {
    function Singleton(component) {
        _classCallCheck(this, Singleton);

        this.dom = null;
        this.component = component;
        this.instance = null;
    }

    _createClass(Singleton, [{
        key: 'show',
        value: function show(option) {
            if (!this.dom) {
                this.dom = document.createElement('div');
                document.body.appendChild(this.dom);
            }
            this.instance = (0, _reactDom.render)(_react2.default.createElement(this.component, option), this.dom);
            this.instance.setState({
                show: true
            });
        }
    }, {
        key: 'hide',
        value: function hide() {
            var _this = this;

            if (this.instance) {
                this.instance.setState({
                    show: false
                }, function () {
                    setTimeout(function () {
                        (0, _reactDom.unmountComponentAtNode)(_this.dom);
                    }, 100);
                });
            }
        }
    }]);

    return Singleton;
}();

exports.default = Singleton;