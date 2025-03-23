import { About, Banner, Footer } from '@/components/shared'
import { ProductCard } from '@/components/ui/cards'

export default function Home() {
	return (
		<>
			<ProductCard />
			<About />
			<Banner />
			<Footer />
		</>
	)
}
