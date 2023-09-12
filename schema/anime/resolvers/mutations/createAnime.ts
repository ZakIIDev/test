import Anime, { IAnime } from "@/Models/Anime";

interface IAnimeInput {
    animeInput: IAnime
} 

export default async (_: any, { animeInput}: IAnimeInput) => {
    try {
      const anime = new Anime({
        title: animeInput.title,
        genre: animeInput.genre,
        episodes: animeInput.episodes,
        releaseYear: animeInput.releaseYear,
        rating: animeInput.rating,
      });
      const result = await anime.save();
      return result;
    } catch (error) {
      throw new Error('Failed to create anime');
    }
}