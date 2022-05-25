const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getKelas);
router.post("/", controller.addKelas);
router.put("/", controller.updateKelas);
router.delete("/:id", controller.deleteKelas);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;