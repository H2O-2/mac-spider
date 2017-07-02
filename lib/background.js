"use strict";
/// <reference path="typings/index.d.ts" />
// import superagent = require('superagent');
// import cheerio = require('cheerio');
// 
// testElement.innerHTML = 'run!';
// (function fetchData() {
//     superagent.get(URL).end((err: any, res: superagent.Response) => {
//         if (err) {
//             return console.error(err);
//         }
//         const $url = cheerio.load(res.text);
//         const ios: string[] = [], macs: string[] = [], other: string[] = [];
//         $url('.tab-iphone ul li').each((index: number, element: CheerioElement) => {
//             const $element = $url(element);
//             ios.push($element.attr('class'));
//         });
//         $url('.tab-mac ul li').each((index: number, element: CheerioElement) => {
//             const $element = $url(element);
//             macs.push($element.attr('class'));
//         });
//         $url('.tab-other ul li').each((index: number, element: CheerioElement) => {
//             const $element = $url(element);
//             other.push($element.attr('class'));
//         });
//         if(testElement) testElement.innerHTML = ios[0];
//         else {
//             return console.error('null');
//         }
//     });
//     setTimeout(fetchData, 10 * 1000); // fetch every 30 min
// })();
console.log("out");
function fetchData() {
    var URL = "http://api.bilibili.com/x/feed/unread/count?type=0";
    var xmlhttp = new XMLHttpRequest();
    var testElement = document.getElementById("test");
    xmlhttp.open("GET", URL, true);
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    };
    xmlhttp.onerror = function () {
        console.error('err');
    };
    xmlhttp.send();
}
window.onload = function () {
    fetchData();
};
