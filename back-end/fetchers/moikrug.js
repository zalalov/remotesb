const axios = require("axios");
const Parser = require('rss-parser');

class MoiKrugFetcher {
    async fetch(limit=10) {
        // Get RSS
        let response = await axios.get("https://moikrug.ru/vacancies/rss", {
            params: {
                remote: 1,
                page: 1
            }
        });

        // Parse RSS
        let parser = new Parser();
        let data = await parser.parseString(response.data);

        // Prepare parsed data and render PUG
        let jobs = [];

        if (data.items && !!data.items.length) {
            jobs = data.items[0].map((item) => {
                return item;
            });
        }

        return jobs;
    }
};

module.exports = MoiKrugFetcher;