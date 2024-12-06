import { cn } from '@/lib/utils'
import { prisma } from '@/prisma/prisma-client'
import Link from 'next/link'

export const HeaderCategories: React.FC = async () => {
	try {
		const categories = await prisma.category.findMany()

		return (
			<div className='w-full font-medium flex justify-between items-center'>
				{categories.map((item, index) => (
					<Link key={index} href={item.link} className={cn('duration-200 hover:text-primary')}>
						{item.text}
					</Link>
				))}
			</div>
		)
	} catch (error) {
		console.log('Error in Categories: ' + error)
	} finally {
		await prisma.$disconnect()
	}
}
