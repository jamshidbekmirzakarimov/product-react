import { Link } from 'react-router-dom'
import './card.css'

function ProductCard({ product, onDelete }) {
	const { title, price, description, image } = product
	return (
		<div className='card'>
		<Link to={`/products/${product.id}`}>
         
			<img src={image} alt={title} />
			<h1 className='title'>{title}</h1>
			<p className='price'>${price}</p>
			<p className='desc'>{description}</p>
			<button className='delete-btn' onClick={() => onDelete(product.id)}>
				x
			</button>

            </Link>
		</div>
	)
}

export default ProductCard
