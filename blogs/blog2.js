document.addEventListener('DOMContentLoaded', function () {

    let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    document.getElementById('likeCount').innerText = likeCount;

    displayComments(comments);

    document.getElementById('likeBtn').addEventListener('click', function () {
        likeCount++;
        localStorage.setItem('likeCount', likeCount);
        document.getElementById('likeCount').innerText = likeCount;
    });
});

function addComment() {
    const commentInput = document.getElementById('commentInput');
    const newComment = commentInput.value.trim();

    if (newComment !== '') {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));
        displayComments(comments);
        commentInput.value = '';
    }
}

function displayComments(comments) {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';

    if (comments.length > 0) {
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerText = comment;
            commentsList.appendChild(commentElement);
        });
    }
}
