"use strict";
exports.__esModule = true;
var Likecomponent = /** @class */ (function () {
    function Likecomponent(likescount, isSelected) {
        this.likescount = likescount;
        this.isSelected = isSelected;
    }
    Likecomponent.prototype.onclick = function () {
        this.likescount += (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
    };
    return Likecomponent;
}());
exports.Likecomponent = Likecomponent;
