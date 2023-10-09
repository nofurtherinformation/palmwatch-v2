import queryClient from "@/utils/getMillData";
import { NextResponse } from "next/server";
import path from "path";
const range = (start: number, end: number) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
};
const cols = range(2001, 2023).map((i) => `treeloss_km_${i}`);

export async function GET(_req: Request, res: { params: { group: string } }) {
  const { group } = res.params;
  if (!group)
    return NextResponse.json(
      { error: new Error("No brand provided") },
      { status: 400 }
    );
  const dataDir = path.join(process.cwd(), "public", "data");
  await queryClient.init(dataDir);
  const data = queryClient.getGroupInfo(group, cols);
  return NextResponse.json({ ...data }, { status: 200 });
}