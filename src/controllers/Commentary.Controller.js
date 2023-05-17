import * as CommentRepo from '../repositories/Commentary.Repository.js'

export const getAllComments = async (req,res)=>{
    try {
        const all_comments = await CommentRepo.findAllComments();
        res.send(all_comments);
    } catch (error) {
        res.send(error);
    }
};

export const getAllCommentsByUser = async (req,res)=>{
    try {
        const all_user_comments = await CommentRepo.findAllCommentairiesbyUserId(req.body.user_id);
        res.send(all_user_comments);
    } catch (error) {
        res.send(error);
    }
};

export const getAllCommentsByArticle = async (req,res)=>{
    try {
        const all_article_comments = await CommentRepo.findAllCommentsByArticle(req.body.article_id);
        res.send(all_article_comments);
    } catch (error) {
        res.send(error);
    }
};

export const getAllCommentsById = async (req,res)=>{
    try {
        const the_Comment = await CommentRepo.findCommentById(req.body.comment_id);
        res.send(the_Comment);
    } catch (error) {
        res.send(error);
    }
} ;

export const newComment = async (req,res)=>{
    try {
        const new_Comment = await CommentRepo.createComment(req.body);
        res.send(new_Comment);
    } catch (error) {
        res.send(error);
    }
};

export const editComment = async (req,res)=>{
    try {
        const updated_Comment = await CommentRepo.updateComment(req.body.comment_id,req.body);
        res.send(updated_Comment);
    } catch (error) {
        res.send(error);
    }
};

export const dropComment = async (req,res)=>{
    try {
        const dropped_Comment = await CommentRepo.deleteComment(req.body.comment_id);
        res.send(dropped_Comment);
    } catch (error) {
        res.send(error);
    }
};