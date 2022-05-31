const deleteFolder = require("../../service/folder/deleteFolder.js");

module.exports = function (req, res) {
    try {
        const { path, folderName } = req.query;
        const result = deleteFolder(path, folderName);
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
