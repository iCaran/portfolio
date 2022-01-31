import { homePage } from '../../../assets/data';

const Photo = () => (
	<div className='flex-grow-1 flex flex-col justify-center'>
		<img
			src={homePage.imageUrl}
			className='rounded-[500px] ml-auto mr-auto w-[90%] md:w-auto lg:rounded-none lg:mr-0 lg:h-full'
			alt='Not found'
		/>
	</div>
);

export default Photo;
