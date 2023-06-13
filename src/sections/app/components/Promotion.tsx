import { LazyImage } from 'sections/app/components';
import JumpSuits from '/images/promotion/boy-sleeped.jpg';
import Girls from '/images/promotion/girls-power.jpg';

const Promotion = () => {
	return (
		<section className='promotion'>
			<div className='promotion__left'>
				<LazyImage alt='jumpsuits' src={JumpSuits} height={518} width={768} />
				<div className='promotion__left--content'>
					<h1>JUMPSUITS</h1>
					<p>Comfortable clothes for your little babies</p>
					<div className='btn-container'>
						<button className='btn btn-secondary'>
							<span>DISCOVER</span>
						</button>
					</div>
				</div>
			</div>
			<div className='promotion__right'>
				<LazyImage alt='girls-power' src={Girls} height={438} width={340} />
				<div className='promotion__right--content'>
					<h1>GIRL POWER</h1>
					<p>For a colorful summer</p>
				</div>
			</div>
		</section>
	);
};

export default Promotion;
