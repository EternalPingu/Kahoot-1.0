  ////////////////////////////////////
 ////Retrieve quiz uuid from name////
////////////////////////////////////

function getQuizUUID(name) {
    function fulfilled(e) {
        var data = String(e.entities[0].card.uuid);
        console.log(data)
        window.dispatchEvent(new CustomEvent("uuid",{detail : data}))
    }
    function unfulfilled() {

    }
    fetch("https://kahoot.it/rest/kahoots/?query=" + name + "&limit=1").then((promise) => promise.json()).then(fulfilled,unfulfilled);
}

  ///////////////////////////////////
 /////Now Ask User For Quiz Name////
///////////////////////////////////
window.addEventListener("QuizStart",function() {
    var name = prompt("Enter Quiz Name");
    function init(event) {
        var uuid = event.detail;
        quiz(uuid);
    }
    window.addEventListener("uuid",init);
    getQuizUUID(name);
});
