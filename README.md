# Movie Streaming Backend (MERN)

## Setup

1. Create `.env` from the example:

```
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/movie_streaming
JWT_SECRET=replace_me
CLIENT_ORIGIN=http://localhost:3000
```

2. Install dependencies:

```
npm install
```

3. Seed sample data (optional):

```
npm run seed
```

4. Start the server:

```
npm run dev
```

## API

- Auth: `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`
- Movies: `GET /api/movies`, `GET /api/movies/:id`, `POST /api/movies` (admin), `PUT /api/movies/:id` (admin), `DELETE /api/movies/:id` (admin), `POST /api/movies/:id/like`, `POST /api/movies/:id/watchlist`
- Genres: `GET /api/genres`, `POST /api/genres` (admin), `DELETE /api/genres/:id` (admin)
- Users: `GET /api/users/me`, `GET /api/users/me/watchlist`, `GET /api/users/me/likes`

Import the provided Postman collection from `postman/collection.json`. "# movie-streaming-backend" 
"# movie-streaming-backend" 
