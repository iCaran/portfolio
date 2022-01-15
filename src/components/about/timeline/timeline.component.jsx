import React, { useState, useEffect } from 'react';

import './timeline.styles.scss';

const AcademicTimeline = ({ logo, ...details }) => {
	return (
		<div className='academic-timeline'>
			<i className={`fas ${logo}`}></i>
			<div className='academic-details'>
				<h3>{details.name}</h3>
				<h6 className='text-muted'>{details.course}</h6>
				{details.achievementValue ? (
					<h2>
						{details.achievementName}:{' '}
						<span className='text-success'>{details.achievementValue}</span>
					</h2>
				) : (
					<h2>{details.achievementName}</h2>
				)}
			</div>
		</div>
	);
};

const CodingStats = () => {
	let [codechefData, setCodechefData] = useState({
		stars: 0,
		rating: 0,
		solved: 0
	});
	let [githubData, setGithubData] = useState({
		repos: 0,
		followers: 0
	});
	useEffect(() => {
		fetch(
			'https://competitive-programming-platform.p.rapidapi.com/codechef/shivam_bhasin',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'competitive-programming-platform.p.rapidapi.com',
					'x-rapidapi-key': '0f448c51d2msh5303153a42379f2p1344ccjsncf88884fd3ce'
				}
			}
		)
			.then((res) => res.json())
			.then((res) =>
				setCodechefData({
					stars: res.stars[0],
					rating: res.highest_rating,
					solved: res.fully_solved.count + res.partially_solved.count
				})
			)
			.catch((err) => {
				console.error(err);
			});
		fetch('https://api.github.com/users/ShivamBhasin2002')
			.then((res) => res.json())
			.then((res) =>
				setGithubData({ repos: res.public_repos, followers: res.followers })
			);
	}, []);
	const getColor = (i) => {
		switch (parseInt(i)) {
			case 1:
				return '#666666';
			case 2:
				return '#1E7D22';
			case 3:
				return '#3366CC';
			case 4:
				return '#684273';
			case 5:
				return '#FFBF00';
			case 6:
				return '#FF7F00';
			case 7:
				return '#D0011B';
			default:
				return '#000000';
		}
	};
	return (
		<div className='codingStats'>
			<div className='platform'>
				<i className='fas fa-code'></i>
				<h6>
					<b>CODECHEF</b>
				</h6>
				<div className='stats'>
					<b>Stars:</b>{' '}
					<span style={{ color: getColor(codechefData.stars) }}>
						{codechefData.stars}{' '}
						<i
							className='fas fa-star'
							style={{ color: getColor(codechefData.stars) }}
						></i>{' '}
					</span>
					<br />
					<b>Rating:</b>{' '}
					<span style={{ color: getColor(codechefData.stars) }}>
						{codechefData.rating}
					</span>
					<br />
					<b>Solved:</b> <span>{codechefData.solved}</span>
				</div>
			</div>
			<div className='platform'>
				<i className='fab fa-github'></i>
				<h6>
					<b>GITHUB</b>
				</h6>
				<div className='stats'>
					<b>Repositories:</b> <span>{githubData.repos}</span>
					<br />
					<b>Followers:</b> <span>{githubData.followers}</span>
					<br />
				</div>
			</div>
			<div className='platform'>
				<i className='fab'>
					<i className='fab fa-cuttlefish'></i>
					<i className='fas fa-plus'></i>
					<i className='fas fa-plus'></i>
				</i>
				<h6>
					<b>LEETCODE</b>
				</h6>
				<div className='stats'>
					<b>Solved:</b> <span>62</span>
					<br />
					<b>Acceptance:</b> <span>33.6</span>
					<br />
				</div>
			</div>
		</div>
	);
};

const Timeline = () => {
	let n = 4;
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
				<input type='radio' name='slider' id='s3' index={3} />
				<input type='radio' name='slider' id='s4' index={4} />
				<input type='radio' name='slider' id='s5' index={5} />
				<label htmlFor='s1' id='slide1' className='slide upper'>
					<AcademicTimeline
						logo='fa-school'
						name='Green Fields School'
						course='High School, Computer Science'
						achievementName='Board Marks'
						achievementValue='93.4%'
					/>
				</label>
				<label htmlFor='s2' id='slide2' className='slide middle'>
					<AcademicTimeline
						logo='fa-graduation-cap'
						name='Manav Rachna International Institute Of Research And Studies'
						course='B.Tech CSE, Cloud Computing'
						achievementName='GPA'
						achievementValue='8.59 SGPA'
					/>
				</label>
				<label htmlFor='s3' id='slide3' className='slide lower'>
					<AcademicTimeline
						logo='fa-laptop-house'
						name='Crendence Analytics'
						course='Backend Development Intern'
						achievementName='Developed Cli tools using NodeJS'
					/>
				</label>
				<label htmlFor='s4' id='slide4' className='slide d-none'>
					<CodingStats />
				</label>
			</div>
		</div>
	);
};

export default Timeline;
