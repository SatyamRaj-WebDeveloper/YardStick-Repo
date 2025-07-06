import mongoose , {Schema} from 'mongoose';


const transactionSchema = new Schema({
    amount:{
        type : Number ,
        required : true
    },
    date :{
        type:Date,
        required : true,
    },
    description :{
        type : String,
        required : true,
    },
    category :{
        type : String ,
        required : true,
        default : "Uncategorized",
    }
},{timestamps:true})

export default mongoose.model("Transaction" , transactionSchema);