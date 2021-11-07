import TypeWriterEffect from 'typewriter-effect';
import './introText.styles.scss';

const Intro = () => (
	<div id='introText'>
		<div>Hello</div>
		<div>
			I am <span className='name'>Shivam</span>,
		</div>
		<div className='typewriter'>
			<span>A </span>
			<span className='designation '>
				<TypeWriterEffect
					options={{
						strings: ['Student', 'Developer', 'Freelancer'],
						autoStart: true,
						loop: true
					}}
				/>
			</span>
		</div>
	</div>
);

export default Intro;
