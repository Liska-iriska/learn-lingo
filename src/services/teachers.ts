import {
  ref,
  query,
  orderByKey,
  limitToFirst,
  startAfter,
  get,
} from "firebase/database";
import { db } from "../firebase";
import type { Teacher } from "../types/teacher";

export const PER_PAGE = 4;

export async function fetchTeachers(lastKey?: string) {
  const base = ref(db);

  const q = lastKey
    ? query(base, orderByKey(), startAfter(lastKey), limitToFirst(PER_PAGE + 1))
    : query(base, orderByKey(), limitToFirst(PER_PAGE + 1));

  const snapshot = await get(q);

  const items: Teacher[] = [];
  snapshot.forEach((child) => {
    items.push({ id: child.key as string, ...child.val() });
  });

  return {
    teachers: items.slice(0, PER_PAGE),
    hasMore: items.length > PER_PAGE,
  };
}

export async function fetchTeachersByIds(ids: string[]): Promise<Teacher[]> {
  const snapshots = await Promise.all(ids.map((id) => get(ref(db, id))));

  return snapshots
    .filter((snapshot) => snapshot.exists())
    .map((snapshot) => ({
      id: snapshot.key as string,
      ...(snapshot.val() as Omit<Teacher, "id">),
    }));
}
