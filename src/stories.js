import {redirect} from 'react-router-dom'

// Thumbnail pictures are 240 x 180

export default {
    // "seventhDay": {
    //     "title": "What for?.... What if?",
    //     "descript": "Where it all begins.",
    //     "themes": ["explo"],
    //     "category": "project",
    //     "referTo": [],
	// 	"year": "2016",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": async () => {
    //         await new Promise(r => setTimeout(r, 50000))
    //         return import('./components/pages/placeholder/index.jsx')
    //     }
    // },
    // "sandbox": {
    //     "title": "Sandbox Mod",
    //     "descript": "",
    //     "themes": ["explo", "prob"],
    //     "category": "project",
    //     "referTo": [],
	// 	"year": "2017",
    //     "thumbnail": new URL('./components/pages/sandbox/thumbnail.png', import.meta.url),
    //     "page": async () => {return window.location.replace("https://www.moddb.com/mods/sandbox-mod")}
    // },
    "doorman": {
        "title": "Doorman Project",
        "descript": "My first ever entry into STEM, and how that got me hooked on building things.",
        "themes": ["explo", "prob"],
        "category": "project",
        "referTo": [],
		"year": "2018",
        "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "sois": {
        "title": "How to Make the Most out of College",
        "descript": "Taking advantage of an individualized degree to learn everything.",
        "themes": ["explo", "collab", "prob"],
        "category": "adventure",
        "referTo": [],
		"year": "2018",
        "thumbnail": new URL('./components/pages/sois/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "hitchhiking": {
        "title": "Hitchhacker",
        "descript": "My two-week adventure hitchhiking across Canada and the US",
        "themes": ["explo", "collab"],
        "category": "adventure",
        "referTo": [],
		"year": "2018",
        "thumbnail": new URL('./components/pages/hitchhiking/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "friendzone": {
        "title": "Friendzone (Application Development)",
        "descript": "Yes, that was the unfortunate name of my very first internship...",
        "themes": ["collab", "prob"],
        "category": "work",
        "referTo": [],
		"year": "2019",
        "thumbnail": new URL('./components/pages/friendzone/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "moog": {
        "title": "Moog (Software Engineering)",
        "descript": "Learning the basics of full-stack web development.",
        "themes": ["prob"],
        "category": "work",
        "referTo": [],
		"year": "2019",
        "thumbnail": new URL('./components/pages/moog/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    // "sg": {
    //     "title": "It's not your fault",
    //     "descript": "Student Government",
    //     "themes": ["collab"],
    //     "category": "adventure",
    //     "referTo": [],
	// 	"year": "2019",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": () => import('./components/pages/placeholder/index.jsx')
    // },
    "htl": {
        "title": "HTL (Firmware Engineering)",
        "descript": "What happens if you shove 15 interns in a separate building for twelve weeks?",
        "themes": ["explo", "collab", "prob"],
        "category": "work",
        "referTo": [],
		"year": "2020",
        "thumbnail": new URL('./components/pages/htl/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    // "csh": {
    //     "title": "Computer Science House",
    //     "descript": "",
    //     "themes": ["collab"],
    //     "category": "adventure",
    //     "referTo": [],
	// 	"year": "2020",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": () => import('./components/pages/placeholder/index.jsx')
    // },
    "nasa": {
        "title": "NASA (Software Engineering)",
        "descript": "An internship full of paradoxes.",
        "themes": ["collab", "prob"],
        "category": "work",
        "referTo": [],
		"year": "2021",
        "thumbnail": new URL('./components/pages/nasa/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    // "surnameStudies": {
    //     "title": "Surname Studies",
    //     "descript": "",
    //     "themes": ["explo"],
    //     "category": "project",
    //     "referTo": [],
	// 	"year": "2021",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": () => import('./components/pages/placeholder/index.jsx')
    // },
    "microsoft": {
        "title": "Microsoft (Software Engineering)",
        "descript": "\"I used GPT two years before it was cool!\"",
        "themes": [],
        "category": "work",
        "referTo": [],
		"year": "2021",
        "thumbnail": new URL('./components/pages/microsoft/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/microsoft/microsoft.tsx')
    },
    "businessCard": {
        "title": "The Circuit Board Business Card",
        "descript": "Mastering first impressions with the ultimate business card",
        "themes": ["explo", "prob"],
        "category": "project",
        "referTo": [],
		"year": "2021",
        "thumbnail": new URL('./components/pages/businessCard/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    // "launch": {
    //     "title": "Launch Initiative",
    //     "descript": "",
    //     "themes": ["collab", "prob"],
    //     "category": "project",
    //     "referTo": [],
	// 	"year": "2022",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": () => import('./components/pages/placeholder/index.jsx')
    // },
    // "heatTransfer": {
    //     "title": "Curiosity (almost) arrested the cat",
    //     "descript": "",
    //     "themes": ["explo", "prob"],
    //     "category": "project",
    //     "referTo": [],
	// 	"year": "2022",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": () => import('./components/pages/placeholder/index.jsx')
    // },
    "ti": {
        "title": "Texas Instruments (Electrical Engineering)",
        "descript": "How to sneak your way into a job you're not allowed to have",
        "themes": ["prob"],
        "category": "work",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/ti/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    "makerClass": {
        "title": "Maker Class",
        "descript": "Redefining engineering education through teaching a class - while being a student",
        "themes": ["explo", "collab"],
        "category": "project",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/makerClass/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    // "orientation": {
    //     "title": "Rule-based autism",
    //     "descript": "",
    //     "themes": ["collab", "prob"],
    //     "category": "adventure",
    //     "referTo": [],
	// 	"year": "2022",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": () => import('./components/pages/placeholder/index.jsx')
    // },
    // "nepaliKitchen": {
    //     "title": "Nepali Kitchen",
    //     "descript": "",
    //     "themes": ["collab"],
    //     "category": "adventure",
    //     "referTo": [],
	// 	"year": "2022",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": () => import('./components/pages/placeholder/index.jsx')
    // },
    "industrialDesign": {
        "title": "Industrial Design",
        "descript": "ID can mean multiple things...",
        "themes": ["explo"],
        "category": "adventure",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/id/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    // "mit": {
    //     "title": "Kenny Kim, MIT Student",
    //     "descript": "",
    //     "themes": ["explo", "collab"],
    //     "category": "adventure",
    //     "referTo": [],
	// 	"year": "2022",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": () => import('./components/pages/placeholder/index.jsx')
    // },
    "gradParty": {
        "title": "Graduation Party",
        "descript": "Ending my college career with a bang",
        "themes": ["explo", "collab"],
        "category": "project",
        "referTo": [],
		"year": "2022",
        "thumbnail": new URL('./components/pages/gradParty/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/placeholder/index.jsx')
    },
    // "turkiye": {
    //     "title": "Bugün Güzel",
    //     "descript": "",
    //     "themes": ["explo", "collab", "prob"],
    //     "category": "adventure",
    //     "referTo": [],
	// 	"year": "2023",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": () => import('./components/pages/placeholder/index.jsx')
    // },
    // "spacex": {
    //     "title": "SpaceX",
    //     "descript": "",
    //     "themes": ["prob"],
    //     "category": "work",
    //     "referTo": [],
	// 	"year": "2023",
    //     "thumbnail": new URL('./components/pages/placeholder/thumbnail.png', import.meta.url),
    //     "page": () => import('./components/pages/placeholder/index.jsx')
    // },
    "personalWebsite": {
        "title": "Personal Website",
        "descript": "See how much more work I have to do on this?",
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
        "thumbnail": new URL('./components/pages/contact/thumbnail.png', import.meta.url),
        "page": () => import('./components/pages/contact/contact.jsx')
    }
}