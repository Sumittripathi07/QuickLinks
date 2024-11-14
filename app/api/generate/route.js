import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("quick-links");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shortUrl: body.shortUrl });

  if (doc) {
    return Response.json({
      message: "URL already exists!",
      success: false,
      error: true,
    });
  }

  const result = await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl,
  });
  return Response.json({
    message: "URL generated Successfully",
    success: true,
    error: false,
  });
}
