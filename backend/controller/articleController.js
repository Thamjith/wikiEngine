import asyncHandler from 'express-async-handler'
import Article from '../models/articlesModel.js'

const getArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find({})
    res.json({articles})
})

const getArticleById = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id)

    if(article){
        res.json(article)
    }else{
        res.status(404).json({message:"Article not found"})
    }
})

export {
    getArticles,
    getArticleById,
}