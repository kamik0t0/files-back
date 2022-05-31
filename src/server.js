require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5601;
const setHeaders = require("./middleware/headers.js");
const fileRouter = require("./routes/FileRouter.js");
const folderRouter = require("./routes/FolderRouter.js");
const commonRouter = require("./routes/commonRouter.js");

const app = express();
app.use(setHeaders);
app.use(express.json());
app.use("/file", fileRouter);
app.use("/folder", folderRouter);
app.use("/common", commonRouter);

app.listen(PORT, () => console.log(`SERVER STARTS ON PORT ${PORT}`));
