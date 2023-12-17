import Ticket from "@/app/{models}/Ticket";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: any) {
  try {
    const { id } = params;
    const foundTicket = await Ticket.findOne({ _id: id });

    return NextResponse.json({ foundTicket });
  } catch (error) {
    console.log(error);
  }
}
export async function PUT(req: any, { params }: any) {
  try {
    const { id } = params;

    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req: any, { params }: any) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ msg: "Tickete Deleted!" });
  } catch (error) {
    return NextResponse.json({ msg: "something went wrong!" });
  }
}
