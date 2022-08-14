import type { NextPage } from 'next';
import Head from 'next/head';
import Games from '../components/games';
import Header from '../components/header';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.proxy.example.hello.useQuery({ text: 'from tRPC' });

  return (
    <>
      <Head>
        <title>TV Football</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex flex-col items-center min-h-screen p-4 mx-auto">
        <Header />
        <span className="text-xl py-8">Today's games:</span>
        <Games />
      </main>
    </>
  );
};

export default Home;

// Technology component
interface TechnologyCardProps {
  name: string;
  description: string;
  documentation: string;
}

const TechnologyCard = ({
  name,
  description,
  documentation
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};
