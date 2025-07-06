import Transaction from  '../models/transaction.model.js';


export const addTransaction = async(req,res)=>{
    let data = req.body;
    console.log(data);
    try {
        const transaction = new Transaction(data);
        await transaction.save();
        return res.status(201).json(transaction);
    } catch (error) {
        console.log("error in Transaction saving ", error.message);
        return res.status(400).json({error:error.message});
    }
}

export const getAllTransactions = async(req,res)=>{
    try {
        const transactions = await Transaction.find().sort({date : -1});
        return res.status(200).json({message :"Transactions fethched Successfully" , data:transactions});
    } catch (error) {
        console.log("Transactions could not be fetched" , error.message);
        return res.status(400).json({error:error.message});
    }
}

export const updateTransaction = async(req,res) =>{
  let id = req.params.id;
  let data = req.body;
  try {
    const UpdatedTransaction = await Transaction.findByIdUpdate(id , data  , {new:true});
    return res.status(200).json({message:"Transaction Updated Successfully" , data:UpdatedTransaction});
  } catch (error) {
    console.log("Error in Updating Transaction");
    return res.json({message:"Error in Updation" , error:error.message});
  }
}


export const deleteTransaction = async(req,res) =>{
    let id = req.params.id;
    try {
        const deletedTransaction = await Transaction.findByIdAndDelete(id);
        return res.status(200).json({message:"Transaction Deleted Successfully" , data:deletedTransaction});
    } catch (error) {
        console.log("Error in Deletion ");
        return res.status(400).json({error:error.message});
    }
}