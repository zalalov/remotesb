#!/usr/local/bin/node

let schedule = require("node-schedule");
let MoiKrug = require("./app/fetchers/moikrug");
let HH = require("./app/fetchers/hh");

let fetchers = [
    MoiKrug,
    HH
];

schedule.scheduleJob("30 * * * *", () => {
    let jobs = fetchers.map(async (fetcher) => {
        return await fetcher.fetch();
    });

    console.log(jobs);
});