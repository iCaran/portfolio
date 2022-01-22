import React from 'react';

import './projectList.styles.scss';

import { projects } from '../../../assets/data';

const ProjectIcon = ({
	id,
	image,
	name,
	starred,
	link,
	repo,
	...otherDetails
}) => {
	return (
		<div className='project-icon'>
			<div className='project-image'>
				{image && (
					<img
						src={`https://raw.githubusercontent.com/ShivamBhasin2002/assets/personal-portfolio/projectImages/${image}`}
						alt={name + ' image'}
					/>
				)}
			</div>
			<div className='click-me'>Click Me</div>
			<div className='project-details'>
				{starred && <i className='fas fa-star' />}
				<h6>{name}</h6>
				{repo && (
					<a href={repo} target='_blank' rel='noreferrer'>
						<i className='fab fa-github' />
					</a>
				)}
				{link && (
					<a href={link} target='_blank' rel='noreferrer'>
						<i className='fas fa-link' />
					</a>
				)}
			</div>
		</div>
	);
};

const ProjectList = () => {
	return (
		<>
			<div className='projects'>
				<h1 className='heading'>Projects</h1>
				<div className='list'>
					{projects.map((project, i) => (
						<ProjectIcon key={i} {...project} />
					))}
				</div>
			</div>
		</>
	);
};

export default ProjectList;
