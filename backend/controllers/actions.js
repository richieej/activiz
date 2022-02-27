import ActionModel from '../models/actionModel.js'

export const getActions = async (req, res) => {
    
    try {
        const allActions = await ActionModel.find()
        
        res.status(200).json(allActions)
        console.log("all actions retrieved!")
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const getDivision = async (req, res) => {
    const path_match = "^" + req.body.path + ".*$"
    try {
        const actionsSubgroup = await ActionModel.find({ path: { $regex: path_match, $options: "i" }})
        res.status(200).json(actionsSubgroup)
        console.log(`actions with prepath ${req.body.path} retrieved`)
    }
    catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const addAction = async (req, res) => {
    const url = req.body.url
    const subcategory = req.body.subcategory
    const path = req.body.path
    const title = req.body.title
    const summary = req.body.summary

    const newAction = new ActionModel({
        url, 
        subcategory, 
        path, 
        title, 
        summary
    })
    try {
        await newAction.save()
        console.log("action added")
        res.status(201).json(newAction)
    } catch (error) {
        res.status(409).json({message : error.message})
    }
}