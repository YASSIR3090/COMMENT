
const commentBox = document.getElementById('commentBox');
const counter = document.getElementById('counter');
const postBtn = document.getElementById('postBtn');
const commentsDiv = document.getElementById('comments');


commentBox.addEventListener('input', function() {
    const text = commentBox.value;
    const length = text.length;
    
    
    counter.textContent = length + '/200';
    
    
    postBtn.disabled = length === 0 || length > 200;
    
    
    if (length > 180) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'gray';
    }
});


postBtn.addEventListener('click', function() {
    const text = commentBox.value;
    
    
    commentsDiv.innerHTML = `<div class="comment">${text}</div>` + commentsDiv.innerHTML;
    
    
    commentBox.value = '';
    counter.textContent = '0/200';
    postBtn.disabled = true;
    counter.style.color = 'gray';
    
    
    console.log("New comment posted:", text);
});