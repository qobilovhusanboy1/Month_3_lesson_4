const { Router } = require("express");

const {user_get, user_get_one, user_create, user_update, user_remove} = require("../controller/user.controller");

const router = Router();

router.get("/users", user_get);
router.get("/user/:id", user_get_one);
router.post("/user/create", user_create);
router.put("/user/update/:id", user_update);
router.delete("user/remove/:id", user_remove);

module.exports = router;