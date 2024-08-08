import * as zir from "./module.js";

let url = "https://aulamindhub.github.io/amazing-api/events.json"

fetch(url)
    .then(resp => resp.json())
    .then(response => {

        let data = response
        let events = data.events

        let categories = zir.identifyCategories(events)
        let checkBoxContainer = document.getElementById("checkBoxContainer")
        let cardContainer = document.getElementById("cardContainer")

        zir.paintCheckBox(categories, checkBoxContainer)
        zir.paintCards(events, cardContainer)

        let checkBoxes = document.querySelectorAll('input[type = "checkbox"]')
        let textSearch = document.getElementById("textSearch")

        checkBoxes.forEach(checkBox => {
            checkBox.addEventListener("change", () => {
                let eventsFilter = zir.filterCategory(events)
                eventsFilter = zir.filterText(eventsFilter)
                zir.paintCards(eventsFilter, cardContainer)
            })
        })

        textSearch.addEventListener("keyup", () => {
            let eventsFilter = zir.filterText(events)
            eventsFilter = zir.filterCategory(eventsFilter)
            zir.paintCards(eventsFilter, cardContainer)
        })
    })


