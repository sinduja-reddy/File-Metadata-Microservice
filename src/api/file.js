import express from 'express';
export const fileApi= express.Router();
import multer from 'multer';

var upload = multer({ dest: 'uploads/' })

fileApi.post('/fileanalyse',upload.single('upfile'),(req,res,next)=>{
  res.json({filename:req.file.originalname,size:req.file.size});
})

