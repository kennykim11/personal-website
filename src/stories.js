export default {
    "seventhDay": {
        "title": "What for?.... What if?",
        "descript": "Where it all begins.",
        "themes": ["explo"],
        "category": "project",
        "referTo": [],
		"year": "2016",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/microsoft/microsoft.tsx')
    },
    "sandbox": {
        "title": "Sandbox",
        "descript": "",
        "themes": ["explo", "prob"],
        "category": "project",
        "referTo": [],
		"year": "2017",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": async () => {
            await new Promise(r => setTimeout(r, 50000))
            return import('./components/pages/placeholder/index.jsx')
        }
    },
    "doorman": {
        "title": "Doorman",
        "descript": "",
        "themes": ["explo", "prob"],
        "category": "project",
        "referTo": [],
		"year": "2018",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "sois": {
        "title": "Individualized Study",
        "descript": "",
        "themes": ["explo", "collab", "prob"],
        "category": "adventure",
        "referTo": [],
		"year": "2018",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "hitchhiking": {
        "title": "Hitchhacker",
        "descript": "",
        "themes": ["explo", "collab"],
        "category": "adventure",
        "referTo": [],
		"year": "2018",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "friendzone": {
        "title": "Friendzone",
        "descript": "",
        "themes": ["collab", "prob"],
        "category": "work",
        "referTo": [],
		"year": "2019",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "moog": {
        "title": "Moog",
        "descript": "",
        "themes": ["prob"],
        "category": "work",
        "referTo": [],
		"year": "2019",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "sg": {
        "title": "It's not your fault",
        "descript": "Student Government",
        "themes": ["collab"],
        "category": "adventure",
        "referTo": [],
		"year": "2019",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "htl": {
        "title": "HTL",
        "descript": "",
        "themes": ["explo", "collab", "prob"],
        "category": "work",
        "referTo": [],
		"year": "2020",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "csh": {
        "title": "Computer Science House",
        "descript": "",
        "themes": ["collab"],
        "category": "adventure",
        "referTo": [],
		"year": "2020",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "nasa": {
        "title": "NASA",
        "descript": "",
        "themes": ["collab", "prob"],
        "category": "work",
        "referTo": [],
		"year": "2021",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "surnameStudies": {
        "title": "Surname Studies",
        "descript": "",
        "themes": ["explo"],
        "category": "project",
        "referTo": [],
		"year": "2021",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "microsoft": {
        "title": "Applied Science",
        "descript": "",
        "themes": [],
        "category": "work",
        "referTo": [],
		"year": "2021",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "businessCard": {
        "title": "PCB Business Card",
        "descript": "",
        "themes": ["explo", "prob"],
        "category": "project",
        "referTo": [],
		"year": "2021",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "launch": {
        "title": "Launch Initiative",
        "descript": "",
        "themes": ["collab", "prob"],
        "category": "project",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "heatTransfer": {
        "title": "Curiosity (almost) arrested the cat",
        "descript": "",
        "themes": ["explo", "prob"],
        "category": "project",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "ti": {
        "title": "Bureaucracy is an illusion",
        "descript": "Trying to work at TI",
        "themes": ["prob"],
        "category": "work",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "makerClass": {
        "title": "Breaking boundaries",
        "descript": "Can an undergrad student teach a class?",
        "themes": ["explo", "collab"],
        "category": "project",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "orientation": {
        "title": "Rule-based autism",
        "descript": "",
        "themes": ["collab", "prob"],
        "category": "adventure",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "nepaliKitchen": {
        "title": "Nepali Kitchen",
        "descript": "",
        "themes": ["collab"],
        "category": "adventure",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "industrialDesign": {
        "title": "Industrial Design",
        "descript": "",
        "themes": ["explo"],
        "category": "adventure",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "mit": {
        "title": "Kenny Kim, MIT Student",
        "descript": "",
        "themes": ["explo", "collab"],
        "category": "adventure",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "gradParty": {
        "title": "Graduation Party",
        "descript": "",
        "themes": ["explo", "collab"],
        "category": "project",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "turkiye": {
        "title": "Bugün Güzel",
        "descript": "",
        "themes": ["explo", "collab", "prob"],
        "category": "adventure",
        "referTo": [],
		"year": "2023",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "spacex": {
        "title": "SpaceX",
        "descript": "",
        "themes": ["prob"],
        "category": "work",
        "referTo": [],
		"year": "2023",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "personalWebsite": {
        "title": "Personal Website",
        "descript": "",
        "themes": ["explo", "collab"],
        "category": "project",
        "referTo": [],
		"year": "2023",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "contact": {
        "title": "Let's Do This",
        "descript": "What are you waiting for? We can do something awesome...",
        "themes": ["explo", "collab", "prob"],
        "category": "adventure",
        "referTo": [],
		"year": "Now",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    }
}