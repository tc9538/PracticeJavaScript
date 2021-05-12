/*
    index.js
 */

// var msg= "Hello JavaScript";
// console.log(msg);

// var resultsDiv = document.getElementById("results");
// resultsDiv.innerHTML = "<p>This is from JavaScript</p>";


var results = [{
    name: "jQuery",
    language: "JavaScript",
    score: 4.5,
    showLog: function(){

    },
    owner: {
        login: "testabc",
        id: 123456
    }
}, {
    name: "jQuery UI",
    language: "JavaScript",
    score: 3.5,
    showLog: function(){

    },
    owner: {
        login: "testabc",
        id: 123456
    }

}];

for(var x = 0; x< results.length; x++)
{
        var result = results[x];
        if(result.score < 4){
            break;
        }
        console.log(result.name);
}

// console.log(results.length);
// console.log(results[0].name);

// console.log("msg is " + typeof(msg));
// console.log("resultsDiv is "+ typeof(resultsDiv));

// var none;
// console.log("none is " + typeof(none));

// var aNumber = 0;
// console.log("aNumber is " + typeof(aNumber));

// var trueFalse = true;
// console.log("trueFalse is " + typeof(trueFalse));

// function showMsg(msg, more){
//     if(more){
//         console.log("showMsg + " + msg + more);
//     }else {
//         console.log("showMsg + " + msg);
//     }
// }

// showMsg("some information");

// showMsg("some information", "and even more");

// var showIt = function(msg){
//     console.log(msg);
// }

// showIt("Some message");

// function showItThen(msg, callback){
//     showIt(msg);
//     callback();
// }

// showItThen("showItThen called", function(){
//     console.log("callback called");
// });

// var inGlobal = true;

// function testMe(){
//     console.log("testMe()" + inGlobal);

//     var someMsg = "some Message";
//     console.log("testMe()"+ someMsg);
// }

// testMe();
