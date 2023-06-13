import { Notify } from 'sections/app/services';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const ProductSearchSchema = yup
	.object({
		email: yup.string().email().required(),
	})
	.required();
type FormData = yup.InferType<typeof ProductSearchSchema>;

const NewsLetter = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(ProductSearchSchema),
	});

	const onSubmit = () => {
		Notify.success('Thanks for subscribing');
		reset();
	};

	return (
		<div className='newsletter'>
			<h1>Join Our NewsLetter</h1>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
				<input {...register('email')} type='text' placeholder='Your Email Address *' />
				<span className='newsletter-error'>{errors.email?.message}</span>
				<div className='btn-container'>
					<button className='btn btn-primary' type='submit'>
						<span>Subscribe</span>
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewsLetter;
