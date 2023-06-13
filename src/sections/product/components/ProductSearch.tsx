import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useProductContext } from 'sections/product/hooks/useProductContext';

const ProductSearchSchema = yup
	.object({
		search: yup.string(),
	})
	.required();
type FormData = yup.InferType<typeof ProductSearchSchema>;

const ProductSearch = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(ProductSearchSchema),
	});

	const { searchProductsByName } = useProductContext();

	const onSubmit = ({ search }: FormData) => {
		const value = search ?? '';
		const query = value.replace(/[0-9]/g, '');
		searchProductsByName(query);
	};

	return (
		<>
			<form className='search' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
				<input {...register('search')} type='text' placeholder='Search Products...' />
				<div className='btn-container btn-container--primary'>
					<button className='btn btn-primary' type='submit'>
						<i className='fa fa-search'></i>
					</button>
				</div>
			</form>
			<span className='text-primary'>{errors.search?.message}</span>
		</>
	);
};

export default ProductSearch;
