import React, { useState, useEffect } from 'react';

import './timeline.styles.scss';

import { timeline } from '../../../assets/data';

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
		stars: 2,
		rating: 1501,
		solved: 98
	});
	let [githubData, setGithubData] = useState({
		repos: 0,
		followers: 0
	});
	useEffect(() => {
		fetch(
			`https://competitive-programming-platform.p.rapidapi.com/codechef/${timeline.codechefUsername}`,
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
		fetch(`https://api.github.com/users/${timeline.githubUsername}`)
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
					<b>Solved:</b> <span>{timeline.leetcode.questionsSolved}</span>
					<br />
					<b>Acceptance:</b> <span>{timeline.leetcode.acceptance}</span>
					<br />
				</div>
			</div>
		</div>
	);
};

const Timeline = () => {
	let [n] = useState(timeline.academicDetails.length + 1),
		[i] = useState(timeline.acitveSlide);
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
		const listner = (e) => {
			i = e.target.getAttribute('index');
			changeSlide(e.target.getAttribute('index'));
		};
		document
			.querySelectorAll('input[type="radio"]')
			.forEach((radioBtn) => radioBtn.addEventListener('change', listner));
		return () =>
			document
				.querySelectorAll('input[type="radio"]')
				.forEach((radioBtn) => radioBtn.removeEventListener('change', listner));
	});
	useEffect(() => {
		let interval = setInterval(() => {
			i = i + 1;
			if (i === n + 1) i = 1;
			changeSlide(i);
		}, 5000);
		return () => clearInterval(interval);
	}, []);
	const getPosition = (i) => {
		if (i === timeline.acitveSlide - 1) return 'upper';
		else if (i === timeline.acitveSlide) return 'middle';
		else if (i === timeline.acitveSlide + 1) return 'lower';
		return 'd-none';
	};
	return (
		<div className='timeline-container'>
			<div className='slider'>
				{timeline.academicDetails.map((details, i) => (
					<label
						key={i}
						htmlFor={`s${i + 1}`}
						id={`slide${i + 1}`}
						className={`slide ${getPosition(i + 1)}`}
						index={i + 1}
					>
						<input type='radio' name='slider' id={`s${i + 1}`} index={i + 1} />
						<AcademicTimeline key={i} {...details} />
					</label>
				))}
				<label
					htmlFor={`s${n}`}
					id={`slide${n}`}
					className='slide d-none'
					index={n}
				>
					<input type='radio' name='slider' id={`s${n}`} index={n} />
					<CodingStats />
				</label>
			</div>
		</div>
	);
};

export default Timeline;
