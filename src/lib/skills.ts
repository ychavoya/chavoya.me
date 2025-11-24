export type Category = 'Front End' | 'Back End' | 'DevOps';

export interface Skill {
	title: string;
	description?: string;
	icon?: string;
	categories?: Category[];
	relatedSkills?: Skill[];
}

const skills: Skill[] = [
	{
		title: 'Javascript, Typescript',
		description: 'Node.js, Angular, React, Vue, Svelte, Modules, CommonJS',
		icon: '',
		categories: ['Front End']
	},
	{
		title: 'Java',
		description: 'Spring Boot, Quarkus, Kotlin, Java EE, JSP',
		categories: ['Back End']
	},
	{
		title: 'Test Driven Development',
		description: 'Jest, JUnit, unit testing, integration testing',
		categories: ['Front End', 'Back End']
	},
	{ title: 'Containers (Docker, Kubernetes, Microservices)' },
	{ title: 'Web Services (SOAP, REST)' },
	{
		title: 'Version control',
		description: 'git, branch and tag management, repository configuration'
	},
	{ title: 'Continuous Integration and Deployment' },
	{ title: 'Vulnerability and threat management' },
	{ title: 'SQL', description: 'Postgres, MySQL, DB2' },
	{ title: 'NoSQL and Object Storage', description: 'Cloudant, MongoDB, S3' },
	{ title: 'Search Engines (Elasticsearch)' },
	{ title: 'Event Streaming (Apache Kafka)' },
	{ title: 'Feature flagging', description: 'Canary releases, A/B testing, dark deployments' },
	{ title: 'Project Management Methodologies (Agile, Kanban)' },
	{ title: 'Mentoring and Coaching' },
	{ title: 'Nginx', description: '.conf files, deployment' },
	{ title: 'Quantum Computing', description: 'IBM Qiskit' },
	{ title: 'Python', description: 'Scripting, Jupyter Notebook' },
	{ title: 'C#', description: '.NET', categories: ['Back End'] },
	{ title: 'PHP', description: 'Laravel framework, Lumen' }
];

export default skills;
