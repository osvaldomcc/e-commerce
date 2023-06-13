import { FC, useState } from 'react';

interface Props {
	images: string[];
	name: string;
}

const ProductImageView: FC<Props> = ({ images, name }) => {
	const [front, back] = images;
	const [opacity, setOpacity] = useState<boolean>(true);

	const handleOpacity = () => {
		if (!back) return;
		setOpacity(!opacity);
	};

	return (
		<div className='image-view'>
			<img
				src={front}
				alt={name}
				width={240}
				height={357}
				className='image-view__front'
				onMouseEnter={handleOpacity}
				onMouseLeave={handleOpacity}
				style={{ opacity: opacity ? 1 : 0 }}
			/>
			{back && <img src={back} alt={name} width={240} height={357} className='image-view__back' />}
		</div>
	);
};

export default ProductImageView;
