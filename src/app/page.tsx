import { db } from "@/db";

export default async function Home() {
  const rooms = await db.query.room.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {rooms.map((room) => {
        return <div key={room.id}>{room.name}</div>;
      })}
    </main>
  );
}
