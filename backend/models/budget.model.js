import mongoose , {Schema} from ' mongoose';


const BudgetSchema = new Schema({
    category :{
        type : String,
        required : true,
    },
    month :{
        type : String ,
        required : true,
    },
    limit :{
        type : Number ,
        require: true,
    }
});


export default mongoose.model("Budget" , BudgetSchema);