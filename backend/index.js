import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import usersRoutes from './routes/usersRoutes.js'
import actionsRoutes from './routes/actionsRoutes.js'
import 'dotenv/config'

const app = express();







//json data cannot be greater than 20mb
//extended: true allows parsing of non-strings as well 
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', usersRoutes);
app.use('/actions', actionsRoutes)
//ever route inside of postRoutes will start with localhost:5000/posts 

//mongodb atlas


const CONNECTION_URL = process.env.MONGO_URI
const PORT = process.env.port || 5000



mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then( () => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch( (error) => console.log(error.message))