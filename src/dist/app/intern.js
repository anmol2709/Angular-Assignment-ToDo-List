"use strict";
var Intern = (function () {
    // constructor();
    // constructor(id:number, name:string);
    function Intern(id, name) {
        if (id && name) {
            this.id = id;
            this.name = name;
        }
        else {
            this.id = null;
            this.name = null;
        }
    }
    return Intern;
}());
exports.Intern = Intern;
//# sourceMappingURL=intern.js.map