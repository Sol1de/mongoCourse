import { Request, Response } from "express";
import mongoose from "mongoose";
import { BookModel } from "#models/bookModel";

/**
 * Créer un nouveau livre
 */
export const createBook = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;

    const newBook = new BookModel(bookData);

    const savedBook = await newBook.save();

    res.status(201).json({
      message: "Livre créé avec succès",
      book: savedBook
    });
  } catch (error: any) {
    res.status(400).json({
      lieu: 'bookController - createBook',
      message: error.message
    });
  }
};
/**
 * Récupère la liste de tous les livres
 */
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (error: any) {
    res.status(500).json({ lieu: 'bookController', message: error.message });
  }
};
/**
 * Recherche des livres selon différents critères
 */
export const searchBooks = async (req: Request, res: Response) => {
  try {
    const filters: any = {};

    const { title, author, edition, type, lang, summary, isbn, parutionDate } = req.query;

    if (title) filters.title = { $regex: title, $options: 'i' };
    if (author) filters.author = { $regex: author, $options: 'i' };
    if (edition) filters.edition = { $regex: edition, $options: 'i' };
    if (type) filters.type = type;
    if (lang) filters.lang = { $regex: lang, $options: 'i' };
    if (summary) filters.summary = { $regex: summary, $options: 'i' };
    if (isbn) filters.isbn = { $regex: isbn, $options: 'i' };
    if (parutionDate) filters.parutionDate = parutionDate;

    const books = await BookModel.find(filters);

    res.status(200).json({
      count: books.length,
      books
    });
  } catch (error: any) {
    res.status(500).json({
      lieu: 'bookController - searchBooks',
      message: error.message
    });
  }
};
/**
 * Supprime un livre par son ID
 */
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "ID de livre invalide" });
    }

    const deletedBook = await BookModel.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }

    return res.status(200).json({ message: "Livre supprimé avec succès", book: deletedBook });
  } catch (error: any) {
    return res.status(500).json({ lieu: 'bookController', message: error.message });
  }
};