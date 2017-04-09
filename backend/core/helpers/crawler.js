/**
 * Created by root on 3/14/17.
 */
let cheerio = require('cheerio');

function getImageUrl(html) {
    return cheerio.load(html)('img')[0].attribs.src;
}

function getName(html) {
    return cheerio.load(cheerio.load(html)('.fsl.fwb.fcb')[0]).text();
}

exports.getInfo = function (html) {
    return {image: getImageUrl(html), name: getName(html)}
};