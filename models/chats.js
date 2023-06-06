import mongoose from "mongoose";
// import { getChatsListOfUserByUsername, getProfilePicOfUserByUsername, getDisplasyNameUserByUsername} from "../services/users.js";
// import { createChat, getMessagesList, getUser1, getUser2, readChat} from "../services/chats.js";
// import { readMessage } from "../services/messages.js";

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    chatId:{
        type: Number,
        unique: true,  // Set the field as unique
        index: true    // Create an index for efficient querying
    },
    messagesList: {
        type: [Number],
        default: []
    },
    user1: {
        type: String,
        required: true
    },
    user2: {
        type: String,
        required: true
    }
});



const Chat = mongoose.model("Chat", ChatSchema);



export {
    Chat
  };
  