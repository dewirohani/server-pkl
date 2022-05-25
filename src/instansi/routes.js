const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getInstansi);
router.post("/", controller.addInstansi);
router.put("/", controller.updateInstansi);
router.delete("/:id", controller.deleteInstansi);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;