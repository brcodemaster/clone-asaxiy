'use client'

import { cn } from '@/lib/utils'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
	title: string
	contents: {
		beforeText?: string
		title?: string
		link: {
			text: string
			href: string
		}
		description: string
	}[]
}

export const AboutUsDetails: React.FC<Props> = ({ title, contents }) => {
	const [show, setShow] = useState(false)

	return (
		<div className='p-4  border-b border-b-gray-400/40 select-none'>
			<div
				className='flex items-center justify-between cursor-pointer'
				onClick={() => {
					setShow(!show)
				}}
			>
				<h3 className='font-semibold text-lg'>{title}</h3>
				<ArrowUp size={25} className={cn('duration-300', show && '-rotate-180')} />
			</div>
			<div
				className={cn(
					'duration-500 overflow-hidden',
					show ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
				)}
			>
				{contents.map((content, index) => (
					<div key={index} className={cn(content.beforeText && 'py-4')}>
						{content.beforeText}
						{!content.beforeText && '•'}{' '}
						<Link href={content.link.href} className='text-primary font-semibold'>
							{content.link.text}
						</Link>{' '}
						{!content.beforeText && '-'} {content.description}
					</div>
				))}
			</div>
		</div>
	)
}
