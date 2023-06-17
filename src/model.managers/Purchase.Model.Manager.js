import Order from "../models/Purchase.Model.js";
//import Order_Product from "../models/Order.Product.Model.js";

export const findAllOrders =  async ()=>{
    try {
        const orders = await Order.findAll();
        return orders;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllOrdersbyUserId =  async (user_id)=>{
    try {
        const Orders = await Order.findAll({where:{user_id:user_id},attributes:['date_Purchased','adress_id',]});
        return Orders;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllOrdersbyAdressId =  async (adress_id)=>{
    try {
        const Orders = await Order.findAll({where:{adress_id:adress_id}});
        return Orders;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findAllProductsIdsByOrder =  async (order_id)=>{
    try {
        const Orders = await Order_Product.findAll({where:{purchase_id:order_id}});
        return Orders;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findOrderById =  async (Order_id)=>{
    try {
        const the_Order = await Order.findByPk(Order_id);
        return the_Order;
    } catch (error) {
        console.log(error);
        return error;
    }

}

export const createOrder = async (newOrder)=>{
    try {
        await Order.create(newOrder); 
        console.log("personnage crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé la commande");
        return error;
    }
}

export const updateOrder = async (Order_id,newInfos)=>{
    try {
        const updatedOrder = await Order.update(newInfos,{where:{purchase_id:Order_id}});
        return updatedOrder;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteOrder = async (Order_id)=>{
    try {
        await Order.destroy({where:{purchase_id:Order_id}});
        console.log("utilisateur supprimer avec success");
        return "utilisateur supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer la Commande");
        return error;
       
    }
}