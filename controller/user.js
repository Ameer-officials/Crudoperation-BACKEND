import {User} from "../models/usersdb.js"

// export const addUser = async (req , res )=>{
//     try {
//         const {email , password } = req.body ;
//         const user = await User.findOne({email})
//         if (user) {
//             return res.send({
//                 success : "faaalse" ,
//                 message : "something went wrong"
//             })
//         }
//        const newUser = new User({
//         email , password

//        }) 
//        await newUser.save();
    
//     //    JUST TO CHECK WEATHER ADMIN IS ADDED OR NOT
//        res.send("added")  
//     //    res.redirect("/")
    

//     } catch (error) {
//         res.status(400) 
//             .send({
//                 success : false,
//                 message: error.message,
//             })
//     }
// }
export const getAllUser = async (req, res) => {
  try {
    // const { name }= req.body
    const users = await User.find({});
    if (!users) {
      return res.send({
        success: false,
        message: "no users found",
      });
    }
    res.send(users);
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { email, password } = req.body;
      const update = { email , password };
  
    const newUser = await User.findOneAndUpdate({_id : id}, update , {new : true})
    res.send(newUser)
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };