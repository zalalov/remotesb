#!/usr/local/bin/node
let schedule = require('node-schedule');



schedule.scheduleJob('30 * * * *', () => {

});
console.log('Hello world.');