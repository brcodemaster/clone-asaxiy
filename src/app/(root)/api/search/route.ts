import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query') || ''
	try {
		const response = await prisma.product.findMany({
			where: {
				OR: [
					{ brand: { contains: query } },
					{ model: { contains: query } },
					{ name: { contains: query } },
				],
			},
			take: 5,
		})

		return NextResponse.json(response)
	} catch (error) {
		console.log(error)

		return NextResponse.json({ error })
	}
}
