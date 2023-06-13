import Spinner from '/images/loader.gif';

const MainLoader = () => {
	return (
		<div className='main-loader'>
			<img src={Spinner} alt='spinner' height={200} width={200} />
		</div>
	);
};

export default MainLoader;
