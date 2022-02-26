import mongoose from 'mongoose'

const topicSchema = mongoose.Schema({
    url: String, 
})

const TopicModel = mongoose.model('TopicModel', topicSchema)

export default TopicModel