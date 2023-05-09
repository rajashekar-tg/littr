import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "please provide email"],
  },
});

export default mongoose.model("users", userSchema);
