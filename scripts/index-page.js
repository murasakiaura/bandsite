// const comments = [
//   {
//     name: "Victor Pinto",
//     date: "11/02/2023",
//     text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Christina Cabrera",
//     date: "10/28/2023",
//     text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Isaac Tadesse",
//     date: "10/20/2023",
//     text: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
//   },
// ];

import { getApiCall } from "./band-site-api.js";

async function getComments() {
  try {
    const comments = await getApiCall.getComment();
    comments.sort((a, b) => b.timestamp - a.timestamp);
    renderComments(comments);
  } catch (error) {
    console.log(error);
  }
}

function convertDate(Timestamp) {
  const date = new Date(Timestamp);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return date.toLocaleDateString(undefined, options);
}

function createCommentCard(comment) {
  const container = document.getElementById("comments-container");
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment-card");

  const part1Div = document.createElement("div");
  part1Div.classList.add("comment-part1");

  const imgEl = document.createElement("img");
  imgEl.style.width = "2.25rem";
  imgEl.style.height = "2.25rem";
  imgEl.style.borderRadius = "50%";
  imgEl.style.backgroundColor = "#E1E1E1";
  imgEl.classList.add("comment-img");

  const heading = document.createElement("h3");
  heading.innerText = comment.name;

  const dateEl = document.createElement("p");
  dateEl.innerText = convertDate(comment.timestamp);
  dateEl.classList.add("comment-date");

  const textEl = document.createElement("p");
  textEl.innerText = comment.comment;

  const part2Div = document.createElement("div");
  part2Div.classList.add("comment-part2");

  const part3Div = document.createElement("div");
  part3Div.classList.add("comment-part3");

  const part4Div = document.createElement("div");
  part4Div.classList.add("comment-part4");

  part1Div.appendChild(imgEl);
  part2Div.appendChild(heading);
  part2Div.appendChild(dateEl);
  part3Div.appendChild(textEl);

  part4Div.appendChild(part2Div);
  part4Div.appendChild(part3Div);

  commentDiv.appendChild(part1Div);
  commentDiv.appendChild(part4Div);

  container.appendChild(commentDiv);

  return commentDiv;
}

function renderComments(comments) {
  const container = document.querySelector("#comments-container");
  container.innerHTML = "";
  for (let i = 0; i < comments.length; i++) {
    const card = createCommentCard(comments[i]);
    container.appendChild(card);
  }
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const cardData = {
    name: event.target.fullName.value,
    //date: new Date().toLocaleDateString(),
    comment: event.target.comments.value,
  };

  console.log(cardData);
  try {
    const response = await getApiCall.postComment(cardData);
    console.log(response);

    if (response === 200) {
      getComments();
    }

    event.target.fullName.value = "";
    event.target.comments.value = "";
  } catch (error) {
    console.log(error);
  }
}

const formEl = document.querySelector("#comment-form");
formEl.addEventListener("submit", handleFormSubmit);

document.addEventListener("DOMContentLoaded", () => {
  getComments();
});
