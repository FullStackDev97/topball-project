import * as UserRepo from '../model.managers/User.Model.Manager.js'
import * as TeamRepo from '../model.managers/Team.Model.Manager.js'
import * as OrderRepo from '../model.managers/Purchase.Model.Manager.js'
import * as GameRepo from '../model.managers/Game.Model.Manager.js'



export const getUserTeams = async (req,res)=>{
  try {
    const userTeams = await TeamRepo.findTeamsByUserId(req.body.u_id);
    res.send(userTeams);
  } catch (error) {
    res.send(error);
  }
};

export const getUserOrders = async (req,res)=>{
  try {
    const userOrders = await OrderRepo.findAllOrdersbyUserId(req.body.u_id);
    res.send(userOrders);
  } catch (error) {
    res.send(error);
  }
};

export const getUserGames = async (req,res)=>{
  try {
    const userOrders = await GameRepo.findAllGamesbyUserId(req.body.u_id);
    res.send(userOrders);
  } catch (error) {
    res.send(error);
  }
};

export const getUserGamesWon = async (req,res)=>{
  try {
    const userOrders = await GameRepo.findAllGamesWonbyUserId(req.body.u_id);
    res.send(userOrders);
  } catch (error) {
    res.send(error);
  }
};

export const getUserGamesLost = async (req,res)=>{
  try {
    const userOrders = await GameRepo.findAllGamesLostbyUserId(req.body.u_id);
    res.send(userOrders);
  } catch (error) {
    res.send(error);
  }
};

export const newUser = async (req,res)=>{
    
    const [user, created] = await UserRepo.createUser({
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
    
  const [user, created] = await UserRepo.deleteUserById({
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
    
  const [user, created] = await UserRepo.updateUserById({
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

export const getAllUsers = async (req,res)=>{

  try {

    const users = await UserRepo.findAllUsers();
    console.log('voici la liste des utilisateurs');
    users.forEach(u=>console.log(u));
    res.send(users);

  } catch (error) {
    console.log('impossible de recuperer les utilisateurs');
    console.log(error);
    res.send(error);
  }
  
};

export const getUserById = async (req,res)=>{

  try {
    console.log(req.body.u_id);
    const user = await UserRepo.findUserById(req.body.u_id);
    console.log(user);
    //users.forEach(u=>console.log(u));
    res.send(user);

  } catch (error) {
    console.log('impossible de recuperer l utilisateur');
    console.log(error);
    res.send(error);
  }
  
};

