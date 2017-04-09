var casper = require('casper').create();
var html;



casper.start('https://web.facebook.com/login/identify?ctx=recover', function () {
    var number = casper.cli.raw.args[0];
    //Enter Credentials
    this.evaluate(function (num) {
        var inputs = document.getElementsByName("email");
        for(var i in inputs) {
            inputs[i].value = num;
        }
    }, number);

    this.click('#did_submit');
});

casper.waitFor(function check() {
        return (this.getCurrentUrl().search('initiate') > -1);
    },
    function then() { // step to execute when check() is ok
        html = this.evaluate(function () {
            return document.getElementsByClassName('_k2')[0].innerHTML;
        });
    },
    function timeout() { // step to execute if check has failed
        console.error('Failed to navigate to page 2', 'ERROR');
    });

casper.run(function () {
        console.log(html);
        casper.done();
});
