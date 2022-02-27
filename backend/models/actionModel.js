import mongoose from 'mongoose'



const actionSchema = mongoose.Schema({
    url: String, 
    subcategory: String, 
    path: String, 
    title: String, 
    summary: String, 
    live: Number,
})

const ActionModel = mongoose.model('ActionModel', actionSchema)

export default ActionModel