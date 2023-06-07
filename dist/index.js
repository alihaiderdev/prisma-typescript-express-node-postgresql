import { PrismaClient } from '@prisma/client';
import express from 'express';
import 'dotenv/config';
const prisma = new PrismaClient({
    errorFormat: 'pretty',
    log: ['query', 'info', 'warn', 'error'],
});
const app = express();
const PORT = process.env.PORT || 8000;
const HOSTNAME = 'localhost';
async function main() {
    // const allUsers = await prisma.user.findMany();
    // console.log({ allUsers });
    // const users = await prisma.user.findMany({
    //   include: {
    //     posts: true,
    //     profile: true,
    //   },
    // });
    // console.dir(users, { depth: null });
    // const post = await prisma.post.update({
    //   where: { id: 1 },
    //   data: { published: true },
    // });
    // console.log(post);
    // const user = await prisma.user.create({
    //   data: {
    //     name: 'daniyal.malik',
    //     email: 'daniyal.malik@sybrid.com',
    //     posts: {
    //       create: { title: 'Hello World', content: 'lorem inpsum dummy description' },
    //     },
    //     profile: {
    //       create: { bio: 'I like to play football' },
    //     },
    //   },
    // });
    // console.log({ user });
    // let includePosts: boolean = false;
    // let user: Prisma.UserCreateInput;
    // // Check if posts should be included in the query
    // if (includePosts) {
    //   user = {
    //     email: 'elsa@prisma.io',
    //     name: 'Elsa Prisma',
    //     posts: {
    //       create: {
    //         title: 'Include this post!',
    //       },
    //     },
    //   };
    // } else {
    //   user = {
    //     email: 'elsa@prisma.io',
    //     name: 'Elsa Prisma',
    //   };
    // }
    // // Pass 'user' object into query
    // const createUser = await prisma.user.create({ data: user });
    // const createUsers = await prisma.user.createMany({
    //   data: [
    //     { name: 'Bob', email: 'bob@prisma.io' },
    //     { name: 'Bobo', email: 'bob@prisma.io' }, // Duplicate unique key!
    //     { name: 'Yewande', email: 'yewande@prisma.io' },
    //     { name: 'Angelique', email: 'angelique@prisma.io' },
    //   ],
    //   skipDuplicates: true, // Skip 'Bobo'
    // });
    // console.log({ createUsers });
    // By unique identifier
    const getUserByEmail = await prisma.user.findUnique({
        where: {
            email: 'bob@prisma.io',
        },
    });
    // By ID
    const getUserById = await prisma.user.findUnique({
        where: {
            id: 6,
        },
    });
    console.log({ getUserByEmail, getUserById });
}
main()
    .then(async () => {
    // await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    // await prisma.$disconnect();
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
app.listen(PORT, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});
