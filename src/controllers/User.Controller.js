import Utilisateur from "../models/User.Model.js";

export const newUser = async (req,res)=>{
    
    const [user, created] = await Utilisateur.findOrCreate({
        where: { email: req.body.email },
        defaults: {
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            date_de_Naissance: req.body.ddn,
            u_role: req.body.u_role,
            id_division: req.body.div}
      });

      if (created !== true){
        console.log("cet email appartient deja à un compte")
        res.send("cet email appartient deja à un compte");
      }else{
        console.log("Bienvenue chez nous "+user.nom+" "+user.prenom)
        console.log(user)
        res.send("Bienvenue chez nous "+user.nom+" "+user.prenom)
      }
};

export const deleteUser = async (req,res)=>{
    
  const [user, created] = await Utilisateur.deleteUserById({
      where: { email: req.body.email },
      defaults: {
          nom: req.body.nom,
          prenom: req.body.prenom,
          email: req.body.email,
          date_de_Naissance: req.body.ddn,
          u_role: req.body.u_role,
          id_division: req.body.div}
    });

    if (created !== true){
      console.log("cet email appartient deja à un compte")
      res.send("cet email appartient deja à un compte");
    }else{
      console.log("Bienvenue chez nous "+user.nom+" "+user.prenom)
      console.log(user)
      res.send("Bienvenue chez nous "+user.nom+" "+user.prenom)
    }
};

export const updateUser = async (req,res)=>{
    
  const [user, created] = await Utilisateur.updateUserById({
      where: { email: req.body.email },
      defaults: {
          nom: req.body.nom,
          prenom: req.body.prenom,
          email: req.body.email,
          date_de_Naissance: req.body.ddn,
          u_role: req.body.u_role,
          id_division: req.body.div}
    });

    if (created !== true){
      console.log("cet email appartient deja à un compte")
      res.send("cet email appartient deja à un compte");
    }else{
      console.log("Bienvenue chez nous "+user.nom+" "+user.prenom)
      console.log(user)
      res.send("Bienvenue chez nous "+user.nom+" "+user.prenom)
    }
}

export const getAllUsers = async (req,res)=>{

  try {

    const users = await Utilisateur.findAll();
    console.log('voici la liste des utilisateurs');
    users.forEach(u=>console.log(u));
    res.send(users);

  } catch (error) {
    console.log('impossible de recuperer les utilisateurs');
    console.log(error);
    res.send(error);
  }
  
}