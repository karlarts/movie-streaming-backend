import { Router } from 'express';
import { body } from 'express-validator';
import { requireAuth, requireAdmin } from '../middleware/auth.js';
import { listMovies, getMovie, createMovie, updateMovie, deleteMovie, likeMovie, toggleWatchlist } from '../controllers/movie.controller.js';

const router = Router();

router.get('/', listMovies);
router.get('/:id', getMovie);

router.post('/', requireAuth, requireAdmin, [body('title').isString().isLength({ min: 1 })], createMovie);
router.put('/:id', requireAuth, requireAdmin, updateMovie);
router.delete('/:id', requireAuth, requireAdmin, deleteMovie);

router.post('/:id/like', requireAuth, likeMovie);
router.post('/:id/watchlist', requireAuth, toggleWatchlist);

export default router; 