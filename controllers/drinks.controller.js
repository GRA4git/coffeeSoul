import Drink from "../models/Drinc.model"

const drinksController = {
    getAllDrinks: async (req, res) => {
        try {
            const drinks = await Drink.find()

            return res.json(drinks)
        } catch (error) {
            return res.json(error)
        }
    },
    addDrink: async (req, res) => {
        const  {name, price, inStok, hasCoffein, size, dicription} = req.body

        try {
            const newDrink = await Drink.create({
                name, price, inStok, hasCoffein, size, dicription
            })

            return res.json('Napitok dobavlen!')
        } catch (error) {
            return res.json(error)
        }
    },
    deleteDrink: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await Drink.findByIdAndRemove(id)

            return res.json('The drink deleted!')
        } catch (error) {
            return res.json(error)
        }
    },
    editDrink: async (req, res) => {
        const  {name, price, inStok, hasCoffein, size, dicription} = req.body;
        const {id} = req.params

        try {
            const editedDrink = await Drink.findByIdAndUpdate(id, {name, price, inStok, hasCoffein, size, dicription})

            return res.json('Drink edited!')
        } catch (error) {
            return res.json(error)
        }
    },
    getInStock: async (req, rec) => {
        
        try {
            const inStock = await Drink.find({inStock: true})
        } catch (error) {
        return res.json(error)
        }
    },
    getDrinkById: async (req, res) => {
        try {
          const drink = await Drink.findById(req.params.id);
          res.json(drink);
        } catch (error) {
          res.send(error);
        }
      },
}
    

export default drinksController