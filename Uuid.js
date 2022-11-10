  ////////////////////////////////////
 ////Retrieve quiz uuid from name////
////////////////////////////////////

async function getQuizUUID(name) {
    function sendEvent(uuid) {
       window.dispatchEvent(new CustomEvent("uuid",{detail:uuid}));
    }
    await fetch("https://kahoot.it/rest/kahoots/?query=" + name + "&limit=1").then((promise) => promise.json()).then((josn) => josn.entities[0].card.uuid).then((uuid) => sendEvent(uuid));
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
