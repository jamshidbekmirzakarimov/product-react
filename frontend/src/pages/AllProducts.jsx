import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import './page.css'

const AllProducts = () => {
	const allproducts = [
		{
			id: 1,
			title: 'Raqamli Kamera',
			price: '299.90',
			description: 'Oddiy raqamli kamera mahsulot rasmi.',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
		},
		{
			id: 2,
			title: 'Simli Quloqchin',
			price: '49.99',
			description: 'Yuqori sifatli ovozli simli quloqchin.',
			image:
				'https://assets.asaxiy.uz/product/items/desktop/22ce266235e5a3726a31c98bbcd42cd42025121101063895805Z5o2hKyP0J.jpg',
		},
		{
			id: 3,
			title: 'Aqlli Soat',
			price: '199.50',
			description: 'Fitnes va salomatlikni kuzatuvchi aqlli soat.',
			image:
				'https://cdn.asaxiy.uz/asaxiy-content/product/items/mobile/2c38a29b40f59a4d717bc6d715fe38002025042116482470705InUhCogZkE.webp',
		},
		{
			id: 4,
			title: 'Noutbuk Sumkasi',
			price: '35.00',
			description: '15.6 dyuymli noutbuklar uchun qulay sumka.',
			image:
				'https://assets.asaxiy.uz/product/items/mobile/88618bcae4c950cd57346baf6c7c7bd22026011409354325163sO2ENNaaDO.jpg',
		},
		{
			id: 5,
			title: 'USB Flash Drive',
			price: '12.99',
			description: '32GB xotiraga ega tezkor USB fleshka.',
			image:
				'https://cdn.asaxiy.uz/asaxiy-content/product/items/mobile/c4ca4238a0b923820dcc509a6f75849b2024010414322076964tc9leaUY1F.jpg.webp',
		},
		{
			id: 6,
			title: 'Simsiz Klaviatura',
			price: '79.90',
			description: 'Bluetooth orqali ulanadigan qulay klaviatura.',
			image:
				'https://cdn.asaxiy.uz/asaxiy-content/product/items/mobile/c81e728d9d4c2f636f067f89cc14862c2023021110253095028rlKcggWM3A.jpg.webp',
		},
		{
			id: 7,
			title: "O'yin Sichqonchasi",
			price: '45.00',
			description: "Yuqori aniqlikdagi sensorli o'yin sichqonchasi.",
			image:
				'https://assets.asaxiy.uz/product/items/mobile/8f14e45fceea167a5a36dedd4bea25432025121217372110333HtUX4Jk30h.jpg',
		},
		{
			id: 8,
			title: 'Power Bank',
			price: '29.99',
			description: "10000mAh sig'imli zaryadlovchi qurilma.",
			image:
				'https://assets.asaxiy.uz/product/items/mobile/cf39ca6068fd5d83ce889d152a6bf2d22025121203032595744CxmobPp4ge.webp',
		},
		{
			id: 9,
			title: "Telefon Qopqog'i",
			price: '15.50',
			description: 'Zarbalardan himoyalovchi silikon qopqoq.',
			image:
				'https://assets.asaxiy.uz/product/items/mobile/6f88bca16019175ee96b789bc9e4777f2025073112425198226lLc7fzJPw7.png',
		},
		{
			id: 10,
			title: 'HDMI Kabel',
			price: '8.99',
			description: "2 metrli 4K qo'llab-quvvatlovchi HDMI kabel.",
			image:
				'https://assets.asaxiy.uz/product/items/mobile/762abbb1949bd0a811b3b6a47b0805b02025072818100879692Xw4Jg8vrDX.png',
		},
	]

	const [products, setProducts] = useState(allproducts)

	const onDeleteProduct = id => {
		setProducts(products.filter(product => product.id !== id))
	}

	return (
		<div className='products-container'>
			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					onDelete={onDeleteProduct}
				/>
			))}
		</div>
	)
}

export default AllProducts
