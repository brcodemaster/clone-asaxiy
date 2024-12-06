import { Path } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { Title } from '@/components/ui/title'

export const OrderStatusAuth: React.FC = () => {
	return (
		<Container>
			<Path />
			<div className='bg-white rounded-md w-full flex justify-between items-center gap-5 p-5 py-24 px-28 shadow-2xl shadow-gray-500/20'>
				<div className='flex flex-col justify-center items-center gap-5'>
					<Title title='Статус заказа' size='xl' />
					<div className='w-400px text-center'>
						<p>
							Чтобы увидеть ваш заказ, пожалуйста, заполните необходимые поля. Номер заказа был
							отправлен на ваш номер в виде смс-сообщения
						</p>
					</div>
					<Input placeholder='Номер заказа' className='placeholder:uppercase' name='order' />
					<div className='flex flex-col gap-2 w-full'>
						<label className='w-full text' htmlFor='phoneNumber'>
							Номер телефона, при заказе <span className='text-red-600'>*</span>
						</label>
						<Input
							placeholder='+998 97 788 33 55'
							className='placeholder:uppercase'
							id='phoneNumber'
						/>
					</div>
					<Button className='w-[400px]'>Просмотр</Button>
				</div>
				<div className='flex-shrink-0'>
					<img
						src='https://asaxiy.uz/custom-assets/images/track-icons/tracking.svg'
						alt='No-order'
					/>
				</div>
			</div>
		</Container>
	)
}
