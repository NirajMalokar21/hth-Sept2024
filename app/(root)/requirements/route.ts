// app/api/info/route.ts
import { NextResponse } from "next/server";
import { getAllRequirements } from "../../../lib/actions/requiresAction"; // Adjust the import path as necessary

export async function GET() {
    try {
        const requirements = await getAllRequirements();
        return NextResponse.json(requirements);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
