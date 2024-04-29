// Desc: User model for the database
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    emailConfirmed: {
      type: Boolean,
      default: false,
    },
    photo: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// userSchema.methods.confirmEmail = async function () {
//   this.emailConfirmed = true;
//   await this.save();
// };

const User = mongoose.model("User", userSchema);

export default User;
