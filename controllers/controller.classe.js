import Classe from "../models/classesModel.js";

export const createClasse = async (req , res) =>{
      try {
        const classes = await Classe.create(req.body)
        res.status(200).json(classes)
      } catch (error) {
        res.status(500).json({message : error.message})
      }
}
 export const getAllClasse = async (req ,res) =>{
     try {
       const classes = await Classe.find({});
        res.status(200).json(classes);
     } catch (error) {
      res.status(500).json({message: error.message});
     }
 }