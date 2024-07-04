const router = require("express").Router();

const topicRoutes = require("./api/topics.routes");
const questionRoutes = require("./api/questions.routes");

router.use("/topics", topicRoutes);
router.use("/questions", questionRoutes);

module.exports = router;
