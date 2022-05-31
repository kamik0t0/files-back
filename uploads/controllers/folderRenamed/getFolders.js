const path = require("path");
const fs = require("fs");
const makeTree = require("../../scripts/makeCatalogTree.js");

module.exports = function (req, res) {
    try {
        const ROOTPATH = path.resolve("./uploads");
        // запуск функции построения "дерева"
        const TREE = makeTree(fs.readdirSync(ROOTPATH), ROOTPATH);
        return res.json(TREE);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
};
