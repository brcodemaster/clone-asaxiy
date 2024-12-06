'use client'

import { Button, Input, Title } from '@/components/ui'
import { FooterBanner } from '../footer/footer-banner'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export const Auth: React.FC = () => {
	const [showAuth, setShowAuth] = useState(true)

	return (
		<div
			className={cn(
				'absolute top-0 left-0 right-0 bottom-0 bg-black/50 opacity-0 invisible flex justify-center items-center',
				showAuth && 'opacity-100 visible z-20 cursor-pointer'
			)}
			onClick={() => setShowAuth(!showAuth)}
		>
			<div
				className={cn('bg-white rounded-md flex relative cursor-default')}
				onClick={e => e.stopPropagation()}
			>
				<div className='p-10 w-[400px] flex flex-col justify-center items-center'>
					<Title
						title='Вход или создать личный кабинет'
						className='w-[320px] text-[24px] text-center font-bold'
					/>
					<form className='w-full flex flex-col gap-4'>
						<label className='flex flex-col gap-2 text-gray-400'>
							Номер телефона
							<Input placeholder='+998 (__) ___ - __ - __' name='phoneAuth' />
						</label>
						<Button>Получить код активации</Button>
					</form>
					<span className='mt-4 relative before:absolute before:top-1/2 before:-left-28 before:contents-[""] before:w-[100px] before:h-[1px] before:bg-gray-400 after:absolute after:top-1/2 after:-right-28 after:contents-[""] after:w-[100px] after:h-[1px] after:bg-gray-400'>
						или
					</span>
					<div className='pt-4 flex gap-4 w-full'>
						<Button variant={'outline'} className='w-full'>
							<img src='/google-icon.svg' alt='Google icon' width={23} height={23} /> Google
						</Button>
						<Button variant={'outline'} className='w-full'>
							<img src='/facebook-icon.svg' alt='Facebook icon' width={25} height={25} /> Facebook
						</Button>
					</div>
					<span
						className='w-10 h-10 border border-gray-400/20 rounded-full flex justify-center items-center bg-white absolute -top-5 -right-5 cursor-pointer'
						onClick={() => setShowAuth(!showAuth)}
					>
						<X />
					</span>
				</div>
				<div className='bg-[#e8e8f1] p-10 rounded-r-md flex flex-col gap-3 items-start'>
					<FooterBanner className='p-3' />
				</div>
			</div>
		</div>
	)
}
