const express = require("express");
const router = express.Router();
const service = require("./../services/cars");

router.get("/", service.find);
router.get("/new", service.new);
router.get("/edit/:id", service.edit);
router.post("/", service.create);
router.put("/:id", service.update);
router.delete("/:id", service.remove);

module.exports = router;