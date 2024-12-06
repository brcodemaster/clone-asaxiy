import { cn } from '@/lib/utils'

interface Props {
	type: 'new' | 'discount' | 'installment'
	installment?: number
}

export const ProductRenderLabel: React.FC<Props> = ({ type, installment }) => {
	const renderLabel = (type: 'new' | 'discount' | 'installment', installment?: number) => {
		switch (type) {
			case 'new':
				return (
					<div className='bg-red-500 uppercase text-[13px] font-medium text-white rounded-sm absolute top-2 left-2 px-2 py-1 flex justify-center items-center'>
						Новинка
					</div>
				)
			case 'discount':
				return (
					<div className='bg-yellow-400 uppercase text-[13px] font-medium text-white rounded-sm absolute top-2 left-2 px-2 py-1 flex justify-center items-center'>
						Супер цена
					</div>
				)
			case 'installment':
				return (
					<div
						className={cn(
							'uppercase text-[16px] font-medium text-white absolute top-3 -right-[35px] px-2 flex justify-center items-center w-[120px] rotate-45',
							installment === 3 && 'bg-[#9653FF]',
							installment === 6 && 'bg-green-700'
						)}
					>
						0-0-{installment}
					</div>
				)
			default:
				return null
		}
	}

	return renderLabel(type, installment)
}
