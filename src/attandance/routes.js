const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getAttandance);
router.post("/", controller.addAttandance);
router.put("/", controller.updateAttandance);
router.delete("/:id", controller.deleteAttandance);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;