import { handleSignupRequest } from "@/lib/newsletter/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleSignupRequest(request);
}
