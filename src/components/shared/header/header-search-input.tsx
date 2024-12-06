'use client'

import { Button, Input } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Api } from '@/services/api-client'
import { Product } from '@prisma/client'
import { useClickAway, useDebounce } from '@uidotdev/usehooks'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

export const HeaderSearchInput: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [products, setProducts] = useState<Product[]>([])
	const [focused, setFocused] = useState(false)
	const debouncedSearchQuery = useDebounce(searchQuery, 300)

	const ref = useClickAway(() => {
		setFocused(false)
	})

	const search = useCallback(() => {
		if (debouncedSearchQuery) {
			Api.products.search(debouncedSearchQuery).then(items => setProducts(items))
		}
	}, [debouncedSearchQuery])

	useEffect(() => {
		search()
	}, [debouncedSearchQuery, search])

	const handleClick = () => {
		setFocused(false)
		setProducts([])
		setSearchQuery('')
	}

	return (
		<div
			className='flex flex-col items-center justify-center flex-1 w-[418px] relative'
			onClick={() => setFocused(true)}
			ref={ref as any}
		>
			<div className='flex w-full'>
				<Input
					className='focus-visible:ring-0 border-2 border-primary rounded-r-none border-r-0 placeholder:text-gray-400/50 text-primary'
					placeholder='Поиск...'
					name='Search'
					onFocus={() => setFocused(true)}
					onChange={e => setSearchQuery(e.target.value)}
					value={searchQuery}
					autoComplete='off'
					onKeyDown={e => {
						if (e.key === 'enter') {
							search()
						}
					}}
				/>
				<Button className='rounded-l-none text-[16px] font-normal flex items-center gap-1'>
					<Search />
					Искать
				</Button>
			</div>
			{products.length > 0 && (
				<div
					className={cn(
						'bg-white rounded-md p-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-20 absolute w-full',
						focused && 'visible opacity-100 top-[42px]'
					)}
				>
					{products.map(item => (
						<Link
							onClick={handleClick}
							key={item.id}
							className='flex items-center gap-4 hover:bg-primary/20 p-3 rounded-md border-b border-b-gray-400/20'
							href={'/smartphones/' + item.id}
						>
							<div className='w-8 h-8'>
								<img
									className='w-full h-full object-contain'
									src={item.imageUrl}
									alt={item.model}
								/>
							</div>
							<div className='flex justify-between items-center gap-1 w-full'>
								<div className='truncated font-semibold max-w-[230px]'>
									{item.brand} {item.model} {item.memory}GB
								</div>
								<div className='whitespace-nowrap'>{item.price} сум</div>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	)
}
