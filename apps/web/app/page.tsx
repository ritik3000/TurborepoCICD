
import { prisma } from "@repo/db/client";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const user = await prisma.user.findFirst();

  return (
    <div>
      {user?.username}
      {user?.password}
      <br />
      <div>
       Hello Urvashi
      </div>
    </div>
  );
}