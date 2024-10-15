//definimos el schema para User y creamos una coleccion en la bdd (un model de mongoose).
//vamos a interpretar el body de los requests como un UserSchema
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true },
  password: { 
    type: String, 
    required: true },
});

const User = mongoose.model('User', UserSchema);

export default User
