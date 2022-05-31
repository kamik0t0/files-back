const fs = require("fs");
const pathModule = require("path");
const ROOTPATH = pathModule.resolve("./uploads");

module.exports = function (pathToFolder, folderName) {
    try {
        deleteFolder(pathModule.resolve(ROOTPATH + "/" + pathToFolder));
        return `Folder ${folderName} deleted`;
    } catch (error) {
        throw new Error(error.message);
    }
};

function deleteFolder(path) {
    let files = [];
    try {
        if (fs.existsSync(path)) {
            files = fs.readdirSync(path);
            files.forEach(function (file, index) {
                let curPath = pathModule.resolve(path + "/" + file);
                if (fs.statSync(curPath).isDirectory()) {
                    deleteFolder(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
