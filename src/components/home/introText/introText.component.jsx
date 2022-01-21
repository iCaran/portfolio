import TypeWriterEffect from 'typewriter-effect';
import './introText.styles.scss';

import { homePage } from '../../../assets/data';

const Intro = () => (
	<div id='introText'>
		<div>Hello</div>
		<div>
			I am <span className='name'>{homePage.name}</span>,
		</div>
		<div className='typewriter'>
			<span>A </span>
			<span className='designation '>
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
