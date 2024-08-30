import mongoose from 'mongoose';

const Form1Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export default mongoose.models.Form1 || mongoose.model('Form1', Form1Schema);
