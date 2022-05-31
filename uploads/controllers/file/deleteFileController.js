const deleteFile = require("../../service/file/deleteFile.js");

module.exports = function (req, res) {
    try {
        const { fileName } = req.query;
        const result = deleteFile(fileName);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
