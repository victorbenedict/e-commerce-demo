'use client';
import { Button } from '@repo/ui/components/base/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      setMessage('Checking API health...');
      const res = await fetch('/api/health');
      const data = await res.json();
      setMessage(data.message);
    }

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-center space-y-4 rounded-xl p-6 shadow-2xl">
        <h1 className="text-2xl text-center">
          <span className="block">Turborepo</span>
          <span className="block">Shadcn/ui</span>
          <span className="block">Tailwind CSS v4</span>
        </h1>

        <p>Here is your shadcn button.</p>
        <div>{message}</div>
        <Button className="hover:cursor-pointer" onClick={() => router.push('/login')}>
          Login
        </Button>
      </div>
    </div>
  );
}
