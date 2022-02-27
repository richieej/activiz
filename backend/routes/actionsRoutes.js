
import express from 'express'
import {
    getActions, 
    getDivision, 
    addAction
} from '../controllers/actions.js'
const router = express.Router()


router.get('/', getActions)
router.get('/show', getDivision)
router.post('/add', addAction)




export default router