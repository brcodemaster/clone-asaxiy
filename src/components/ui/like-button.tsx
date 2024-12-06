'use client'

import { cn } from '@/lib/utils'
import { Heart } from 'lucide-react'
import { useState } from 'react'

interface Props {
	className?: string
	id: number
}

export const LikeButton: React.FC<Props> = ({ className }) => {
	const [isclicked, setIsClicked] = useState(false)

	const fillHeart = () => {
		setIsClicked(!isclicked)
	}

	return (
		<div className={cn('absolute top-14 right-5', className)} onClick={fillHeart}>
			{!isclicked ? <Heart fill='#fff' size={28} /> : <Heart fill='red' stroke='red' size={28} />}
		</div>
	)
}
