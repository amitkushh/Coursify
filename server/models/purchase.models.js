import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  courseId: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
  },
});

const purchaseModel = mongoose.model("Purchase", purchaseSchema);
export default purchaseModel;
