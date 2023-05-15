import * as OrderRepo from '../repositories/Order.Repository.js'


export const getAllOrders = async (req,res)=>{
    try {
        orders = await OrderRepo.findAllOrders();
        res.send(orders);
    } catch (error) {
        res.send(error);
    }
};

export const getAllOrdersbyAdress = async (req,res)=>{
    try {
        orders = await OrderRepo.findAllOrdersbyAdressId(req.body.adress_id);
        res.send(orders);
    } catch (error) {
        res.send(error);
    }
};

export const getAllOrdersbyUser = async (req,res)=>{
    try {
        orders = await OrderRepo.findAllOrdersbyUserId(req.body.user_id);
        res.send(orders);
    } catch (error) {
        res.send(error);
    }
};

export const getOrderById = async (req,res)=>{
    try {
        order = await OrderRepo.findOrderById(req.body.order_id);
        res.send(order);
    } catch (error) {
        res.send(error);
    }
};

export const newOrder = async (req,res)=>{
    try {
        await OrderRepo.createOrder(req.body); 
        console.log("personnage crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé le personnage");
        return error;
    }
}

export const editOrder = async (req,res)=>{
    try {
        const updatedOrder = await OrderRepo.updateOrder(req.body,req.body.order_id);
        return updatedOrder;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteOrder = async (req,res)=>{
    try {
        await OrderRepo.deleteOrder(req.body.Order_id);
        console.log("utilisateur supprimer avec success");
        return "utilisateur supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer le personnage");
        return error;
       
    }
}

