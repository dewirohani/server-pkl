const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getGuru);
router.post("/", controller.addGuru);
router.put("/", controller.updateGuru);
router.delete("/:id", controller.deleteGuru);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;