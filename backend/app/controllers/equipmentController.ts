import { Request, Response, NextFunction } from "express";
import Card from "../models/equipmentModel"

const equipmentController = {
    getCards: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cards = await Card.find();
            res.json(cards);
        } catch (err) {
            next(err);
        }
    },
};

export default equipmentController;