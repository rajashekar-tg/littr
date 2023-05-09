import mongoose from "mongoose";

const materialSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categories: [
    {
      name: {
        type: String,
        required: true,
      },
      sizes: [
        {
          type: String,
          required: true,
        },
      ],
    },
  ],
});

export default mongoose.model("materials", materialSchema);
