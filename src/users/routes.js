const { Router } = require("express");

const router = Router();


const controller = require('./controller');

router.get("/", controller.getUser);
router.post("/", controller.addUser);
router.put("/", controller.updateUser);
router.delete("/:id", controller.deleteUser);
// router.get("/sum-data", controller.sumExpense);

module.exports = router;