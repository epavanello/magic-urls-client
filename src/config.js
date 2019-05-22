const defaultConfig = {

};

// Environment specific overrides
const environmentConfigs = {
    development: {
        api: {
            uri: process.env.API_URI || 'http://localhost:8000/api/',
        },
        shortner: {
            uri: process.env.SHORTNER_URI || 'http://localhost:8000/go/'
        }
    },
    production: {
        api: {
            uri: process.env.API_URI || 'http://api.pava.me:8000/api/',
        },
        shortner: {
            uri: process.env.SHORTNER_URI || 'http://api.pava.me:8000/go/'
        }
    },
};


export default { ...defaultConfig, ...(environmentConfigs[process.env.NODE_ENV] || {}) };