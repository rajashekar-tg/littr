import mongoose from "mongoose";

const ZipcodeSchema = mongoose.Schema({
  zipcode: {
    type: String,
    required: true,
  },
});

export default mongoose.model("pricing", ZipcodeSchema);
