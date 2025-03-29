import express from "express";
import equipmentController from "../../controllers/equipmentController";

const router = express.Router();

// for arr of cards
router.get("/cards", equipmentController.getCards);
router.get("/cards/:category", equipmentController.getCardsByCategory);

// for linking to template page
router.get("/card/:name", equipmentController.getCardName);
// router.get("/card/:id", equipmentController.getCardsById);

//test
router.get("/test", equipmentController.test);

export default router;
