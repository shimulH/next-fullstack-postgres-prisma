import Image from 'next/image';
import prisma from '../lib/prisma';

async function getPost() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPost();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Feed</h1>
    </main>
  );
}
