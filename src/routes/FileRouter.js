const Router = require("express");
const router = new Router();
const postFileController = require("../controllers/file/postFileController.js");
const getFileController = require("../controllers/file/getFileController.js");
const deleteFileController = require("../controllers/file/deleteFileController.js");
const readFileController = require("../controllers/file/readFileController.js");

// загрузка файла
router.post("/", postFileController);
// выгрузка файла
router.get("/", getFileController);
// чтение файла
router.get("/read", readFileController);
// удаление файла
router.delete("/", deleteFileController);

module.exports = router;
