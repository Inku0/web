//const postsUrl = "https://ingvarruulib.com/posts.json";
const postsUrl = "res/posts.json";

const loadPosts = async () => {
  try {
    const response = await fetch(postsUrl);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    renderError(error);
  }
}

const renderPosts = (posts) => {
  // destroys the existing posts and replaces them with new ones
  const postsContainer = document.getElementById("posts");
  postsContainer.replaceChildren();

  for (const rawPost of posts) {
    const post = document.createElement("article");
    post.className = "post";

    const header = document.createElement("div");
    header.className = "post-header";

    const user = document.createElement("div");

    const userPic = document.createElement("img");
    userPic.className = "user-pfp";
    userPic.alt = `User ${rawPost.author}'s profile picture`;
    userPic.src = rawPost.profilePic.url;

    const userName = document.createElement("h2");
    userName.textContent = rawPost.author;

    const feeling = document.createElement("h3");
    feeling.textContent = `is feeling ${rawPost.feeling}`;

    user.append(userPic, userName, feeling);

    const date = document.createElement("p");
    date.textContent = rawPost.date;

    header.append(user, date);

    const postBody = document.createElement("div");
    postBody.className = "post-body";

    const postMessage = document.createElement("p");
    postMessage.innerHTML = rawPost.body;

    postBody.appendChild(postMessage);

    if (rawPost.bodyPic?.url) {
      const bodyPicture = document.createElement("img");
      bodyPicture.className = "post-pic";
      bodyPicture.alt = "";
      bodyPicture.src = rawPost.bodyPic.url;

      bodyPicture.style.display = "block";
      bodyPicture.style.margin = "0 auto";
      bodyPicture.style.maxWidth = "100%";

      postBody.appendChild(bodyPicture);
    }

    post.append(
      header,
      document.createElement("hr"),
      postBody
    );

    postsContainer.appendChild(post);
  }
}

function renderError(error) {
  const postsContainer = document.getElementById("posts");
  const errorPost = document.createElement("article");
  errorPost.className = "post";

  const errorMessage = document.createElement("p");
  errorMessage.textContent = `Unable to load posts: ${error.message}`;

  errorPost.appendChild(errorMessage);
  postsContainer.appendChild(errorPost);
}

loadPosts().then(r => renderPosts(r));