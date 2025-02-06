import mongoose from "mongoose";
import Classe from "../models/classesModel.js";

export const createClasse = async (req, res) => {
  try {
    const classes = await Classe.create(req.body)
    res.status(200).json(classes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const getAllClasse = async (req, res) => {
  try {
    const classes = await Classe.find({});
    res.status(200).json({ success: true, data: classes });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
}

export const getSingle = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false })
  }
  try {
    
      const classe = await Classe.findById(id)
      res.status(200).json({success: true, data:classe})
  } catch (error) {
       res.status(500).json({success: false , error: "server error"})
  }
}