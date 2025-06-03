import { Router } from "express";
import timeLog from '#middleware/timeLog';
import pageSwitch from '#middleware/pageSwitch';
import { getAllBooks, createBook, deleteBook, searchBooks } from '#config/controllers/bookController';

const router = Router();

//middleware
router.use(pageSwitch, timeLog);

//routes
router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get('/books', getAllBooks);
router.get('/books/search', searchBooks);
router.delete('/books/:id', deleteBook);
router.post('/books', createBook);

router.get('/about', (req, res) => {
  res.send('About Us')
})

export default router
