const Router = require("express");
const router = new Router();
const postFolderController = require("../controllers/folder/postFolderController.js");
const deleteFolderController = require("../controllers/folder/deleteFolderController.js");
const getFolders = require("../controllers/folder/getFolders.js");

// создание папки
router.post("/", postFolderController);
// удаление папки
router.delete("/", deleteFolderController);
// получение структуры каталогов
router.get("/", getFolders);

module.exports = router;
