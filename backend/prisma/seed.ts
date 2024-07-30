import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user1 = await prisma.user.upsert({
        where: { email: 'oumanesanga@gmail.com' },
        update: {},
        create: {
            email: 'oumanesanga@gmail.com',
            name: 'John Doe',  
            password: 'password',  
        }
    });

    const user2 = await prisma.user.upsert({
        where: { email: 'user@user.com' },
        update: {},
        create: {
            email: 'user@user.com',
            name: 'John Soh',  
            password: 'passwor1', 
        }
    });
    console.log({user1, user2})
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    
    await prisma.$disconnect();
});