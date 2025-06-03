import { seedBooks } from '#seeders/bookSeeder';
import chalk from 'chalk';

const runSeeders = async () => {
    try {
        console.log(chalk.blue('Starting database seeding...'));
        
        await seedBooks();
        
        console.log(chalk.green('All seeders completed successfully'));
        process.exit(0);
    } catch (error) {
        console.error(chalk.red('Error during seeding:'), error);
        process.exit(1);
    }
};

runSeeders(); 