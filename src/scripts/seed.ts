import { runSeeders } from '../seeders';
import chalk from 'chalk';

runSeeders()
    .then(() => {
        console.log(chalk.green('Seeding completed'));
        process.exit(0);
    })
    .catch((error) => {
        console.error(chalk.red('Seeding failed:'), error);
        process.exit(1);
    }); 