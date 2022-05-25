const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getJurusan);
router.post("/", controller.addJurusan);
router.put("/", controller.updateJurusan);
router.delete("/:id", controller.deleteJurusan);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;