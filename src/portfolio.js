const portfolio ={
    projects: [
        {
            name: 'Portfolio Website',
            date: 'May 2020 - Present',
            description: 'Portfolio website I created using React to showcase relevant experience, projects, and anything I\'d like to share with the world!',
            category: ['FRONT-END', 'UX-UI', 'REACT'],
            github: 'https://github.com/demarcod/demarcod.github.io'
        },
        {
            name: 'Piano Project',
            date: 'Jan 2019 - Oct 2019',
            description: 'Research project where I identified discrepancies in piano performances, resulting in an efficient way to analyze sheet music using Python',
            category: ['RESEARCH', 'PYTHON'],
            github: 'https://github.com/demarcod/Piano-Project'
        },

        {
            name: 'Unit Converter',
            date: 'April 2020 - May 2020',
            description: 'Basic Unit Converter application I created with a friend using an Ionic framework in order to gain experience with mobile development',
            category: ['MOBILE', 'FRONT-END'],
            github: 'google.com'
        },
        {
            name: 'CIDC Website',
            date: 'March 2020 - Present',
            description: 'Website I created for a new medical business, CIDC, using React, including an appointment scheduling application',
            category: ['REACT', 'UX-UI', 'FRONT-END'],
            github: 'google.com'
        },
        {
            name: 'Project 2',
            date: 'May 2020 - Present',
            description: '',
            category: ['others'],
            github: 'google.com'
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