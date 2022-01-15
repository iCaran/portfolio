import React, { useEffect } from 'react';

import './timeline.styles.scss';

const Timeline = () => {
	let n = 5;
	const changeSlide = (i) => {
		i = parseInt(i);
		let t = document.querySelector(`#slide${i}`);
		if (t.classList.contains('upper')) {
			let t1 = document.querySelector(`#slide${i + 2 > n ? i + 2 - n : i + 2}`);
			t1.classList.remove('lower');
			setTimeout(() => t1.classList.add('d-none'), 200);
			let t2 = document.querySelector(`#slide${i + 1 > n ? i + 1 - n : i + 1}`);
			t2.classList.remove('middle');
			t2.classList.add('lower');
			let t3 = document.querySelector(`#slide${i}`);
			t3.classList.remove('upper');
			t3.classList.add('middle');
			let t4 = document.querySelector(`#slide${i - 1 > 0 ? i - 1 : i - 1 + n}`);
			setTimeout(() => t4.classList.remove('d-none'), 187);
			setTimeout(() => t4.classList.add('upper'), 190);
		} else if (t.classList.contains('lower')) {
			let t1 = document.querySelector(`#slide${i - 2 > 0 ? i - 2 : i - 2 + n}`);
			t1.classList.remove('upper');
			setTimeout(() => t1.classList.add('d-none'), 200);
			let t2 = document.querySelector(`#slide${i - 1 > 0 ? i - 1 : i - 1 + n}`);
			t2.classList.remove('middle');
			t2.classList.add('upper');
			let t3 = document.querySelector(`#slide${i}`);
			t3.classList.remove('lower');
			t3.classList.add('middle');
			let t4 = document.querySelector(`#slide${i + 1 > n ? i + 1 - n : i + 1}`);
			setTimeout(() => t4.classList.remove('d-none'), 187);
			setTimeout(() => t4.classList.add('lower'), 190);
		}
	};
	useEffect(() => {
		const listner = (e) => changeSlide(e.target.getAttribute('index'));
		document
			.querySelectorAll('input[type="radio"]')
			.forEach((radioBtn) => radioBtn.addEventListener('change', listner));
		return () =>
			document
				.querySelectorAll('input[type="radio"]')
				.forEach((radioBtn) => radioBtn.removeEventListener('change', listner));
	});
	return (
		<div className='timeline-container'>
			<div className='slider'>
				<input type='radio' name='slider' id='s1' index={1} />
				<input type='radio' name='slider' id='s2' index={2} />
				<input type='radio' name='slider' id='s3' defaultChecked index={3} />
				<input type='radio' name='slider' id='s4' index={4} />
				<input type='radio' name='slider' id='s5' index={5} />
				<label htmlFor='s1' id='slide1' className='slide d-none '>
					<div>Slide 1</div>
				</label>
				<label htmlFor='s2' id='slide2' className='slide upper'>
					<div>Slide 2</div>
				</label>
				<label htmlFor='s3' id='slide3' className='slide middle'>
					<div>Slide 3</div>
				</label>
				<label htmlFor='s4' id='slide4' className='slide lower'>
					<div>Slide 4</div>
				</label>
				<label htmlFor='s5' id='slide5' className='slide d-none '>
					<div>Slide 5</div>
				</label>
			</div>
		</div>
	);
};

export default Timeline;
