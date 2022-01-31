import TypeWriterEffect from 'typewriter-effect';

import { homePage } from '../../../assets/data';

const Intro = () => (
	<div
		id='introText'
		className='flex w-1/2 flex-col my-auto pl-10 lg:pl-28 font-ptsans  leading-snug text-secondaryColor text-[2.5rem] md:text-[3rem] lg:text-[4rem]'
	>
		<div>Hello</div>
		<div>
			I am{' '}
			<span className='px-[10px] rounded-[20px] font-merriWeather bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-additionalColor transition-all duration=[0.2s] ease-in'>
				{homePage.name}
			</span>
			,
		</div>
		<div className='flex'>
			<span>A </span>
			<span className='ml-4 md:min-w-[300px] font-robotoSlab text-additionalColor'>
				<TypeWriterEffect
					options={{
						strings: homePage.designations,
						autoStart: true,
						loop: true
					}}
				/>
			</span>
		</div>
	</div>
);

export default Intro;
