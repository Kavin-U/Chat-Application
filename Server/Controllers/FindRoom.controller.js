import Room from "../Models/Room.model.js"

const findRoom = async(req,res)=>{

    const Findrooms = await Room.find();

    try{
        if(Findrooms){
            // console.log(Findrooms);
            res.json({rooms : Findrooms});
        }
    }
    catch(err){
        console.log(err);
    }
}
export default findRoom;