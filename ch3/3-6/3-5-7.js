"use strict";
function waitThenString(duration) {
    return new Promise(resolve => {
        setTimeout(() => resolve('${duration}ms passed'), duration);
    });
}
function waitThenNumber(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(duration);
        }, duration);
    });
}
function waitAll() {
    return Promise.all([
        waitThenString(10),
        waitThenNumber(100),
        waitThenString(1000),
    ]);
}
function waitRace() {
    return Promise.race([
        waitThenString(10),
        waitThenNumber(100),
        waitThenString(1000),
    ]);
}
async function main() {
    const [a, b, c] = await waitAll();
    const result = await waitRace();
    console.log(result);
}
