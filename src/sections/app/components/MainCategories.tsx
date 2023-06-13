import Baby from '/images/categories/baby.png';
import Boy from '/images/categories/boy.png';
import Girl from '/images/categories/girl.png';
import Toys from '/images/categories/toys.png';

import { LazyImage } from 'sections/app/components';
import { Category } from 'modules/category/domain/Category';
import { useProductContext } from 'sections/product/hooks/useProductContext';

interface CategoryMenu {
	title: string;
	image: string;
	category: Category;
}

const categories: CategoryMenu[] = [
	{
		title: 'Baby and Toddler',
		image: Baby,
		category: 'For Babies',
	},
	{
		title: 'For Girls',
		image: Girl,
		category: 'For Girls',
	},
	{
		title: 'For Boys',
		image: Boy,
		category: 'For Boys',
	},
	{
		title: 'Home & Toys',
		image: Toys,
		category: 'For Play',
	},
];

const MainCategories = () => {
	const { getProductsByCat } = useProductContext();

	const handleClick = (category: Category) => {
		getProductsByCat(category);
	};

	return (
		<section className='categories'>
			{categories.map((item) => (
				<a className='categories__link' key={item.title} onClick={() => handleClick(item.category)}>
					<LazyImage src={item.image} alt={item.title} height={180} width={150} />
					<h2>{item.title}</h2>
				</a>
			))}
		</section>
	);
};

export default MainCategories;
