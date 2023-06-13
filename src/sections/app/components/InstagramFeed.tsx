import { LazyImage } from 'sections/app/components';

import InstaOne from '/images/instagram/insta-1.jpg';
import InstaTwo from '/images/instagram/insta-2.jpg';
import InstaThree from '/images/instagram/insta-3.jpg';
import InstaFour from '/images/instagram/insta-4.jpg';
import InstaFive from '/images/instagram/insta-5.jpg';

const images = [InstaOne, InstaTwo, InstaThree, InstaFour, InstaFive];

const InstagramFeed = () => {
	return (
		<section className='feed'>
			<div className='header-section'>
				<h1>INSTAGRAM @KIDSRUS</h1>
				<div className='instagram'>
					{images.map((image, index) => (
						<div className='instagram__image' key={index}>
							<LazyImage src={image} width={220} height={220} alt={`instagram-${index}`} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default InstagramFeed;
