import * as PackRepo from '../repositories/Pack.Repository.js';

export const getAllPacks = async (req,res)=>{
    try {
        const allPacks = await PackRepo.findAllPacks();
        res.send(allPacks);
    } catch (error) {
        res.send(error);
    }
}

export const getPack = async (req,res)=>{
    try {
        const the_pack = await PackRepo.findPackById(req.body.pack_id);
        res.send(the_pack);
    } catch (error) {
        res.send(error);
    }
}

export const editPack = async (req,res)=>{
    try {
        const the_pack = await PackRepo.updatePack(req.body,req.body.pack_id);
        res.send(the_pack);
    } catch (error) {
        res.send(error);
    }
}

export const createPack = async (req,res)=>{
    try {
        const the_pack = await PackRepo.createPack(req.body);
        res.send(the_pack);
    } catch (error) {
        res.send(error);
    }
}

export const dropPack = async (req,res)=>{
    try {
        const the_pack = await PackRepo.deletePack(req.body.pack_id);
        res.send(the_pack);
    } catch (error) {
        res.send(error);
    }
}