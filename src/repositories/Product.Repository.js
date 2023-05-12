import Product from "../models/Product.Model.js";

export const findAllProducts =  async ()=>{
    try {
        const products = await Product.findAll();
        return products;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findProductById =  async (Product_id)=>{
    try {
        const the_Product = await Product.findByPk(Product_id);
        return the_Product;
    } catch (error) {
        console.log(error);
        return error;
    }

}

export const createProduct = async (newProduct)=>{
    try {
        await Product.create(newProduct); 
        console.log("produit crée dans la bdd");
    } catch (error) {
        console.log("impossible de créé la produit");
        return error;
    }
}

export const updateProduct = async (product_id,newInfos)=>{
    try {
        const updatedProduct = await Product.update(newInfos,{where:{id_Produit:product_id}});
        return updatedProduct;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteProduct = async (Product_id)=>{
    try {
        await Product.destroy({where:{id_Commande:Product_id}});
        console.log("produit supprimer avec success");
        return "produit supprimer avec success";
    } catch (error) {
        console.log("impossible de supprimer le produit");
        return error;
       
    }
}