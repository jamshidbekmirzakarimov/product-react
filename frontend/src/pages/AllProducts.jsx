import React from 'react'

const AllProducts = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchingProducts = async () => {
			const res = await fetch('http://localhost:4334/products/')
			const data = await res.json()
			setProducts(data)
		}
		fetchingProducts()
	}, [])

	const deletedProduct = async id => {
		await fetch(`http://localhost:4334/products/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		setProducts(products.filter(product => product.id !== id))
	}

	return (
		<div className='products-container'>
			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					onDelete={deletedProduct}
				/>
			))}
		</div>
	)
}

export default AllProducts
