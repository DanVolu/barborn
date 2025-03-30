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
      const normalizedName = req.params.name.replace(/-/g, " ");

      let card = await Card.findOne({
        name: { $regex: new RegExp(`^${normalizedName}$`, "i") },
      });

      if (!card) {
        card = await Card.findOne({
          name: { $regex: new RegExp(normalizedName, "i") },
        });
      }

      if (!card) {
        return res.status(404).json({ error: "Equipment not found" });
      }

      res.json(card);
    } catch (err) {
      next(err);
    }
  },

  test: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const card = await Card.findById("67df1782ca0bbb5fc8489b1a").select(
        "-_id"
      );
      console.log("Backend card by ID: ", card);
      res.json(card);
    } catch (err) {
      next(err);
    }
  },

  // getCardsById: async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const card = await Card.findById(req.params.id);
  //     if (!card) {
  //       return res.status(404).json({ error: "Equipment not found" });
  //     }
  //     console.log("Backend card by Id: ", card);
  //     res.json(card);
  //   } catch (err) {
  //     next(err);
  //   }
  // },
};

export default equipmentController;
