class HHFetcher {
    async fetch(limit=10) {
        return [
            {
                "title": "Python Developer",
                "description": "blablabladescription",
                "link": "google.com"
            }
        ]
    }
};

module.exports = HHFetcher;