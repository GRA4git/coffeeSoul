import { Router } from "express";
import drinksController from "../controllers/drinks.controller";

const router = Router()

router.get('/drinks', drinksController.getAllDrinks)
router.post('/drinks', drinksController.addDrink)
router.delete('/drinks/:id', drinksController.deleteDrink)
router.patch('/drinks/:id', drinksController.editDrink)
router.get('/drinks/in-stock', drinksController.getInStock);
router.get('/drinks/:id', drinksController. getDrinkById);

export default router