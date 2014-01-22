var url='http://localhost:8282/index.html';
casper.test.begin("test initial status",2,function suite(test) {
    casper.start(url,function() {
        test.assertHttpStatus(200,'UP');
        test.assertExists({type:"xpath",path:'//div[@id="wrapper"]'},"wrapper div exists");
    });
    casper.run(function() {
        test.done();
    });
})
