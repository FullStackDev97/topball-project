import Article from "../models/Article.Model.js";


export const findAllArticle =  async ()=>{
    try {
        const all_articles = await Article.findAll();
        return all_articles;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllArticlesbyUserId =  async (user_id)=>{
    try {
        const user_articles = await Article.findAll({where:{user_id:user_id}});
        return user_articles;
    } catch (error) {
        console.log(error);
        return error;
    }
};



export const findArticleById =  async (article_id)=>{
    try {
        const the_Article = await Article.findByPk(article_id);
        return the_Article;
    } catch (error) {
        console.log(error);
        return error;
    }

}

export const createArticle = async (newArticle)=>{
    try {
        await Article.create(newArticle); 
        console.log("article crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé l'article");
        return error;
    }
}

export const updateArticle = async (article_id,newInfos)=>{
    try {
        const updatedArticle = await Article.update(newInfos,{where:{article_id:article_id}});
        return updatedArticle;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteArticle = async (article_id)=>{
    try {
        await Article.destroy({where:{article_id:article_id}});
        console.log("article supprimer avec success");
        return "article supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer l'article");
        return error;
       
    }
}