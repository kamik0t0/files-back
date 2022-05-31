const createFile = require("../../service/file/createFile.js");

module.exports = async function (req, res) {
    try {
        const { filename } = req.query;
        const result = createFile(filename, req);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
