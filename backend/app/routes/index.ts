import express from "express";
import equipmentRoutes from "./categories/equipment";

const router = express.Router();

router.use("/equipment", equipmentRoutes);

export default router;