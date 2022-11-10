  ////////////////////////////////////
 ////Retrieve quiz uuid from name////
////////////////////////////////////

async function getQuizUUID(name) {
    
    await fetch("https://kahoot.it/rest/kahoots/?query=" + name + "&limit=1").then((promise) => console.log(promise))
}

  ///////////////////////////////////
 /////Now Ask User For Quiz Name////
///////////////////////////////////
window.addEventListener("QuizStart",function() {
    var name = prompt("Enter Quiz Name");
    function init(event) {
        var uuid = event.detail;
        console.log(uuid)
        quiz(uuid);
    }
    window.addEventListener("uuid",init);
    getQuizUUID(name);
});
