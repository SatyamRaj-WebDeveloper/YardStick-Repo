import mongoose from 'mongoose' ; 

let connectionString = "mongodb+srv://SatyamRaj:Satyam123@cluster0.zwfdxin.mongodb.net/YardStickDataBase"
let connected = false;

const Dbconnect =async()=>{
    if(connected) return ; 
   
    try {
       await  mongoose.connect(connectionString )
       connected = true;
       console.log("Database Connected SuccessFully");
    } catch (error) {
        console.log("Mongo DB Connection error" , error.message)
    }
}


export {Dbconnect};