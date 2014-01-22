var url='http://localhost:8282/index.html';
casper.test.begin("test initial status",7,function suite(test) {
    casper.start(url,function() {
        test.assertHttpStatus(200,'UP');
        test.assertExists({type:"xpath",path:'//div[@id="wrapper"]'},"wrapper div exists");
        test.assertExists({type:"xpath",path:'//div[@id="wrapper"]/div[@class="right"]'},"right class div exists");
        test.assertExists({type:"xpath",path:'//div[@id="wrapper"]/div[@class="left"]'},"left class  div exists");
        test.assertExists({type:"xpath",path:'//link[@href="css/style.css"]'},"style.css included");
        test.assertExists({type:"xpath",path:"//script[@src='js/respuesta.js']"},"respuesta.js included");
        test.assertExists({type:"xpath",path:"//script[contains(@src,'jquery')]"},"jquery lib included");
    });
    casper.run(function() {
        test.done();
    });
})
