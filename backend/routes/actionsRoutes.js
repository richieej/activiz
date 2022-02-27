
import express from 'express'
import {
    getActions, 
    getDivision,
    getPendingActions,
    submitAction, 
    approveAction, 
    deleteAction
} from '../controllers/actions.js'
const router = express.Router()


router.get('/', getActions)
router.post('/show', getDivision)
router.post('/submit', submitAction)
router.post('/approve', approveAction)
router.post('/delete', deleteAction)
router.get('/pending', getPendingActions)




export default router