function logStart() {
    console.log(
        "%cKahoot Tools v1.0"+
        "%c\n\n"+
        "%cDocumentation"+
        "%c\n\nAuto"+
        "%c\nThe Auto mode automatically selects the correct answer when the buttons appear, getting 1000 points every time!"+
        "%c\n\nHighlight"+
        "%c\nThe Highlight Mode is pretty self explainitory and highlights all correct answers!"+
        "%c\n\nHidden"+
        "%c\nThe Hidden mode makes it so that any answer you pick, correct or not, will be correct!"+
        "%c\n\nRemove"+
        "%c\nThe Remove mode deletes all the incorrect answer buttons!"+
        "%c\n\nExact"+
        "%c\nBy using the command exactNum(amount) and replacing amount with the number you want it to achive, the mode will answer in a custom amount of time getting points within a range of 5 of what you set the amount to."+
        "%c\n\nRandom"+
        "%c\nThe Random mode will take a random amount of time to select an answer that will be correct. You can select a minimum amount of points that can be achieved by typing randMin(number of points that you want). e.g randMin(800) will get a minimum of 800 points but can get anywhere from 800 up to 1000, making you answers seem more legitimate and natural while still not having to click anything!",
        "%c\n\nSkill"+
        "%c\nAnswer within 4 skill levels of [Terrible],[Below Average],[Average] and [Above average]. To change the mode's set skill, type kahoot.skill = level, from 0-3 with 0 being the best",
        "font-size: 25px; text-shadow: -1px -1px 0 gray,1px -1px 0 orange, -1px 1px 0 red, 1px 1px 0 red;",
        "color:aero;",
        "color:dodgerblue; text-shadow: -0.5px -0.5px 0 navy,0.5px -0.5px 0 navy, -0.5px 0.5px 0 midnightblue, 0.5px 0.5px 0 navy;font-size:15px;",
        "font-size:14px;font-weight:600;",
        "padding:10px;padding-right:100px",
        "font-size:14px;font-weight:600;",
        "padding:10px;padding-right:100px",
        "font-size:14px;font-weight:600;",
        "padding:10px;padding-right:100px",
        "font-size:14px;font-weight:600;",
        "padding:10px;padding-right:100px",
        "font-size:14px;font-weight:600;",
        "padding:10px;padding-right:100px",
        "font-size:14px;font-weight:600;",
        "padding:10px;padding-right:100px",
        "font-size:14px;font-weight:600;",
        "padding:10px;padding-right:100px"
    )
}
window.addEventListener("inject",logStart);


