#!/usr/local/bin/node

let schedule = require("node-schedule");
const MoiKrugFetcher = require("./app/fetchers/moikrug");
const HHFetcher = require("./app/fetchers/hh");

let fetchers = [
    new MoiKrugFetcher(),
    // new HHFetcher()
];

schedule.scheduleJob("*/5 * * * * *", async () => {
    console.log('5 seconds event was started.');

    let jobsPromises = fetchers.map(async (fetcher) => {
        return await fetcher.fetch();
    });

    let jobs = await Promise.all(jobsPromises).then(values => {
        return values;
    });

    console.log(jobs);
});