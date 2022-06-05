const fs = require("fs");
const pathModule = require("path");
const ROOTPATH = pathModule.resolve("./uploads");

module.exports = function ({ path, folderName }) {
    console.log(6, path);
    try {
        if (path !== false) {
            fs.mkdirSync(
                pathModule.resolve(ROOTPATH + "/" + path + "/" + folderName)
            );
        } else {
            console.log(14, path);
            fs.mkdirSync(pathModule.resolve(ROOTPATH + "/" + folderName));
        }
        return `Folder ${folderName} created`;
    } catch (error) {
        throw new Error(error.message);
    }
};
