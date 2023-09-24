import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { kv } from "@vercel/kv";
import fs from 'fs';
import path from 'path';
import { nanoid } from "@/lib/utils";

export async function POST(req: Request) {
  const body = await req.json();
  const { filePath } = body;

  if (!filePath) {
    return new Response("Missing filepath", { status: 400 });
  }
  const id = nanoid();

  // read file from local filesystem
  const file = fs.readFileSync(path.resolve(filePath));

  // upload & store in Vercel Blob
  const { url } = await put(`${id}.png`, file, { access: "public" });

  await kv.hset(id, { image: url });

  return NextResponse.json({ ok: true, id, url });
}
