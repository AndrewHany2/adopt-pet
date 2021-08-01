const mongoose = require("mongoose");

const AdoptionApplicationSchema = new mongoose.Schema(
  {
    requestedUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    ownerUserId: {
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
      enum: ["ACCEPTED", "REJECTED", "PENDING"],
    },
    acceptedByUser: {
      type: Boolean,
      default: false,
    },
    acceptedByAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "AdoptionApplication",
  AdoptionApplicationSchema
);
