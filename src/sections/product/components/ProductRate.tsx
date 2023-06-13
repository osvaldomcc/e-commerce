import { FC } from 'react';

interface Props {
	rate: number;
}

const ProductRate: FC<Props> = ({ rate }) => {
	return (
		<span>
			{Array.from({ length: rate }, (_, index) => (
				<i className='fa fa-star text-primary' key={index}></i>
			))}
			{Array.from({ length: 5 - rate }, (_, index) => (
				<i className='fa fa-star text-secondary-light' key={index}></i>
			))}
		</span>
	);
};

export default ProductRate;
