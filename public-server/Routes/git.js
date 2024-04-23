const { Router } = require("express");
const { handleDeploy } = require("../Controllers/git");

const router = Router();
router.post("/", handleDeploy);

module.exports = router;
