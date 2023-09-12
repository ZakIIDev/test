import mongoose, { Schema, Document } from 'mongoose';

// Define the Anime document structure
export interface IAnime extends Document {
  title: string;
  genre: string[];
  episodes: number;
  releaseYear: number;
  rating: number;
}

// Define the Anime schema
const AnimeSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  episodes: {
    type: Number,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

// Create and export the Anime model
export default mongoose.model<IAnime>('Anime', AnimeSchema);
