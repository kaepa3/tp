"use strict";
function wait(duration) {
    return new Promise(resolve => {
        setTimeout(() => resolve('${duration} ms passed'), duration);
    });
}
wait(1000).then(res => { });
