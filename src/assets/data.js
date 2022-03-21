// HOME PAGE

let homePage = {
	name: 'Shivam',
	designations: ['Student', 'Developer', 'Freelancer'],
	imageUrl:
		'https://raw.githubusercontent.com/ShivamBhasin2002/assets/personal-portfolio/homePage/intro.jpg'
};

let projects = [
	{
		name: 'IWF-CLI',
		repo: 'https://github.com/ShivamBhasin2002/cli-project',
		link: 'https://www.npmjs.com/package/@credenceanalytics/iwfcli',
		starred: true,
		image: 'iwfcli.png'
	},
	{
		name: 'Personal Portfolio',
		repo: 'https://github.com/ShivamBhasin2002/portfolio',
		link: 'https://shivam-bhasin.netlify.app',
		starred: true,
		image: 'personalPortfolio.png'
	},
	{
		name: 'GFS Report Management System',
		repo: 'https://github.com/ShivamBhasin2002/gfsRepManagementSystem',
		link: 'https://tranquil-oasis-13718.herokuapp.com/',
		starred: true,
		image: 'gfsReportManagementSystem.png'
	},
	{
		name: 'Beginner Personal Portfolio',
		repo: 'https://github.com/ShivamBhasin2002/personalPortfolio',
		link: 'http://shivambhasin2002.herokuapp.com/',
		image: 'olderPersonalPortfolio.png'
	},
	{
		name: 'Sorting Visualizer',
		repo: 'https://github.com/ShivamBhasin2002/sorting-visualizer',
		link: 'http://shivambhasinsortingvisualizer.netlify.app',
		starred: true,
		image: 'sorting-visualizer.png'
	},
	{
		name: 'Pokedex',
		repo: 'https://github.com/ShivamBhasin2002/pokedex',
		link: 'http://shivambhasin2002.github.io/pokedex',
		image: 'pokedex.png'
	},
	{
		name: 'Authentication Using Bycrypt',
		repo: 'https://github.com/ShivamBhasin2002/authenticationUsingBycrypt',
		image: 'loginTemplate.png'
	},
	{
		name: 'Chat Application Using Socke.io',
		repo: 'https://github.com/ShivamBhasin2002/userChatBotUsingSocket.io',
		image: 'userChatBotUsingSocket.io.png'
	},
	{
		name: 'Monsters Pokedex',
		repo: 'https://github.com/ShivamBhasin2002/MonstersPokedex',
		link: 'https://shivambhasin2002.github.io/MonstersPokedex/',
		image: 'monstersPokedex.png'
	},
	{
		name: 'Indian Campsights',
		repo: 'https://github.com/ShivamBhasin2002/IndianCampSights',
		image: 'indianCampsights.png'
	},
	{
		name: 'Thug Clothing',
		repo: 'https://github.com/ShivamBhasin2002/thugClothing',
		image: 'thugClothing.png'
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
	formSubmitUrl: 'https://formsubmit.co/bhasinshivam2002@gmail.com',
	redirectAfterFormSubmission: 'https://shivam-bhasin.netlify.app/contact',
	linkedin: 'https://www.linkedin.com/in/shivam-bhasin-465233166/',
	twitter: 'https://twitter.com/ShivamB52925821',
	github: 'https://github.com/ShivamBhasin2002',
	instagram: 'https://www.instagram.com/_.shivam.08/',
	image:
		'https://raw.githubusercontent.com/ShivamBhasin2002/assets/personal-portfolio/contactPage/gifDark.gif'
};

let aboutPage = {
	resumeLink:
		'',
	details: [
		'Hi, I am Shivam Bhasin, a B.Tech CSE student with a huge interest in technology, coding, and development.',
		'Currently, I have hands-on experience in Full Stack Web development, Video Editing, Photo Editing, Competitive Programming.',
		'Working on technologies like NodeJS, ReactJS, SQL, Python, C++, Firebase, AWS.',
		'Built a CLI application that allows all clients of Credence Analytics to automate the intialization of their product.'
	]
};

let timeline = {
	acitveSlide: 2,
	academicDetails: [
		{
			logo: 'fa-school',
			name: 'Green Fields School',
			course: 'High School, Computer Science',
			achievementName: 'Board Marks',
			achievementValue: '93.4%'
		},
		{
			logo: 'fa-graduation-cap',
			name: 'Manav Rachna International Institute Of Research And Studies',
			course: 'B.Tech CSE, Cloud Computing',
			achievementName: 'GPA',
			achievementValue: '8.59 SGPA'
		},
		{
			logo: 'fa-laptop-house',
			name: 'Crendence Analytics',
			course: 'Backend Development Intern',
			achievementName: 'Developed Cli tools using NodeJS'
		}
	],
	codechefUsername: 'shivam_bhasin',
	githubUsername: 'ShivamBhasin2002',
	leetcode: {
		questionsSolved: 62,
		acceptance: 33.6
	}
};

module.exports = { projects, homePage, contactPage, aboutPage, timeline };
