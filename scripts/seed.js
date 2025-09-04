import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Genre from '../src/models/Genre.js';
import Movie from '../src/models/Movie.js';
import User from '../src/models/User.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/movie_streaming';

async function run() {
	await mongoose.connect(MONGO_URI);
	console.log('Connected to MongoDB');

	await Promise.all([Genre.deleteMany({}), Movie.deleteMany({})]);

	const genreDocs = await Genre.insertMany([
		{ name: 'Action' },
		{ name: 'Drama' },
		{ name: 'Comedy' },
		{ name: 'Sci-Fi' },
		{ name: 'Thriller' }
	]);

	const [action, drama] = genreDocs;

	await Movie.insertMany([
		{
			title: 'Edge of Tomorrow',
			description: 'A soldier relives the same day over and over, fighting aliens.',
			releaseYear: 2014,
			durationMinutes: 113,
			rating: 8.1,
			genres: [action._id],
			posterUrl: 'https://image.tmdb.org/t/p/w342/uUHvlkLavotfGsNtosDy8ShsIYF.jpg',
			trailerUrl: 'https://www.youtube.com/watch?v=vw61gCe2oqI',
			videoUrl: ''
		},
		{
			title: 'The Shawshank Redemption',
			description: 'Two imprisoned men bond over a number of years.',
			releaseYear: 1994,
			durationMinutes: 142,
			rating: 9.3,
			genres: [drama._id],
			posterUrl: 'https://image.tmdb.org/t/p/w342/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
			trailerUrl: 'https://www.youtube.com/watch?v=NmzuHjWmXOc',
			videoUrl: ''
		}
	]);

	const adminEmail = 'admin@example.com';
	let admin = await User.findOne({ email: adminEmail });
	if (!admin) {
		const passwordHash = await User.hashPassword('admin123');
		admin = await User.create({ name: 'Admin', email: adminEmail, passwordHash, role: 'admin' });
		console.log('Created admin user: admin@example.com / admin123');
	}

	console.log('Seed complete');
	await mongoose.disconnect();
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
}); 