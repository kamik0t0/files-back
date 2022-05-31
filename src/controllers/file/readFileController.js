const path = require("path");
const fs = require("fs");
const ROOTPATH = path.resolve("./uploads");

module.exports = function (req, res) {
    const { fileName } = req.query;
    const file = path.resolve(ROOTPATH + "/" + fileName);
    fs.readFile(file, "utf-8", (error, data) => {
        if (error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(200).json(data);
    });
};
