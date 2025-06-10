import { faker } from '@faker-js/faker';
import { UserModel } from '#models/userModel';
import { LibraryModel } from '#models/libraryModel';
import { BookModel } from '#models/bookModel';
import { BookRequestModel } from '#models/bookRequestModel';
import { BookRequestStatus } from '#enums/bookRequestEnum';
import seederConnection from '#database/seederConnection';
import chalk from 'chalk';
import bcrypt from 'bcrypt';

export const seedUsers = async () => {
    try {
        await seederConnection();
        
        await UserModel.deleteMany({});
        await BookRequestModel.deleteMany({});

        // Get all libraries and books for references
        const libraries = await LibraryModel.find();
        const books = await BookModel.find();

        if (libraries.length === 0 || books.length === 0) {
            console.log(chalk.yellow('Warning: No libraries or books found. Users will be created without references.'));
        }

        const users = Array.from({ length: 20 }, async () => {
            // Select random libraries for visits (1-3 libraries)
            const visitedLibraries = faker.helpers.arrayElements(
                libraries,
                { min: 1, max: Math.min(3, libraries.length) }
            );

            // Create some random book requests
            const bookRequests = [];
            const numRequests = faker.number.int({ min: 0, max: 5 });
            
            for (let i = 0; i < numRequests; i++) {
                const library = faker.helpers.arrayElement(libraries);
                const book = faker.helpers.arrayElement(books);
                const status = faker.helpers.arrayElement(Object.values(BookRequestStatus));
                
                const bookRequest = new BookRequestModel({
                    book: book._id,
                    library: library._id,
                    status,
                    requestDate: faker.date.past()
                });
                
                const savedRequest = await bookRequest.save();
                bookRequests.push(savedRequest._id);
            }

            // Hash the password
            const password = await bcrypt.hash('password123', 10);

            return {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                email: faker.internet.email(),
                password,
                visitedLibraries: visitedLibraries.map(lib => lib._id),
                bookRequests
            };
        });

        // Wait for all users to be created
        const createdUsers = await Promise.all(users);
        await UserModel.insertMany(createdUsers);
        
        console.log(chalk.green('Users seeded successfully'));
    } catch (error) {
        console.error(chalk.red('Error seeding users:', error));
        throw error;
    }
}; 