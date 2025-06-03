import { faker } from '@faker-js/faker';
import { LibraryModel } from '#models/libraryModel';
import { BookModel } from '#models/bookModel';
import { BookQuantityModel } from '#models/bookQuantityModel';
import seederConnection from '#database/seederConnection';
import chalk from 'chalk';

export const seedLibraries = async () => {
    try {
        await seederConnection();
        
        await LibraryModel.deleteMany({});
        await BookQuantityModel.deleteMany({});

        const books = await BookModel.find();
        const bookIds = books.map(book => book._id);

        if (bookIds.length === 0) {
            console.log(chalk.yellow('Warning: No books found in database. Libraries will be created without books.'));
        }

        const libraries = Array.from({ length: 10 }, async () => {
            const selectedBookIds = faker.helpers.arrayElements(bookIds, { min: 4, max: Math.min(10, bookIds.length) });
            
            const bookQuantities = await Promise.all(
                selectedBookIds.map(async (bookId) => {
                    const bookQuantity = new BookQuantityModel({
                        books: [bookId],
                        quantity: faker.number.int({ min: 1, max: 10 })
                    });
                    return await bookQuantity.save();
                })
            );

            return {
                name: faker.company.name(),
                address: faker.location.streetAddress(),
                books: bookQuantities.map(bq => bq._id)
            };
        });

        const createdLibraries = await Promise.all(libraries);
        await LibraryModel.insertMany(createdLibraries);
        
        console.log(chalk.green('Libraries seeded successfully'));
    } catch (error) {
        console.error(chalk.red('Error seeding libraries:', error));
        throw error;
    }
}; 