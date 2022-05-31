const createFolder = require("../../service/folder/createFolder.js");

module.exports = function (req, res) {
    try {
        const data = req.body;
        const result = createFolder(data);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
