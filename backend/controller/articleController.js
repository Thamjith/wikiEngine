import asyncHandler from 'express-async-handler'
import Article from '../models/articlesModel.js'

const getArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find({})
    res.json({articles})
})

const getArticleCount = asyncHandler(async (req, res) => {
    const premiumArticles = await Article.find({premium: true})
    const premiumArticlesCount = premiumArticles.length
    const freeArticles = await Article.find({premium: false})
    const freeArticlesCount = freeArticles.length
    res.json({premiumArticlesCount, freeArticlesCount})
})

const getArticleById = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id).populate(
        'user',
        'name email'
    )

    if(article){
        res.json(article)
    }else{
        res.status(404).json({message:"Article not found"})
    }
})

const getArticleByUserId = asyncHandler(async (req, res) => {
    const article = await Article.find({user: req.params.id})

    if(article){
        res.json(article)
    }else{
        res.status(404).json({message:"Article not found"})
    }
})

const articleCreate = asyncHandler(async (req, res) => {
    const { user, title, body, premium } = req.body
    // const article = await Article.findById(req.params.id)

    const article = await Article.create({
        user,
        title,
        body,
        premium,
    })

    if(article){
        res.status(201).json({
            _id: article._id,
            user: article.user,
            title: article.title,
            premium: article.premium,
            body: article.body,
        })
    }else{
        res.status(404).json({message:"Article not Created"})
    }
})

const updateArticleById = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id)

    if (article) {
      article.title = req.body.title || article.title
      article.body = req.body.body || article.body
      article.premium = req.body.premium || article.premium
  
      const updatedArticle = await article.save()
  
      res.json({
        _id: updatedArticle._id,
        title: updatedArticle.title,
        body: updatedArticle.body,
      })
    } else {
      res.status(404)
      throw new Error('Article not found')
    }
  })

export {
    getArticles,
    getArticleCount,
    getArticleById,
    articleCreate,
    getArticleByUserId,
    updateArticleById
}