// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2024-06-20",
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const session = await stripe.checkout.sessions.create({
//       mode: "payment",
//       line_items: body.items.map((item: any) => ({
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: item.name,
//           },
//           unit_amount: item.price * 100,
//         },
//         quantity: item.quantity,
//       })),
//       success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success`,
//       cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/cancel`,
//     });

//     return NextResponse.json({ url: session.url });
//   } catch (error) {
//     console.error("Stripe checkout error:", error);
//     return NextResponse.json(
//       { error: "Error creating checkout session" },
//       { status: 500 }
//     );
//   }
// }