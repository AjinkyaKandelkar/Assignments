"use strict";
exports.__esModule = true;
exports.add = void 0;
var add = /** @class */ (function () {
    function add(a, b) {
        this.c = a + b;
        console.log(this.c);
    }
    return add;
}());
exports.add = add;
var num = new add("a", "b");
