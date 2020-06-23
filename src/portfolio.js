const portfolio ={
    projects: [
        {
            name: 'Portfolio Website',
            date: 'May 2020 - Present',
            description: 'Portfolio website I created using React to showcase relevant experience, projects, and anything else I\'d like to share with the world!',
            category: ['CSS', 'FRONT-END', 'HTML', 'JAVASCRIPT', 'REACT', 'UX-UI'],
            github: 'https://github.com/demarcod/demarcod.github.io',
            mainImage: '/portfolio1.png',
            images:[
                {desc: 'Home Page', photo: '/portfolio1.png'},
                {desc: 'About Page', photo: '/portfolio2.png'},
                {desc: 'Experience Page', photo: '/portfolio3.png'},
                {desc: 'Projects Page', photo: '/portfolio4.png'},
                {desc: 'Contact Page', photo: '/portfolio5.png'}
            ],
            longDesc: "Seems kind of redundant to include my own portfolio site in my projects list, eh? Well I'm quite proud of my work here, so I figured why not pop it in? It's my first website I've created using a React framework and it helped me solidify my skills in Javascript, HTML, CSS, Form Handling, and exploring how to make a website responsive.",
            resources: [
                {text: 'Github', link: 'https://github.com/demarcod/demarcod.github.io'}
            ]
        },
        {
            name: 'Piano Project',
            date: 'Jan 2019 - Oct 2019',
            description: 'Research project where I identified discrepancies in piano performances, resulting in an efficient way to analyze sheet music using Python',
            category: ['RESEARCH', 'PYTHON'],
            github: 'https://github.com/demarcod/Piano-Project',
            mainImage: '/piano1.png',
            images: [
                {desc: 'MIDI file and score sheet of piano performance', photo: '/piano2.png'},
                {desc: 'Generated MusicXML file', photo: '/piano3.png'}
            ],
            longDesc: "When playing the piano, or any musical instrument, most artists have a 'musical fingerprint', meaning they may make consistent alterations to the music they perform (i.e. perhaps they always play a certain note with more emphasis). The end goal of this project was to recreate a piano performane in the style that a certain artist would have performed it. I found digital files of various artists performing the same piece and created a database of these files for analysis purposes. I also explored the concept of neural networks and documented how they may be used to advance the project's goals. One of my main contributions entailed finding a way to automate the process of converting audio files to MusicXML files, and thus discovering a way to analyze music in text form using python. I found the uniqueness and complexity of the project particularly fascinating. I have a background in playing classical piano, and loved how there were so many avenues of technology to be explored within the scope of the project!",
            resources: [
                {text: 'Github', link: 'https://github.com/demarcod/Piano-Project'}
            ]
        },

        {
            name: 'Unit Converter',
            date: 'April 2020 - May 2020',
            description: 'Basic Unit Converter application I created with a friend using an Ionic framework in order to gain experience with mobile development',
            category: ['ANGULAR', 'MOBILE', 'FRONT-END'],
            github: 'google.com',
            mainImage: '/temp1.png',
            images: [{desc: 'Project in progress - images coming soon', photo: '/temp2.png'}],
            longDesc: "",
            resources: [
                {text: 'Github', link: 'https://github.com/demarcod/Piano-Project'}
            ]
        },
        {
            name: 'CIDC Website',
            date: 'March 2020 - Present',
            description: 'Website I created for a new medical business, CIDC, using React, including an appointment scheduling application',
            category: ['REACT', 'UX-UI', 'FRONT-END'],
            github: 'google.com',
            mainImage: '/temp1.png',
            images: [
                {desc: 'Project in progress - images coming soon', photo: '/temp2.png'}
            ],
            longDesc: "Business website for CIDC (Comprehensive Infectious Diseases Consultants) built using React.",
            resources: [
                {text: 'Github', link: 'https://github.com/demarcod/Piano-Project'}
            ]
        },
        {
            name: 'Astro-Pizza',
            date: 'Jan 2019 - May 2019',
            description: 'Web development project for a pizza-ordering website that allows users to create an account and interactively select toppings',
            category: ['BACK-END', 'CSS', 'FRONT-END', 'HTML', 'JAVASCRIPT', 'PHP', 'UX-UI'],
            github: 'https://github.com/demarcod/Astro-Pizza',
            mainImage: '/astro-pizza2.png',
            images: [{desc: 'Ordering Page', photo: '/astro-pizza2.png'},{desc: 'Ordering Page', photo: '/astro-pizza2.png'}],
            longDesc: "",
            resources: [
                {text: 'Github', link: 'https://github.com/demarcod/Astro-Pizza'}
            ]
        }
    ],
    all: function() {
        return this.projects;
    },
    get: function(name) {
        const isProject = p => p.name === name;
        return this.projects.find(isProject);
    }
};

export default portfolio;