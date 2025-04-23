export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL!}/featured-product/complete`);
  const data = await res.json();

  return Response.json({ data });
}
