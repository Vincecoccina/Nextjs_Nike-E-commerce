import { NextResponse } from "next/server";
import prisma from "@/lib/connect";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const catSlug = searchParams.get("cat");
    const limitParam = searchParams.get("limit");
    const visibilityParam = searchParams.get("visibility");
    const pageParam = searchParams.get("page");

    const limit: number = 12;

    let page: number = 1;
    if (pageParam) {
      page = parseInt(pageParam, 10);
    }

    let visibilityCondition: any = {};
    if (visibilityParam) {
      const visibility = parseInt(visibilityParam, 10);
      visibilityCondition = { visibility };
    }
    // Si visibilityParam n'est pas fourni, visibilityCondition reste un objet vide

    const count = await prisma.product.count({
      where: {
        ...(catSlug && catSlug !== "null" && catSlug !== "" && { catSlug }),
        ...visibilityCondition, // Applique la condition de visibilité uniquement si elle existe
      },
    });

    // Calculer le nombre d'éléments à sauter pour la pagination
    const skip = (page - 1) * limit;

    const products = await prisma.product.findMany({
      where: {
        ...(catSlug && catSlug !== "null" && catSlug !== "" && { catSlug }),
        ...visibilityCondition, // Applique la condition de visibilité uniquement si elle existe
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: skip, 
      take: limit,
      include: {
        cat: true,
      },
    });

    return NextResponse.json({ products, count: count }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
