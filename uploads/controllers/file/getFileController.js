const path = require("path");
const ROOTPATH = path.resolve("./uploads");

module.exports = function (req, res) {
    try {
        const { file: filePath } = req.query;
        const file = path.resolve(ROOTPATH + "/" + filePath);
        console.log(file);
        return res.download(file);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
