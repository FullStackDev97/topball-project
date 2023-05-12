import Commentary from "../models/Commentary.Model.js";


export const findAllComments =  async ()=>{
    try {
        const all_comments = await Commentary.findAll();
        return all_comments;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllCommentsByArticle =  async (article_id)=>{
    try {
        const all_comments_article = await Commentary.findAll({where:{id_Article:article_id}});
        return all_comments_article;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllCommentairiesbyUserId =  async (user_id)=>{
    try {
        const user_comments = await Commentary.findAll({where:{id_Utilisateur:user_id}});
        return user_comments;
    } catch (error) {
        console.log(error);
        return error;
    }
};



export const findCommentById =  async (comment_id)=>{
    try {
        const the_Comment = await Commentary.findByPk(comment_id);
        return the_Comment;
    } catch (error) {
        console.log(error);
        return error;
    }

}

export const Comment = async (newComment)=>{
    try {
        await Commentary.create(newComment); 
        console.log("commentaire crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé le commentaire");
        return error;
    }
}

// export const updateArticle = async (article_id,newInfos)=>{
//     try {
//         const updatedArticle = await Article.update(newInfos,{where:{id_Article:article_id}});
//         return updatedArticle;
//     } catch (error) {
//         console.log(error);
//         return error;
//     }
// }

export const deleteComment = async (comment_d)=>{
    try {
        await Commentary.destroy({where:{id_Commentaire:comment_d}});
        console.log("commentaire supprimer avec success");
        return "commentaire supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer le commentaire");
        return error;
       
    }
}