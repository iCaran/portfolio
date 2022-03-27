// HOME PAGE

let homePage = {
	name: 'Karan',
	designations: ['Student', 'Developer',''],
	imageUrl:
		'https://raw.githubusercontent.com/iCaran/assets/personal-portfolio/me2.jpg'
};

let projects = [
	{
		name: 'TASKS-CLI',
		repo: 'https://github.com/iCaran/cli_tasks',
		link: 'https://github.com/iCaran/cli_tasks/releases/tag/v0.1',
		starred: true,
		image: 'tcli.png'
	},
	{
		name: 'Personal Portfolio',
		repo: 'https://github.com/iCaran/portfolio',
		link: 'https://karan-pratap-shaw.netlify.app/',
		starred: true,
		image: 'personalPortfolio2.png'
	},
	{
		name: 'Basic Banking System',
		repo: 'https://github.com/iCaran/myBank',
		link: 'https://unanimated-prefix.000webhostapp.com/',
		starred: true,
		image: 'tsfbank.png'
	},
	{
		name: 'Simple Covid-19 FAQ website',
		repo: 'https://github.com/iCaran/iCorona',
		link: 'https://icaran.github.io/iCorona/',
		image: 'icorona.png'
	},
	{
		name: 'Beginner Portfolio',
		repo: 'https://github.com/iCaran/myself',
		link: 'https://icaran.github.io/myself/',
		starred: true,
		image: 'olderPersonalPortfolio.png'
	},
	{
		name: 'Selenium Script for testing TSF website',
		repo: 'https://github.com/iCaran/TSFselenium',
		image: 'tsfSelenium.png'
	},
	{
		name: 'Hospital cum Blog Website Template',
		repo: 'https://github.com/iCaran/iHealth',
		link: 'https://icaran.github.io/iHealth/',
		image: 'iHealth.png'
	},
	{
		name: 'Poser on Hyper-Automation',
		repo: 'https://github.com/iCaran/HyperAutomation',
		image: 'hyperauto.png'
	}
]
	.sort()
	.sort((a, b) => {
		if (a.link && !b.link) return -1;
		return 0;
	})
	.sort((a, b) => {
		if (a.starred && !b.starred) return -1;
		return 0;
	});

let contactPage = {
	formSubmitUrl: 'https://formsubmit.co/kakoburaman@protonmail.com',
	redirectAfterFormSubmission: 'https://karan-pratap-shaw.netlify.app/contact',
	linkedin: 'https://www.linkedin.com/in/karanpratapshaw/',
	twitter: 'https://twitter.com/karanpshaw',
	github: 'https://github.com/iCaran/',
	instagram: 'https://www.instagram.com/karanpshaw/',
	image:
		'https://raw.githubusercontent.com/ShivamBhasin2002/assets/personal-portfolio/contactPage/gifDark.gif'
};

let aboutPage = {
	resumeLink:
		'https://drive.google.com/file/d/1UVNO3ke8BJ_8ewfrJr3O56mtwIbv9M6r/view?usp=sharing',
	details: [
		'Hi, I am Karan Pratap Shaw, a B.Tech I.T. student with a huge interest in technology, coding, and development.',
		'Currently, I have hands-on experience in Full Stack Web development, Graphics Designing, Android Development, Competitive Programming.',
		'Working on technologies like ReactJS, SQL, Python, C++, Java, RestAPI.'
	]
};

let timeline = {
	acitveSlide: 2,
	academicDetails: [
		{
			logo: 'fa-school',
			name: 'St. Patrick H.S. School',
			course: 'High School, Computer Science',
			achievementName: 'Board Marks',
			achievementValue: '81%'
		},
		{
			logo: 'fa-graduation-cap',
			name: 'Dr. B.C. Roy Engineering College',
			course: 'B.Tech I.T.',
			achievementName: 'GPA',
			achievementValue: '9.54 SGPA'
		},
		{
			logo: 'fa-laptop-house',
			name: 'The Sparks Foundation',
			course: 'Web Development Intern',
			achievementName: 'Developed frontend sites using HTML CSS JS with SQL for DB'
		}
	],
	codechefUsername: 't2p_1q0',
	githubUsername: 'iCaran',
	leetcode: {
		questionsSolved: 6,
		acceptance: 22.2
	}
};

module.exports = { projects, homePage, contactPage, aboutPage, timeline };
