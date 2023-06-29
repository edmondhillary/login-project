import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
   
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "User",
    },
    displayName: {
      type: String,
      get: function () {
        return this?.firstName + " " + this?.lastName;
      },
    },
   
  },
  {
    timestamps: true,
    toObject: { getters: true },
    toJSON: { getters: true, versionKey: false },
  }
);

const userModel = model("User", userSchema);

export default userModel;

