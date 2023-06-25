export const isAdmin = (req, res, next) => {
    
    if (req.body.role == "admin") {
        next();
    } else {
        res.status(401).json("non authorized");
    }
}

export const isUser = (req, res, next) => {

    if (req.body.role == "baller") {
        next();
    } else {
        res.status(401).json("non authorized");
    }
}