import { NextResponse } from "next/server";
import prisma from "@/lib/connect";

export const GET = async () => {
    try {
        const categories = await prisma.categories.findMany()
        return NextResponse.json(categories, {status : 200})
    } catch (error) {
        return NextResponse.json({error: "Something went wrong"}, {status: 500})
    }
}