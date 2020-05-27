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
                {desc: 'Home Page', photo: '/portfolio2.png'},
                {desc: 'hello2', photo: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
            ],
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
            mainImage: '',
            images: [{desc: 'hello1', photo: '/logo192.png'}],
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
            mainImage: '',
            images: [{desc: 'hello1', photo: '/logo192.png'}],
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
            mainImage: '',
            images: [{desc: 'hello1', photo: '/logo192.png'}],
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