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
        const all_comments_article = await Commentary.findAll({where:{article_id:article_id}});
        return all_comments_article;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllCommentairiesbyUserId =  async (user_id)=>{
    try {
        const user_comments = await Commentary.findAll({where:{user_id:user_id}});
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

export const createComment = async (newComment)=>{
    try {
        await Commentary.create(newComment); 
        console.log("commentaire crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé le commentaire");
        return error;
    }
}



export const updateComment = async (comment_id,data)=>{
    try {
        const the_Comment = await Commentary.update(data,{where:{commentary_id:comment_id}});
        console.log('commentaire modifié dans la Bdd');
        console.log(the_Comment);
        return the_Comment;
    } catch (error) {
        console.log("echec ! impossible de mettre à jour du commentaire")
        console.log('#########################################')
        console.log(error);
    }
    
}

export const deleteComment = async (comment_d)=>{
    try {
        await Commentary.destroy({where:{commentary_id:comment_d}});
        console.log("commentaire supprimer avec success");
        return "commentaire supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer le commentaire");
        return error;
       
    }
}