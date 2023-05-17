import * as ArticleRepo from '../repositories/Article.Repository.js'

export const getAllArtciles = async (req,res)=>{
    try {
        const all_articles = await ArticleRepo.findAllArticle();
        res.send(all_articles) ;
    } catch (error) {
        res.send(error);
    }
}

export const getArticleById = async (req,res)=>{
    try {
        const the_article = await ArticleRepo.findArticleById(req.body.artcile_id);
        res.send(the_article) ;
    } catch (error) {
        res.send(error);
    }
}

export const getArticleByUserId = async (req,res)=>{
    try {
        const the_articles = await ArticleRepo.findAllArticlesbyUserId(req.body.user_id);
        res.send(the_articles) ;
    } catch (error) {
        res.send(error);
    }
}

export const editArticle= async (req,res)=>{
    try {
        const updated_article = await ArticleRepo.updateArticle(req.body.user_id,req.body);
        res.send(updated_article) ;
    } catch (error) {
        res.send(error);
    }
}

export const newArticle= async (req,res)=>{
    try {
        const new_article = await ArticleRepo.createArticle(req.body);
        res.send(new_article) ;
    } catch (error) {
        res.send(error);
    }
}

export const dropArticle= async (req,res)=>{
    try {
        const dropped_article = await ArticleRepo.deleteArticle(req.body.artcile_id);
        res.send(dropped_article);
    } catch (error) {
        res.send(error);
    }
}