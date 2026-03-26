import React from 'react'

const AllProducts = () => {
	const [products, setProducts] = useState([])
	const [isloading, setIsLoading] = useState(true)
	useEffect(() => {
		const fetchingProducts = async () => {
			const res = await fetch('http://localhost:4334/products/')
			const data = await res.json()
			setProducts(data)
			setIsLoading(false)
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
		<>
			{isloading ? (
				<div className="min-h-screen flex items-center justify-center">
					<div className="loader"></div>
				</div>
			) : (
				<div className="products-container">
					{products.map(product => (
						<ProductCard key={product.id} product={product} onDelete={deletedProduct} />

					))}
				</div>
			)}
		</>
	)
}

export default AllProducts
