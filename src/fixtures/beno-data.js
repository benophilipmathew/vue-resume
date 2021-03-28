
const PersonalInfo = {
    FullName: 'Beno Philip Mathew',
    ProfessionalTitle: '.Net Full Stack Engineer',
    PersonalDetails: {
        currentLocation: 'Bangalore, India',
        nationality: 'Indian',
        DOB: '22-07-1989',
        totalExperience: '8 yrs 6 months',
        mobile: '9975662663',
        email: 'benophilipmathew@hotmail.com'
    },
    BriefAboutMe: `I am a big bean bag of all the necessary tools and equipment to make things right and just perfect for the next innovations.
                    I born in Kerala, brought up in Madhya Pradesh, after completing my graduation I started my professional career. 
                    I am kind of a person who believes, developer is not limited to any technology.
                    I can work on any technology, if sufficient time has been provided. Love exploring new technologies.`
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
            { title: 'C#', rating: 5 },
            { title: '.Net', rating: 5 },
            { title: 'MVC', rating: 5 },
            { title: 'ASP.Net Web API', rating: 5 },
            { title: 'ASP.Net Core', rating: 4 },
            { title: 'Azure Function', rating: 5 },
            { title: 'NodeJS', rating: 3 },
            { title: 'MVVM', rating: 3 },
            { title: 'PHP', rating: 1 }
        ]
    },
    {
        header: 'Frontend',
        skills: [
            { title: 'VueJS', rating: 5 },
            { title: 'Angular', rating: 4 },
            { title: 'HTML/CSS', rating: 5 },
            { title: 'jQuery', rating: 4 },
            { title: 'ReactJS', rating: 1 }
        ]
    },
    {
        header: 'Desktop',
        skills: [
            { title: 'C# Winforms', rating: 4 },
            { title: 'C# WPF', rating: 5 },
            { title: 'Electron', rating: 2 },
        ]
    },
    {
        header: 'Database',
        skills: [
            { title: 'MSSQL', rating: 5 },
            { title: 'MySQL', rating: 2 },
            { title: 'Redis', rating: 3 },
            { title: 'CosmosDB', rating: 3 },
            { title: 'Microsoft Storage Table', rating: 5 }
        ]
    },
    {
        header: 'Mobile',
        skills: [
            { title: 'Ionic Framework', rating: 3 },
            { title: 'Flutter', rating: 1 }
        ]
    },
    {
        header: 'Cloud',
        skills: [
            { title: 'Azure (App Service, Function, CDN, Storage, Cosmos)', rating: 4 },
            { title: 'Alibaba Cloud (ECS)', rating: 3 }
        ]
    },
    {
        header: 'Infrastructure',
        skills: [
            { title: 'CI/CD Pipelines (Azure Devops, GitHub Action)', rating: 5 },
            { title: 'E2E Automated Testing (Cypress, Puppeteer)', rating: 5 },
            { title: 'Queues (MQTT, Azure Storage Queue)', rating: 3 },
            { title: 'IIS', rating: 4 },
            { title: 'Azure ARM', rating: 4 },
            { title: 'Sharepoint', rating: 2 }
        ]
    },
    {
        header: 'CMS/CRM',
        skills: [
            { title: 'EpiServer CMS', rating: 3 },
            { title: 'EpiServer eCommerce', rating: 3 },
            { title: 'DotNetNuke CMS', rating: 2 },
            { title: 'Ektron CMS', rating: 2 },
            { title: 'Wordpress CMS', rating: 3 },
            { title: 'Microsoft Dynamics CRM', rating: 3 },
        ]
    },
    {
        header: 'IOT',
        skills: [
            { title: 'Lua', rating: 2 },
            { title: 'MQTT', rating: 2 },
            { title: 'MicroPython', rating: 1 },
            { title: 'Node mcu - ESP8266', rating: 2 }
        ]
    },
];

const Experience = [
    {
        duration: { start: 'Dec 2018', end: 'Present' }, location: 'Bengaluru (KA)',
        designation: 'Sr. Software Engineer', company: 'Laerdal Bangalore LLP',
    },
    {
        duration: { start: 'Sept 2018', end: 'Dec 2018' },
        position: 'Sr. Software Engineer', company: 'First American India',
        location: 'Bengaluru (KA)'
    },
    {
        duration: { start: 'Dec 2014', end: 'Sept 2018' }, location: 'Bengaluru (KA)',
        position: 'Sr. Software Developer', company: 'Liventus Technology Services Pvt. Ltd.'
    },
    {
        duration: { start: 'Nov 2012', end: 'Dec 2014' }, location: 'Pune (MH)',
        position: 'Analyst [.Net Developer]', company: 'eClerx Services Ltd.'
    }
];

export default {
    PersonalInfo,
    Education,
    TechnicalSkills,
    Experience
}
