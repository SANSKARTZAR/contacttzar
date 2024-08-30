import mongoose from 'mongoose';

const Form2Schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Form2 || mongoose.model('Form2', Form2Schema);
