import express from "express";
import equipmentController from "../../controllers/equipmentController";

const router = express.Router();

router.get("/cards", equipmentController.getCards);

export default router;