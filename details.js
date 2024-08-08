import * as zir from "./module.js";

let url = "https://aulamindhub.github.io/amazing-api/events.json"

fetch(url)
    .then(resp => resp.json())
    .then(response => {

        let data = response
        let events = data.events

        let url = new URLSearchParams(window.location.search)
        let idEvent = url.get("id")
        let eventDetails = events.find(event => event._id == idEvent)

        document.getElementById("detailsCont").innerHTML = `
        <div class="col-md-5">
            <img src="${eventDetails.image}" class="img-fluid img-details-size object-fit-cover rounded-start" alt="costume party image">
        </div>
        <div class="col-md-7">
            <div class="card-body">
                <h2 class="card-title" id="name">${eventDetails.name}</h2>
                <p class="card-text" id="description">${eventDetails.description}</p>
                <p class="card-text" id="date"><b>Date: </b>${eventDetails.date}<br><b>Price: </b><em>$ ${eventDetails.price}</em></p>
                <p class="card-text"><small class="text-body-secondary">
                    <b>Category: </b>${eventDetails.category}<br>
                    <b>Place: </b>${eventDetails.place}<br>
                    <b>Capacity: </b>${eventDetails.capacity}<br>
                    <b>${eventDetails.estimate ? "Estimate: " : "Assistance: "}</b>${eventDetails.estimate ? eventDetails.estimate : eventDetails.assistance}</small>
                </p>
            </div>
        </div>
        `
    })