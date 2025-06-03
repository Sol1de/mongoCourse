import { Router } from "express";
import timeLog from '#middleware/timeLog';
import pageSwitch from '#middleware/pageSwitch';
import { getAllBooks, deleteBook, createBook } from '#config/controllers/bookController';

const router = Router();

//middleware
router.use(pageSwitch, timeLog);

//routes
router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get('/books', getAllBooks);
router.delete('/books/:id', deleteBook);
router.post('/books', createBook);

router.get('/about', (req, res) => {
  res.send('About Us')
})

export default router
