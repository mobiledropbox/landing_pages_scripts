// Ron Penones | November 19th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

document.addEventListener("DOMContentLoaded", () => {
    new Plyr('#player');

    setupButtons();
    fetchStars();
    fetchComments();
});

// Dito po iyong mga button click handlers.
function setupButtons() {
    document.getElementById("likeBtn").addEventListener("click", () => {
        openMarkdownNotice("https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/meowtivationhub/notices/likenotice.md"); // Ang likenotice.md i-fe-fetch nya.
    });

    document.getElementById("commentToggle").addEventListener("click", () => {
        openMarkdownNotice("https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/meowtivationhub/notices/commentnotice.md"); // Ang commentnotice.md i-fe-fetch nya.
    });
}

// Mag-di-display po ng MD file.
async function openMarkdownNotice(mdUrl) {
    try {
        const res = await fetch(mdUrl);
        const mdText = await res.text();

        const html = marked.parse(mdText);

        showModal(html);

    } catch (err) {
        console.error("Error loading markdown:", err);
    }
}

// Generic modal siyempre.
function showModal(htmlContent) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    overlay.innerHTML = `
        <div class="modal-content">
            <div class="modal-body">${htmlContent}</div>
            <button class="modal-close">Close</button>
        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".modal-close").onclick = () => overlay.remove();
}


// Fresh star count pero minsan may delay unless i-refresh ang session.
async function fetchStars() {
    try {
        const res = await fetch("https://api.github.com/repos/aeronje/meowtivationhub");
        const data = await res.json();

        document.getElementById("starCount").textContent =
            `⭐ Repo Stars: ${data.stargazers_count || 0}`;
    } catch (err) {
        console.error("Error fetching stars:", err);
    }
}


// Ni-sliced ko lang sa 5 kasi pag ni-view sa mobile sobrang dugyot pag mahaba ang comment section.
async function fetchComments() {
    try {
        const res = await fetch("https://api.github.com/repos/aeronje/meowtivationhub/issues/1/comments");
        const comments = await res.json();

        const latest = comments.slice(-5).reverse();
        const container = document.getElementById("commentList");
        container.innerHTML = "";

        latest.forEach(c => {
            const div = document.createElement("div");
            div.className = "comment-item";
            div.innerHTML = `
                <p class="comment-author">🐱 ${c.user?.login}</p>
                <p class="comment-body">${c.body}</p>
                <hr/>
            `;
            container.appendChild(div);
        });

    } catch (err) {
        console.error("Error fetching comments:", err);
    }
}
