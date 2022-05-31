const Router = require("express");
const router = new Router();

const updateController = require("../controllers/common/updateController.js");

router.patch("/", updateController);

module.exports = router;
