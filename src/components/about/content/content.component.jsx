import React from 'react';

import './content.styles.scss';

import { aboutPage } from '../../../assets/data';

const Content = () => (
	<div className='content-wrapper'>
		<ul className='content'>
			{aboutPage.details.map((li) => (
				<li>{li}</li>
			))}
			<a
				href={aboutPage.resumeLink}
				className='btn'
				target={'_blank'}
				rel='noreferrer'
			>
				My Resume
			</a>
		</ul>
	</div>
);

export default Content;
