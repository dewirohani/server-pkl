const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getPengajuan_pkl);
router.post("/", controller.addPengajuan_pkl);
router.put("/", controller.updatePengajuan_pkl);
router.delete("/:id", controller.deletePengajuan_pkl);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;