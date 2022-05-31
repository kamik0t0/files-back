module.exports = function (req, res, next) {
    //  - получать запросы с другого порта только для моего приложения
    res.setHeader("Access-Control-Allow-Origin", "*");
    // - обрабатывать указанные типы запросов
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Authorization, charset, API-Key, content-type, Cache-Control"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
};
