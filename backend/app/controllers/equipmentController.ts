import { Request, Response, NextFunction } from "express";
import Card from "../models/equipmentModel";

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

  getCardsByCategory: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const cards = await Card.find({ category: req.params.category }).select(
        "name link image -_id"
      );
      console.log("Backend Cards by Category: ", cards);
      res.json(cards);
    } catch (err) {
      next(err);
    }
  },

  getCardName: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const card = await Card.find({ name: req.params.name }).select("name -_id");
      console.log("card: ", card);
      res.json(card);
    } catch (err) {
      next(err);
    }
  },

//   getCardsById: async (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     try {
//       const card = await Card.find({ _id: req.params.id }).select(
//         "_id"
//       );
//       console.log("Backend card by Id: ", card);
//       res.json(card);
//     } catch (err) {
//       next(err);
//     }
//   },
};

export default equipmentController;
