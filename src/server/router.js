// DEPENDENCIES
import Router from "express";
import usersRouter from "../api/routers/usersRouter.js";

// ROUTER FILES
import { register, login } from "../api/auth/auth.controller.js";

// // ROUTER FILES

// // ROUTER INITIALIZING
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.use("/users", usersRouter);
export default router;
