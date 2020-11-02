import mongoose from 'mongoose'

const articleSchema = mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
        unique: true,
    },
  },
  {
        timestamps: true,
  }
)

const Article = mongoose.model('Article', articleSchema)

export default Article
