"use strict";
var Task = (function () {
    function Task(date, name, description, priority) {
        if (date && name && description && priority) {
            this.date = date;
            this.name = name;
            this.description = description;
            this.priority = priority;
        }
        else {
            this.date = "";
            this.name = "";
            this.description = "";
            this.priority = "low";
        }
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map