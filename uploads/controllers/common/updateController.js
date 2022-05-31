// const renameFolder = require("../../service/folder/renameFolder.js");
// const renameFile = require("../../service/file/renameFile.js");
const fs = require("fs");
const path = require("path");
const ROOTPATH = path.resolve("./uploads");

module.exports = function (req, res) {
    const { oldName } = req.query;
    const { newName, isFolder } = req.body;

    fs.rename(
        path.resolve(ROOTPATH + "/" + oldName),
        path.resolve(ROOTPATH + "/" + newName),
        (error) => {
            if (error) {
                return res.status(400).json(error);
            } else {
                return res.status(200).json({ result: "folder renamed" });
            }
        }
    );
};
