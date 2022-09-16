"use strict";
exports.__esModule = true;
var users = [
    { id: 1, name: "Andrea", age: 3 },
    { id: 2, name: "Tom", age: 4 },
    { id: 3, name: "Gabriel", age: 5 },
];
exports.getAllUsers = function (req, res, next) {
    res.json(users);
};
exports.getUserById = function (req, res, next) {
    var user = users.find(function (user) { return user.id === Number(req.params.id); });
    res.json(user);
};
exports.createUser = function (req, res, next) {
    var user = req.body;
    users.push(user);
    console.log(user);
    res.json(users);
    console.log(users);
};
exports.updateUser = function (req, res, next) {
    var update = req.body;
    var userId = Number(req.params.id);
    var finduser = users.find(function (user) { return user.id === userId; });
    console.log(finduser, "Before");
    if (!finduser) {
        return res.json("no user Found");
    }
    finduser.name = update.name;
    finduser.age = update.age;
    console.log(finduser, "After");
    res.status(200).json(finduser);
};
exports.deleteUser = function (req, res, next) {
    var list = users.findIndex(function (user) { return user.id === Number(req.params.id); });
    if (list >= 0) {
        var deletedUser = users.splice(list, 1);
        //console.log(deletedUser, "DELETED USER");
        res.status(200).json(users);
    }
    else {
        res.status(404).json({ error: "No user found!!" });
    }
};

//# sourceMappingURL=Use.js.map
