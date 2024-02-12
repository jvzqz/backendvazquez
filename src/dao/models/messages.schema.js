import mongoose from "mongoose";

const messageSchema = new mongoose.Schema ({
        message: String,
        messages: String,
      })

export default mongoose.model('messageModel', messageSchema)

