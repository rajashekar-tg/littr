import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import users from "./models/User.js";
import zipcodepricing from "./models/Price.js";
import materials from "./models/Material.js";
const app = express();
//db connection
mongoose
  .connect(
    "mongodb+srv://littr:littr@litter-dev.rn7by.mongodb.net/littr?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(express.json());
app.use(cors());

//dummy data for checking
app.get("/", (req, res) => {
  res.send("welcome");
});

// fetch all users form db[testing]
app.get("/getUsers", async (req, res) => {
  try {
    const userList = await users.find();
    res.status(200).json({
      success: true,
      userList,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
});

// post login
app.post("/login", async (req, res) => {
  console.log(typeof req.body);
  const { email } = req.body;
  const user = await users.findOne({ email });
  //displaying db data
  console.log(user);
  //if the user is not exist ,it will give an error
  if (!user) {
    res.status(401).json("User doesn't exist");
    return;
  }
  //user exist
  //res.json(user);
  res.json("Login successfully");
});

//get zipcode id from db
app.get("/zipcode/:id", async (req, res) => {
  try {
    //get data from pricing in db through zipcode
    const zipcode = req.params.id;
    console.log(zipcode);
    const user = await zipcodepricing.findOne({ zipcode });
    console.log("USER", user);
    if (user) {
      let pricingObj = JSON.parse(JSON.stringify(user)); //convert user data to json
      // objkeys = Object.keys(data); // [13,15,27, _id, zip_code] from zipcode
      // console.log(data)

      // get all material data from db
      const materialcollection = await materials.find();
      let materialData = JSON.parse(JSON.stringify(materialcollection)); //convert materials data to json
      // console.log(materialData)

      // objkeys = Object.keys(data); // [13,15,27, _id, zip_code] from zipcode
      // console.log(objkeys)

      //for getting only numbers
      let distRes = [];
      for (let item of materialData) {
        let matId = item._id;
        for (let obj of item.categories) {
          // console.log("obj", obj._id)
          let catId = obj._id;
          console.log("////// over /////");
          let key = 1;
          let catArr = [];

          for (let data of obj.sizes) {
            // console.log(data)

            let res = pricingObj[data][matId][catId];
            console.log("RES", item.name, data + "GL. " + obj.name, res);
            let newObj = {
              key: key++ + "",
              name: data + "GL. " + obj.name,
              price: res,
            };
            catArr.push(newObj);
          }
          distRes.push(catArr);
        }
      }

      console.log(distRes);
      if (distRes.length > 0) {
        res.status(200).json({
          success: true,
          materialData: distRes,
          user,
        });
      } else {
        res.status(404).json({
          success: false,
          materialData: [],
        });
      }
    } else {
      res.status(404).json({
        success: false,
        materialData: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      materialData: [],
    });
  }
});
//getting all zipcodes date
app.get("/getAllzipcodes", async (req, res) => {
  const fetchzipdata = await zipcodepricing.find();
  res.send(fetchzipdata);
});

//listening port
app.listen(5000, () => {
  console.log("Server started...!");
});
