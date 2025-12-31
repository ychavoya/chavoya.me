export interface Experience {
	company: string;
	title: string;
	period: string;
	description: string[];
}

const experience: Experience[] = [
	{
		company: 'IBM',
		title: 'Software Developer',
		period: '2021 - 2025',
		description: [
			'Developed and maintained high-availability mission-critical bid management, accounting and post-sales systems with a microservices architecture, handling information from relational and non-relational databases, search engines and event streams, with the objective of reducing cycle time of quote-to-cash operations.',
			'Developed full stack services using reactive asynchronous technology with automated testing and deployment, ensuring high code quality and maintainability.',
			'Collaborated with global development teams in cross-application integrations, leading to an interconnected web of applications. Frequently received stellar feedback from my peers and leadership.',
			'Maintained and contributed to inner-source dependencies and strategic open-source projects, ultimately being rewarded with a Significant Contributor Award.',
			'Led the development of innovative improvements to the developer experience of the organization, reducing code review and environment setup times.',
			'Leveraged the internal learning platforms to achieve at least 120 hours of training and two digital credentials per year.',
			'Participated in several company guilds such as the technical eminence, coaching and quantum computing guilds.',
			'Provided technical and career mentoring to junior developers. Volunteered as an active coach and mentor on the internal career progression tool.'
		]
	},
	{
		company: 'Freelance',
		title: 'Full Stack Software Developer',
		period: '2018 - 2021',
		description: [
			'Developed and implemented several full-stack web applications for international clients, including informative, administrative, marketing, financial and shopping systems using a client-server architecture and modern technology stacks.',
			'Gave workshops about non-relational databases and data analysis tools at Universidad de Guadalajara.',
			'Participated in competitions and challenges organized by Bosch, Google, Mostratec Liberato and REDIJ.'
		]
	}
];

export default experience;
