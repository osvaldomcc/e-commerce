import { FC } from 'react';
import ReactImageMagnify from 'react-image-magnify';

interface Props {
	width: number;
	height: number;
	name?: string;
	image: string;
}

const Gallery: FC<Props> = ({ image, name = 'magnify', width, height }) => {
	return (
		<ReactImageMagnify
			{...{
				style: { cursor: 'pointer', zIndex: 10 },
				lensStyle: { display: 'none' },
				smallImage: {
					alt: name,
					isFluidWidth: false,
					src: image,
					width: width / 1.6,
					height: height / 1.6,
				},
				largeImage: {
					src: image,
					width,
					height,
				},
			}}
		/>
	);
};

export default Gallery;
