// app/cities/page.tsx
'use client'; // optional if you're not using any server components

import { createClient } from '@/utils/supabase'; // Adjust if your Supabase client is elsewhere

export default async function CitiesPage() {
  const supabase = createClient();

  const { data: cities, error } = await supabase
    .from('cities')
    .select('id,name,country');

  if (error) {
    return <p className="text-red-500 p-6">Error loading cities: {error.message}</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Cities</h1>

      {cities && cities.length > 0 ? (
        <ul className="space-y-2">
          {cities.map((city) => (
            <li key={city.id} className="border rounded p-4 shadow">
              <h2 className="text-xl font-semibold">{city.name}</h2>
              <p className="text-gray-500">{city.country}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No cities found yet.</p>
      )}
    </main>
  );
}
