import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      url: "/checkout/success",
      mock: true,
    });
  } catch (error) {
    console.error("Mock checkout error:", error);

    return NextResponse.json(
      { error: "Error creating mock checkout" },
      { status: 500 }
    );
  }
}