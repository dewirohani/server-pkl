const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getSertifikat);
router.post("/", controller.addSertifikat);
router.put("/", controller.updateSertifikat);
router.delete("/:id", controller.deleteSertifikat);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;