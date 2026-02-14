// js/blog.js
document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');
    const postContainer = document.getElementById('post-content');
    
    // Check if we are on the listing page
    if(blogContainer) {
        fetch('data/blog.json')
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const card = document.createElement('div');
                    card.className = 'blog-card';
                    card.innerHTML = `
                        <div class="blog-date">${post.date}</div>
                        <h3 class="blog-title">${post.title}</h3>
                        <p>${post.summary}</p>
                        <br>
                        <a href="post.html?id=${post.id}" class="read-more">Read Article →</a>
                    `;
                    blogContainer.appendChild(card);
                });
            })
            .catch(error => console.error('Error loading blog posts:', error));
    }

    // Check if we are on a single post page
    if(postContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');

        fetch('data/blog.json')
            .then(response => response.json())
            .then(posts => {
                const post = posts.find(p => p.id == postId);
                if(post) {
                    document.getElementById('post-title').innerText = post.title;
                    document.getElementById('post-date').innerText = post.date;
                    postContainer.innerHTML = post.content;
                } else {
                    postContainer.innerHTML = "<p>Post not found.</p>";
                }
            })
            .catch(error => console.error('Error loading blog post:', error));
    }
});
