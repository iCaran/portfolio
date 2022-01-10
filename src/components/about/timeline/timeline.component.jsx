import React from 'react';

import './timeline.styles.scss';

const Timeline = () => (
	<div className='timeline-container'>
		<div className='slider'>
			<input type='radio' name='slider' id='s1' defaultChecked />
			<input type='radio' name='slider' id='s2' />
			<input type='radio' name='slider' id='s3' />
			<input type='radio' name='slider' id='s4' />
			<input type='radio' name='slider' id='s5' />
			<label htmlFor='s1' id='slide1'>
				<div>Slide 1</div>
			</label>
			<label htmlFor='s2' id='slide2'>
				<div>Slide 2</div>
			</label>
			<label htmlFor='s3' id='slide3'>
				<div>Slide 3</div>
			</label>
			<label htmlFor='s4' id='slide4'>
				<div>Slide 4</div>
			</label>
			<label htmlFor='s5' id='slide5'>
				<div>Slide 5</div>
			</label>
		</div>
	</div>
);

export default Timeline;
