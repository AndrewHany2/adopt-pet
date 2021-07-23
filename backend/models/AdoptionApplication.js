const mongoose = require("mongoose");

const AdoptionApplicationSchema = new mongoose.Schema(
  {
    requestedUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    petId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Pet",
    },
    status: {
      type: String,
      default: "PENDING",
      required: true,
      enum: ["ACCEPTED", "REJECTED", "PENDING"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "AdoptionApplication",
  AdoptionApplicationSchema
);
