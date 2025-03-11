import express from 'express';
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

import { protectRoute } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar)
router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage)

export default  router;