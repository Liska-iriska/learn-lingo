import { ref, get } from "firebase/database";
import { db } from "../firebase";
import type { Teacher } from "../types/teacher";

export const PER_PAGE = 4;

export async function fetchAllTeachers(): Promise<Teacher[]> {
  const snapshot = await get(ref(db));

  if (!snapshot.exists()) return [];

  const data = snapshot.val();

  const teachersData = data.teachers ? data.teachers : data;

  const items: Teacher[] = Object.entries(teachersData).map(([key, value]) => ({
    id: key,
    ...(value as Omit<Teacher, "id">),
  }));

  return items;
}

export async function fetchTeachersByIds(ids: string[]): Promise<Teacher[]> {
  if (!ids || ids.length === 0) return [];

  const allTeachers = await fetchAllTeachers();
  return allTeachers.filter((teacher) => ids.includes(teacher.id));
}
