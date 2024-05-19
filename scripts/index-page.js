const comments = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    text: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
  },
];

function createCommentCard(comment) {
  const container = document.getElementById("comments-container");
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment-card");

  const part1Div = document.createElement("div");
  part1Div.classList.add("comment-part1");

  const imgEl = document.createElement("img");
  //img.src = ''; to be added in later sprint
  imgEl.style.width = "2.25rem";
  imgEl.style.height = "2.25rem";
  imgEl.style.borderRadius = "50%";
  imgEl.style.backgroundColor = "#E1E1E1";
  imgEl.classList.add("comment-img");

  const heading = document.createElement("h3");
  heading.innerText = comment.name;

  const dateEl = document.createElement("p");
  dateEl.innerText = comment.date;
  dateEl.classList.add("comment-date");

  const textEl = document.createElement("p");
  textEl.innerText = comment.text;

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

function renderComments() {
  const container = document.querySelector("#comments-container");

  container.innerHTML = "";

  for (let i = 0; i < comments.length; i++) {
    const card = createCommentCard(comments[i]);
    container.appendChild(card);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const cardData = {
    name: event.target.fullName.value,
    date: new Date().toLocaleDateString(),
    text: event.target.comments.value,
  };

  comments.push(cardData);
  renderComments();

  event.target.fullName.value = "";
  event.target.comments.value = "";
}

const formEl = document.querySelector("#comment-form");
formEl.addEventListener("submit", handleFormSubmit);
renderComments();



// if target.input = {empty string}, select input; add a class of form input.invalid; return the function