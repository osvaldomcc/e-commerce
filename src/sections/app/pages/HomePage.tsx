import { Promotion, MainCategories, InstagramFeed } from 'sections/app/components';
import { ProductSection } from 'sections/product/components';

const HomePage = () => {
	return (
		<div className='wrapper'>
			<Promotion />
			<MainCategories />
			<ProductSection />
			<InstagramFeed />
		</div>
	);
};

export default HomePage;
