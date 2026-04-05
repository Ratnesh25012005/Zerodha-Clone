require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");//for parsing
const cors=require("cors");//froe security

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const {OrdersModel}=require("./model/OrdersModel")

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());//for security
app.use(bodyParser.json()); //for parsing the data


app.get("/allHoldings",async(req,res)=>{
  let allHoldings=await HoldingsModel.find({});  // {} ---> fetch everything
  res.json(allHoldings);
})
app.get("/allPositions",async(req,res)=>{
  let allPositions=await PositionsModel.find({});  // {} ---> fetch everything
  res.json(allPositions);
})

app.post("/newOrder",async(req,res)=>{
  let newOrder=new OrdersModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
})
app.listen(PORT, () => {
  console.log(`listening to localhost ${PORT}` );
  mongoose.connect(uri);
  console.log("connected to DB");
});
