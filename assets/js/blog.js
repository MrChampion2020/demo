

document.addEventListener("DOMContentLoaded", () => {
 const posts = [
   {
     id: 1,
     title: "Exploring the Beauty of Nature",
     date: "2024-10-25",
     author: "John Doe",
     content: "Discover the beauty of nature with breathtaking photos and insights...",
     image: "../assets/img/blog-2.jpg",
     video: null
   },
   {
     id: 2,
     title: "The Future of Technology",
     date: "2024-10-26",
     author: "Jane Smith",
     content: "Explore the trends and innovations shaping tomorrow's world...",
     image: "../assets/img/blog-1.jpg",
     video: null
   },
   {
     id: 3,
     title: "Understanding Artificial Intelligence",
     date: "2024-10-30",
     author: "Michael Lee",
     content: "Learn about AI and its potential impacts across industries...",
     image: "../assets/img/blog-3.jpg",
     video: null
   },
   {
    id: 4,
    title: "Understanding Artificial Intelligence",
    date: "2024-10-30",
    author: "Michael Lee",
    content: "Learn about AI and its potential impacts across industries...",
    image: "../assets/img/blog-3.jpg",
    video: null
  },
  {
   id: 5,
   title: "Understanding Artificial Intelligence",
   date: "2024-10-30",
   author: "Michael Lee",
   content: "Learn about AI and its potential impacts across industries...",
   image: "../assets/img/blog-3.jpg",
   video: null
 },
 {
  id: 6,
  title: "Understanding Artificial Intelligence",
  date: "2024-10-30",
  author: "Michael Lee",
  content: "Learn about AI and its potential impacts across industries...",
  image: "../assets/img/blog-3.jpg",
  video: null
},
{
 id: 7,
 title: "Understanding Artificial Intelligence",
 date: "2024-10-30",
 author: "Michael Lee",
 content: "Learn about AI and its potential impacts across industries...",
 image: "../assets/img/blog-3.jpg",
 video: null
}
 ];

 const postsContainer = document.getElementById("posts-container");
 const postContainer = document.getElementById("post-container");
 const urlParams = new URLSearchParams(window.location.search);
 const postId = parseInt(urlParams.get("id"), 10);

 if (postsContainer) {
   posts.forEach(post => {
     const postDiv = document.createElement("div");
     postDiv.classList.add("blog-post-preview");

     postDiv.innerHTML = `
      ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
       <h2>${post.title}</h2>
       <p class="date">Date: ${post.date}</p>
       <p class="author">By ${post.author}</p>
       <p>${post.content.substring(0, 100)}...</p>
      
       <div class="action-buttons">
         <button class="view-button"><a href="../blog/view.html?id=${post.id}">Read More</a></button>
         <button class="like-button">Like</button>
         <button class="comment-button">Comment</button>
       </div>
     `;
     postsContainer.appendChild(postDiv);
   });
 }

 if (postContainer && postId) {
   const post = posts.find(p => p.id === postId);

   if (post) {
     postContainer.innerHTML = `
       <div class="post-detail-content">
        ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
         ${post.video ? `<video src="${post.video}" controls></video>` : ''}
         <h2>${post.title}</h2>
         <p class="date">Date: ${post.date}</p>
         <p class="author">By ${post.author}</p>
         <p>${post.content}</p>
         
           <button class="like-button">Like</button>
           <button class="comment-button">Comment</button>
         </div>
       </div>
     `;
   } else {
     postContainer.innerHTML = "<p>Post not found.</p>";
   }
 }

 // Animation for blog posts
 gsap.from(".blog-post-preview, .post-detail-content", {
   opacity: 0,
   y: 30,
   duration: 1,
   stagger: 0.2
 });
});
