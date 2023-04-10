
const PersonalInfo = {
    FullName: 'Beno P',
    ProfessionalTitle: '.Net Full Stack Engineer',
    PersonalDetails: {
        currentLocation: 'Bangalore, India',
        nationality: '',
        DOB: '',
        totalExperience: '9 yrs 7 months',
        mobile: '',
        email: '',
        handles: {
            linkedIn: '',
            facebook: '',
            github: '',
        }
    },
    BriefAboutMe: `Software engineer by qualification & profession, living with a motive to help save time.
                    I born in Kerala, brought up in Madhya Pradesh, after completing my graduation, I moved to pune to start my professional career. 
                    I am the kind of person who believes, developer is not limited to any technology.
                    I can work on any technology, if sufficient time has been provided. I like exploring new things.`,
    Languages: [
        'English',
        'Hindi',
        'Malayalam'
    ]
}

const Education = [
    {
        duration: { start: '2007', end: '2011' },
        location: 'Jabalpur (M.P)', courseName: 'BE - Computer Science',
        institutionName: 'Vindhya Institute of Technology & Science', university: 'RGPV, Bhopal'
    },
    {
        duration: { start: '2006', end: '2007' },
        location: 'Jabalpur (M.P)', courseName: 'PCM - Senior Secondary',
        institutionName: 'Kendriya Vidyalaya', board: 'CBSE'
    }
];

const TechnicalSkills = [
    {
        header: 'Backend',
        skills: [
            { title: 'C#', rating: 4 },
            { title: '.Net', rating: 4 },
            { title: 'MVC', rating: 4 },
            { title: 'ASP.Net Web API', rating: 4 },
            { title: 'Silverlight', rating: 3 },
            { title: 'ASP.Net Core', rating: 4 },
            { title: 'Azure Function', rating: 5 },
            { title: 'NodeJS', rating: 3 },
            { title: 'MVVM', rating: 3 },
            { title: 'PHP', rating: 1 }
        ],
        break: 6
    },
    {
        header: 'Frontend',
        skills: [
            { title: 'VueJS', rating: 5 },
            { title: 'Angular', rating: 4 },
            { title: 'HTML/CSS', rating: 5 },
            { title: 'jQuery', rating: 4 },
            { title: 'Ionic Framework', rating: 2 }
        ],
        break: 0
    },
    {
        header: 'Desktop',
        skills: [
            { title: 'C# Winforms', rating: 3 },
            { title: 'C# WPF', rating: 5 },
            { title: 'Electron', rating: 2 },
        ],
        break: 0
    },
    {
        header: 'Database',
        skills: [
            { title: 'MSSQL', rating: 5 },
            { title: 'MySQL', rating: 2 },
            { title: 'Redis', rating: 3 },
            { title: 'Cosmos DB', rating: 4 },
            { title: 'Microsoft Storage Table', rating: 5 },
            { title: 'Mongo DB', rating: 2 }
        ],
        break: 0
    },
    {
        header: 'Cloud',
        skills: [
            { title: 'Azure (App Service, Function, CDN, Storage, Cosmos)', rating: 4 },
            { title: 'Alibaba Cloud (ECS)', rating: 3 }
        ],
        break: 0
    },
    {
        header: 'Infrastructure',
        skills: [
            { title: 'CI/CD Pipelines (Azure Devops, GitHub Action)', rating: 5 },
            { title: 'E2E Automated Testing (Cypress, Puppeteer)', rating: 5 },
            { title: 'Queues (MQTT, Azure Storage Queue)', rating: 3 },
            { title: 'IIS', rating: 3 },
            { title: 'ARM Templates', rating: 4 },
            { title: 'Sharepoint', rating: 2 }
        ],
        break: 0
    },
    {
        header: 'CMS/CRM',
        skills: [
            { title: 'EpiServer CMS', rating: 3 },
            { title: 'EpiServer eCommerce', rating: 2 },
            { title: 'DotNetNuke CMS', rating: 2 },
            { title: 'Ektron CMS', rating: 2 },
            { title: 'Wordpress CMS', rating: 3 },
            { title: 'Microsoft Dynamics CRM', rating: 3 },
        ],
        break: 0
    },
    {
        header: 'IOT',
        skills: [
            { title: 'Lua', rating: 1 },
            { title: 'MQTT', rating: 3 },
            { title: 'Node mcu - ESP8266', rating: 2 }
        ],
        break: 0
    },
];

const Experience = [
    {
        duration: { start: 'Sept 2021', end: 'Present' }, location: 'Bengaluru (KA)',
        designation: 'Sr. Lead Engineer', company: 'Quest Global',
        work: [
            'Involve in architecture design & development of Turbine Configuration Management Tool for Windmill',
            'Developed generic utility nuget package for authentication & logging',
            'Involved in setting up self-host application'
        ]
    },
    {
        duration: { start: 'Dec 2018', end: 'Sept 2021' }, location: 'Bengaluru (KA)',
        designation: 'Sr. Software Engineer', company: 'Laerdal Bangalore LLP',
        work: [
            'Involved in feature development and maintenance of laerdal eCommerce website',
            'Developed licence generation service for Laerdal virtual product',
            'Developed a generic product image service with transformation capabilities',
            'Involved with setting up CD/CI for the main eCommerce project',
            'Developed a end to end automated testing project for CD/CI using nodejs',
            'Maintaining azure production/development resources for eCommerce with owner role'
        ]
    },
    {
        duration: { start: 'Sept 2018', end: 'Dec 2018' },
        designation: 'Sr. Software Engineer', company: 'First American India',
        location: 'Bengaluru (KA)',
        work: [
            'Worked on developing a generic address control with auto suggestion feature',
            'Involved in estimating a new incoming project for upgrading to angular'
        ]
    },
    {
        duration: { start: 'Dec 2014', end: 'Sept 2018' }, location: 'Bengaluru (KA)',
        designation: 'Sr. Software Developer', company: 'Liventus Technology Services Pvt. Ltd.',
        work: [
            'Worked on a CMS based website for marketing team of Equipment Leasing Company',
            'Involved in the maintenance of many CRM based web applications for Equipment Leasing Company and Web Service for CRM Projects',
            'Worked on MVC application for managing pictures for recovery department, SharePoint is the centralized document centre for this project',
            'Worked on a angular 4 application for credit department',
            'Worked on a project to display all the company stats for Liventus (i.e. for two departments)',
            'Involved in the maintenance of Call Centre dashboard for Equipment Leasing Company',
            'Worked on a WPF windows application for Equipment Leasing Company to manage asset recovery documents. SharePoint is the centralized document centre for this project.'
        ]
    },
    {
        duration: { start: 'Nov 2012', end: 'Dec 2014' }, location: 'Pune (MH)',
        designation: 'Analyst [.Net Developer]', company: 'eClerx Services Ltd.',
        work: [
            'Worked on many promotional/competition campaigns for ecommerce websites for a payment company',
            'Worked on Ektron CMS based websites',
            'Worked on integrating Login API’s using JSON and XML for Internet payment company',
            'Experience in creating web form with Eloqua backend'
        ]
    }
];

export default {
    PersonalInfo,
    Education,
    TechnicalSkills,
    Experience
}
