const fs = require("fs");
const path = require("path");
const ROOTPATH = path.resolve("./uploads");

module.exports = function (filename, req) {
    try {
        let fileStream = fs.createWriteStream(
            path.resolve(ROOTPATH + "/" + filename),
            "binary"
        );
        req.pipe(fileStream);
        return `File ${filename} created`;
    } catch (error) {
        throw new Error(error.message);
    }
};
