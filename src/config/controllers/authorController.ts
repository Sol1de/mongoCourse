import { BookModel } from "#models/bookModel";
import { Request, Response } from "express";

/**
 * Récupère tous les auteurs avec le nombre de livres qu'ils ont écrit et la moyenne
 */
export const getAllAuteurs = async (req: Request, res: Response) => {
    try {
        const books = await BookModel.find();
        if (!books || books.length === 0) {
            return res.status(404).json({
                message: "Aucun livre trouvé",
            });
        }

        // Regroupement des livres par auteur
        const authorsMap: {
            [key: string]: { name: string; number_of_books: number };
        } = {};
        books.forEach((book: any) => {
            if (book.author) {
                if (!authorsMap[book.author]) {
                    authorsMap[book.author] = {
                        name: book.author,
                        number_of_books: 0,
                    };
                }
                authorsMap[book.author].number_of_books++;
            }
        });

        // Itération sur authorsMap pour calculer la moyenne
        const number_of_author = Object.keys(authorsMap).length;
        const moy_books_per_author =
            authorsMap.reduce(
                (
                    _: number,
                    author: { name: string; number_of_books: number }
                ) => author.number_of_books,
                0
            ) / number_of_author;

        res.status(200).json({
            number_of_author,
            moy_books_per_author,
        });
    } catch (error: any) {
        res.status(500).json({
            lieu: "auteurController - getAllAuteurs",
            message: error.message,
        });
    }
};
