"use strict";
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = " "; }
        this.id = id;
        this.name = name;
        this.sales = 0;
    }
    Customer.prototype.log = function () {
        console.log("".concat(this.id, " | ").concat(this.name, " | ").concat(this.sales));
    };
    return Customer;
}());
