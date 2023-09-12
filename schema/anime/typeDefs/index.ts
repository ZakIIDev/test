export default `#graphql
type Query {
    hi: String
  }

type Anime {
  _id: ID!
  title: String!
  genre: [String!]!
  episodes: Int!
  releaseYear: Int!
  rating: Float!
}

input AnimeInput {
  title: String!
  genre: [String!]!
  episodes: Int!
  releaseYear: Int!
  rating: Float!
}

type Query {
  getAllAnime: [Anime!]!
  getAnimeById(id: ID!): Anime
}

type Mutation {
  createAnime(animeInput: AnimeInput): Anime!
  updateAnime(id: ID!, animeInput: AnimeInput): Anime!
  deleteAnime(id: ID!): Boolean
}

`