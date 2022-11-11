import mongoose from 'mongoose';

interface UserInterface {
    username: string;
    password: string;
}

const user = new mongoose.Schema<UserInterface>({
    username: String,
    password: String,
})

export default mongoose.model("User", user);