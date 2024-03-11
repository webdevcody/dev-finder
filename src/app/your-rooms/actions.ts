"use server";

import { deleteRoom, getRoom } from "@/data-access/rooms";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function deleteRoomAction(roomId: string) {
  const session = await getSession();
  if (!session) {
    throw new Error("User not authenticated");
  }

  const room = await getRoom(roomId);

  if (room?.userId !== session.user.id) {
    throw new Error("User not authorized");
  }

  await deleteRoom(roomId);

  revalidatePath("/your-rooms");
}
