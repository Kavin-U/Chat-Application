import User from '../Models/User.model.js';

const createUser = async (req,res)=>{

    const {Name} = req.body;

    const NewUser = new User({
        Name : Name,
    });

    try{
        await NewUser.save();
        console.log("New User Created", NewUser);
        res.json({message : `New user created ${NewUser}`})
    }
    catch(err){
        console.log(err.message);
    }
}

export default createUser;