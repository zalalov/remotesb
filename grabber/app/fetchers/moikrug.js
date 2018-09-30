export class MoiKrugFetcher {
    async fetch(limit=10) {
        // Get RSS
        let url = this.buildUrl({page: 1});
        let response = await axios.get();

        // Parse RSS
        let parser = new Parser();
        let data = await parser.parseString(response.data);

        // Prepare parsed data and render PUG
        let jobs = [];

        if (data.items && !!data.items.length) {
            jobs = data.items.map((item) => {
                return item;
            });
        }

        res.render('jobs', {
            items: jobs
        });
    }
}