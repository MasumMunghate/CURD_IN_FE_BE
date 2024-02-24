import User from "../models/user.models.js";

// for Create
export const create = async (req,res) => {
  try {
    const { fname, lname, email, password } = req.body;

    if (!fname || !lname || !email || !password) {
      return res.status(400).json({ msg: "All Feild Are required" });
    }
    const findEmail = await User.findOne({ email });
    if (findEmail) {
      return res.status(400).json({ msg: "User is Already Exist" });
    }

    const newUser = new User({
      fname,
      lname,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ msg: "User Added Successfully" });
  } catch (err) {
    res.status(500).json({error : err})
  }
};

//Get All User
export const getAllUser = async (req,res)=>{
  try{
    const getAllUsers = await User.find(); // sara data aa jayega
    if(!getAllUser){
      res.status(400).json({msg: "User data not Found"})
    }
    return res.status(201).json(getAllUsers)
  }
  catch(err){
   res.status(500).json({error : err})
  }
}

// Get User by Id
export const getUserByID = async (req , res)=>{
  try {
    const id = req.params.id;
    const existUser = await User.findById(id)
    if(!existUser){
      res.status(404).json({msg : "User not Found"})
    }
    return res.status(200).json(existUser)
  } catch (error) {
    res.status(500).json({error : error})
  }
}

// Edit user by ID
export const EditUser = async(req, res)=>{
  try {
    const id = req.params.id;
    const findId = await User.findById(id);
    if(!findId){
      return res.status(400).json({msg : "User not Found"})
    }
    const updateBody = req.body;
    console.log(updateBody);
    await User.findByIdAndUpdate(findId , updateBody);
    
   return  res.status(201).json({msg : "User Update Succussefully" ,findId})
  } catch (error) {
    res.status(500).json({error : error})
  }
}

export const deleteUser = async(req, res)=>{
  try{
    const id = req.params.id;
    console.log(id,"id");
    const findById = await User.findById(id)
    if(!findById){
      return res.status(400).json({msg : "User not Found"})
    }
    
    await User.findByIdAndDelete(id)
    return res.status(200).json({msg:"User Deleted Successfully",findById})

  }
  catch(err){
  res.status(500).json({error:err})
  }
}