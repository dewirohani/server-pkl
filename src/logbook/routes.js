const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getLogbook);
router.post("/", controller.addLogbook);
router.put("/", controller.updateLogbook);
router.delete("/:id", controller.deleteLogbook);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;