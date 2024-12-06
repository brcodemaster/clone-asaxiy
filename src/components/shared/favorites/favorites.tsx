import { Path, Title } from '@/components/ui'

export const FavoritesEmpty: React.FC = () => {
	return (
		<>
			<Path />
			<div className='w-full flex flex-col justify-center items-center gap-2 min-h-[300px]'>
				<img
					src='https://asaxiy.uz/custom-assets/images/heart-bubble.svg'
					alt='Favorites is empty'
				/>
				<div className='text-center'>
					<Title title='Нет любимых продуктов' size='lg' className='py-0' />
					<span>
						<p className='flex gap-1'>
							Добавить с символом <img src='./heart-full.svg' alt='Heart' /> на продукте
						</p>
					</span>
				</div>
			</div>
		</>
	)
}
