// const shows = [
//   {
//     dateheading: "DATE",
//     date: "Mon Sept 09 2024",
//     venueheading: "VENUE",
//     venue: "Ronald Lane",
//     locationheading: "LOCATION",
//     location: "San Francisco, CA",
//   },

//   {
//     dateheading: "DATE",
//     date: "Tue Sept 17 2024",
//     venueheading: "VENUE",
//     venue: "Pier 3 East",
//     locationheading: "LOCATION",
//     location: "San Francisco, CA",
//   },
//   {
//     dateheading: "DATE",
//     date: "Sat Oct 12 2024",
//     venueheading: "VENUE",
//     venue: "View Lounge",
//     locationheading: "LOCATION",
//     location: "San Francisco, CA",
//   },
//   {
//     dateheading: "DATE",
//     date: "Sat Nov 16 2024",
//     venueheading: "VENUE",
//     venue: "Hyatt Agency",
//     locationheading: "LOCATION",
//     location: "San Francisco, CA",
//   },
//   {
//     dateheading: "DATE",
//     date: "Fri Nov 29 2024",
//     venueheading: "VENUE",
//     venue: "Moscow Center",
//     locationheading: "LOCATION",
//     location: "San Francisco, CA",
//   },
//   {
//     dateheading: "DATE",
//     date: "Wed Dec 18 2024",
//     venueheading: "VENUE",
//     venue: "Press Club",
//     locationheading: "LOCATION",
//     location: "San Francisco, CA",
//   },
// ];

import { getApiCall } from "./band-site-api.js";
const shows = await getApiCall.getShow();
console.log(shows);

function convertDate(Timestamp) {
  const date = new Date(Timestamp);
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}

function createShowsCard(show) {
  const container = document.getElementById("shows-container");
  const showDiv = document.createElement("div");
  showDiv.classList.add("show-card");

  const part1Div = document.createElement("div");
  part1Div.classList.add("show-part1");

  const dateHeading = document.createElement("h3");
  dateHeading.innerText = "Date";
  dateHeading.classList.add("show-heading");

  const dateEl = document.createElement("p");
  dateEl.innerText = convertDate(show.date);
  dateEl.classList.add("show-date");

  const part2Div = document.createElement("div");
  part2Div.classList.add("show-part2");

  const venueHeading = document.createElement("h3");
  venueHeading.innerText = "Venue";
  venueHeading.classList.add("show-heading");

  const venueEl = document.createElement("p");
  venueEl.innerText = show.place;
  venueEl.classList.add("show-text");

  const part3Div = document.createElement("div");
  part3Div.classList.add("show-part3");

  const locationHeading = document.createElement("h3");
  locationHeading.innerText = "Location";
  locationHeading.classList.add("show-heading");

  const locationEl = document.createElement("p");
  locationEl.innerText = show.location;
  locationEl.classList.add("show-text");

  const ticketButton = document.createElement("button");
  ticketButton.innerText = "BUY TICKETS";
  ticketButton.classList.add("show-button");

  part1Div.appendChild(dateHeading);
  part1Div.appendChild(dateEl);
  part2Div.appendChild(venueHeading);
  part2Div.appendChild(venueEl);
  part3Div.appendChild(locationHeading);
  part3Div.appendChild(locationEl);

  showDiv.appendChild(part1Div);
  showDiv.appendChild(part2Div);
  showDiv.appendChild(part3Div);
  showDiv.appendChild(ticketButton);

  container.appendChild(showDiv);

  return showDiv;
}

function renderShows() {
  const container = document.querySelector("#shows-container");
  container.innerHTML = "";
  for (let i = 0; i < shows.length; i++) {
    const card = createShowsCard(shows[i]);
    container.appendChild(card);
  }
}
renderShows();
