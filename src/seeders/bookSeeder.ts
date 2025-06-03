import { faker } from '@faker-js/faker';
import { BookModel } from '#models/bookModel';
import { BookType } from '#enums/bookEnum';
import seederConnection from '#database/seederConnection';
import chalk from 'chalk';

export const seedBooks = async () => {
    try {
        await seederConnection();
        
        await BookModel.deleteMany({});

        const books = Array.from({ length: 20 }, () => ({
            title: faker.lorem.words(3),
            author: faker.person.fullName(),
            edition: faker.number.int({ min: 1, max: 10 }).toString(),
            type: faker.helpers.arrayElement(Object.values(BookType)),
            lang: faker.helpers.arrayElement(['FR', 'EN', 'ES', 'DE']),
            summary: faker.lorem.paragraph(),
            isbn: faker.string.numeric(13),
            parutionDate: faker.date.past({ years: 10 })
        }));

        await BookModel.insertMany(books);
        console.log(chalk.green('Books seeded successfully'));
    } catch (error) {
        console.error(chalk.red('Error seeding books:', error));
        throw error;
    }
}; 