import javascriptSvg from '$lib/assets/skills/javascript.svg';
import javaSvg from '$lib/assets/skills/java.svg';
import kubernetesSvg from '$lib/assets/skills/kubernetes.svg';
import dotnetSvg from '$lib/assets/skills/dotnet.svg';
import pythonSvg from '$lib/assets/skills/python.svg';
import qiskitSvg from '$lib/assets/skills/qiskit.svg';
import nginxSvg from '$lib/assets/skills/nginx.svg';
import jiraSvg from '$lib/assets/skills/jira.svg';
import kafkaSvg from '$lib/assets/skills/kafka.svg';
import elasticSearchSvg from '$lib/assets/skills/elasticsearch.svg';
import mongoSvg from '$lib/assets/skills/mongo.svg';
import databaseSvg from '$lib/assets/skills/database.svg';
import jestSvg from '$lib/assets/skills/jest.svg';
import gitSvg from '$lib/assets/skills/git.svg';
import httpSvg from '$lib/assets/skills/http.svg';
import bugSvg from '$lib/assets/skills/bug.svg';
import travisSvg from '$lib/assets/skills/travis.svg';
import flagSvg from '$lib/assets/skills/flag.svg';
import mentoringSvg from '$lib/assets/skills/mentoring.svg';
import laravelSvg from '$lib/assets/skills/laravel.svg';

export const CATEGORIES = ['Front End', 'Back End', 'DevOps', 'Other'];

export type Category = (typeof CATEGORIES)[number];

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
		icon: javascriptSvg,
		categories: ['Front End', 'Back End']
	},
	{
		title: 'Java',
		description: 'Spring Boot, Quarkus, Kotlin, Java EE, JSP',
		icon: javaSvg,
		categories: ['Back End']
	},
	{
		title: 'Test Driven Development',
		description: 'Jest, JUnit, unit testing, integration testing',
		icon: jestSvg,
		categories: ['Front End', 'Back End', 'DevOps']
	},
	{
		title: 'Containers',
		description: 'Docker, Kubernetes, Microservices',
		icon: kubernetesSvg,
		categories: ['DevOps']
	},
	{
		title: 'Web Services',
		description: 'SOAP, REST API, OpenAPI',
		icon: httpSvg,
		categories: ['Back End']
	},
	{
		title: 'Version control',
		description: 'git, branch and tag management, repository configuration',
		icon: gitSvg,
		categories: ['DevOps', 'Other']
	},
	{
		title: 'Continuous Integration and Deployment',
		description: 'CI/CD with Travis, Github Actions and other automated solutions',
		icon: travisSvg,
		categories: ['DevOps']
	},
	{ title: 'Vulnerability and threat management', icon: bugSvg, categories: ['DevOps'] },
	{
		title: 'SQL',
		description: 'Postgres, MySQL, DB2',
		icon: databaseSvg,
		categories: ['Back End']
	},
	{
		title: 'NoSQL and Object Storage',
		description: 'Cloudant, MongoDB, S3',
		icon: mongoSvg,
		categories: ['Back End']
	},
	{ title: 'Elasticsearch', icon: elasticSearchSvg, categories: ['Back End'] },
	{
		title: 'Apache Kafka',
		description: 'Asynchronous event streaming',
		icon: kafkaSvg,
		categories: ['Back End']
	},
	{
		title: 'Feature flagging',
		description: 'Canary releases, A/B testing, dark deployments',
		icon: flagSvg,
		categories: ['DevOps']
	},
	{
		title: 'Project Management',
		icon: jiraSvg,
		description: 'Use of Agile and Kanban, and relevant platforms such as Jira',
		categories: ['Other']
	},
	{ title: 'Mentoring and Coaching', icon: mentoringSvg, categories: ['Other'] },
	{
		title: 'Nginx',
		description: '.conf files, deployment',
		icon: nginxSvg,
		categories: ['Back End', 'DevOps']
	},
	{ title: 'Quantum Computing', description: 'IBM Qiskit', icon: qiskitSvg, categories: ['Other'] },
	{
		title: 'Python',
		description: 'Scripting, Jupyter Notebook',
		icon: pythonSvg,
		categories: ['Other']
	},
	{ title: 'C#', description: '.NET', icon: dotnetSvg, categories: ['Back End'] },
	{
		title: 'PHP',
		description: 'Laravel framework, Lumen',
		icon: laravelSvg,
		categories: ['Back End']
	}
];

export default skills;
