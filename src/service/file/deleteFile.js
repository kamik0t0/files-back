const fs = require("fs");
const path = require("path");

const ROOTPATH = path.resolve("./uploads");

module.exports = function (fileName) {
    fs.rm(path.resolve(ROOTPATH + "/" + fileName), (error) => {
        if (error) {
            console.log(error);
            throw new Error(error.message);
        }
    });
    return `File deleted`;
};
