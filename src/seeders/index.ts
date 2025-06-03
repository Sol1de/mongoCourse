import { seedBooks } from './bookSeeder';

export const runSeeders = async () => {
    try {
        console.log('🌱 Starting database seeding...');
        
        await seedBooks();
        
        console.log('✅ All seeders completed successfully');
    } catch (error) {
        console.error('❌ Error during seeding:', error);
        process.exit(1);
    }
}; 