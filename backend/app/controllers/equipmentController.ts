import { Request, Response, NextFunction } from "express";
import Card from "../models/equipmentModel"

const equipmentController = {
    getCards: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cards = await Card.find().select("name link image -_id");
            console.log("Backend Cards: ", cards); 
            res.json(cards);
        } catch (err) {
            next(err);
        }
    },
};

export default equipmentController;