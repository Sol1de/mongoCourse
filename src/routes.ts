import {
    getAllAuteurs,
} from "#config/controllers/authorController";
import {
    createBook,
    deleteBook,
    getAllBooks,
} from "#config/controllers/bookController";
import pageSwitch from "#middleware/pageSwitch";
import timeLog from "#middleware/timeLog";
import { Router } from "express";

const router = Router();

//middleware
router.use(pageSwitch, timeLog);

//routes
router.get("/", (req, res) => {
    res.send("Hello World");
});

// Routes pour les livres
router.get("/books", getAllBooks);
router.delete("/books/:id", deleteBook);
router.post("/books", createBook);

// Routes pour les auteurs
router.get("/auteur", getAllAuteurs);

router.get("/about", (req, res) => {
    res.send("About Us");
});

export default router;
