'use client';
import { Button } from '@repo/ui/components/base/button';

export default function Home() {
  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
    const data = await res.text();
    return data;
  };

  const handleClick = async () => {
    console.log('click');
    const data = await getData();
    console.log(data);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-center space-y-4 rounded-xl p-6 shadow-2xl">
        <h1 className="text-2xl text-center">
          <span className="block">Turborepo</span>
          <span className="block">Shadcn/ui</span>
          <span className="block">Tailwind CSS v4</span>
        </h1>

        <p>Here is your shadcn button.</p>
        <Button onClick={handleClick}>Button</Button>
      </div>
    </div>
  );
}
