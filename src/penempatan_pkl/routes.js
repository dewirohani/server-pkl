const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getPenempatan);
router.post("/", controller.addPenempatan);
router.put("/", controller.updatePenempatan);
router.delete("/:id", controller.deletePenempatan);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;