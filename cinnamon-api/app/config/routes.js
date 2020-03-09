const express = require("express");
const router = express.Router();

const loginController = require("../controllers/loginController");
const newsController = require("../controllers/newsController");

router.post("/api/v1/login", loginController.login);

router.get("/test", loginController.testLogin);

router.get("/api/v1/news", newsController.getNews);

module.exports = router;