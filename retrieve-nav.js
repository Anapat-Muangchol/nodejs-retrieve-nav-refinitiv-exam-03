global.fetch = require('node-fetch');

const myArgs = process.argv.slice(2);
if (myArgs.length > 0) {
    const fundCode = myArgs[0];
    fetch('https://codequiz.azurewebsites.net', {
        credentials: "same-origin",
        headers: {cookie: 'hasCookie=true'}
    }).then((res) => res.text())
    .then((html) => {
        findNAV(html, fundCode);
    });
}

function findNAV(html, fundCode) {
    const indexOfFund = html.indexOf(fundCode);
    if (indexOfFund > 0) {
        nav = html.substr(indexOfFund);
        nav = nav.substr(nav.indexOf('<td>') + 4);
        nav = nav.substr(0, nav.indexOf('</td>'));
        console.log(nav);
    }
}
