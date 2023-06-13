import { FC } from 'react';

import type { ComponentProps, Variant } from 'sections/app/interfaces';

interface Props extends ComponentProps {
	variant?: Variant;
}

const Promotion: FC<Props> = ({ children, variant = 'white' }) => {
	return <div className={`banner banner-${variant}`}>{children}</div>;
};

export default Promotion;
