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
	})
	.sort((a, b) => {
		if (a.starred && !b.starred) return -1;
	});
module.exports = { projects };
