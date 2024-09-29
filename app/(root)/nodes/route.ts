// app/api/info/route.ts
import { NextResponse } from "next/server";
import { getAllNodes } from "../../../lib/actions/nodeAction"; // Adjust the import path as necessary

export async function GET() {
    try {
        const nodes = await getAllNodes();
        return NextResponse.json(nodes);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
