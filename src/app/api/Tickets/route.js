import { NextResponse } from "next/server";
import Ticket from "../../{models}/Ticket";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json({ msg: "Ticket created!" });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets });
  } catch (error) {
    return NextResponse.json({ msg: error });
  }
};
