const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getSiswa);
router.post("/", controller.addSiswa);
router.put("/", controller.updateSiswa);
router.delete("/:id", controller.deleteSiswa);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;