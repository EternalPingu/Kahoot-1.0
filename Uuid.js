  ////////////////////////////////////
 ////Retrieve quiz uuid from name////
////////////////////////////////////

async function getQuizUUID() {
    var name = prompt("enter name")
    function sendEvent(uuid) {
       quiz(uuid);
    }
    await fetch("https://kahoot.it/rest/kahoots/?query=" + name + "&limit=1").then((promise) => promise.json()).then((josn) => josn.entities[0].card.uuid).then((uuid) => sendEvent(uuid));
}

  ///////////////////////////////////
 /////Now Ask User For Quiz Name////
///////////////////////////////////
window.addEventListener("QuizStart",function() {
    getQuizUUID();
});
