import mongoose from "mongoose";

const ClasseSchema = mongoose.Schema({
    place:{
        type:String,
        required:true
    },
    lecture:{
        type:String,
        required:true
    },
    rooms:{
        type:Number,
        required:true
    },
    courses:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true,
        default:0
    },
    timeScheduled:{
        type:Number,
        required:true
    }
}, {Timestamps: true});

const Classe = mongoose.model("Classe", ClasseSchema);
export default Classe;