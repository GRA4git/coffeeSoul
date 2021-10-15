import mongoose from "mongoose"

const drinkModel = mongoose.Schema({
    name: String,
    price: Number,
    inStok: Boolean,
    hasCoffein: Boolean,
    size: Number,
    dicription: String
})

const Drink = mongoose.model("Drink", drinkModel)
export default Drink