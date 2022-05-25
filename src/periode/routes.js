const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getPeriode);
router.post("/", controller.addPeriode);
router.put("/", controller.updatePeriode);
router.delete("/:id", controller.deletePeriode);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;