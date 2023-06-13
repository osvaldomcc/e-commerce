import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface IProps {
	width: number;
	height: number;
	alt: string;
	src: string;
	className?: string;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

const LazyImage = ({ width, height, alt, src, className, onMouseEnter, onMouseLeave }: IProps) => {
	return (
		<figure>
			<LazyLoadImage
				src={src}
				width={width}
				height={height}
				alt={alt}
				effect='blur'
				className={className}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			/>
		</figure>
	);
};

export default LazyImage;
