import { babies, boys, girls, home, play } from 'modules/app/application';
import { Category } from 'modules/category/domain/Category';
import { useProductContext } from 'sections/product/hooks/useProductContext';

interface CategoryItem {
	title: Category;
	stock: number;
}

const categories: CategoryItem[] = [
	{
		title: 'For Babies',
		stock: babies.length,
	},
	{
		title: 'For Boys',
		stock: boys.length,
	},
	{
		title: 'For Girls',
		stock: girls.length,
	},
	{
		title: 'For Home',
		stock: home.length,
	},
	{
		title: 'For Play',
		stock: play.length,
	},
];

const ProductCategories = () => {
	const { getProductsByCat } = useProductContext();

	const handleClick = (category: Category) => {
		getProductsByCat(category);
	};

	return (
		<div className='product-categories'>
			<h1>Categories</h1>
			<div className='product-categories__list'>
				<ul>
					{categories.map((category) => (
						<li key={category.title} onClick={() => handleClick(category.title)}>
							<span>{category.title}</span>
							<span>({category.stock})</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProductCategories;
