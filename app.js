document.addEventListener('DOMContentLoaded', function () {
    // Like button functionality
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.classList.add('liked');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.classList.remove('liked');
            }
        });
    });

    // Create new post
    const postBtn = document.getElementById('postBtn');
    const postContent = document.getElementById('postContent');
    const postsContainer = document.getElementById('postsContainer');

    postBtn.addEventListener('click', function () {
        if (postContent.value.trim() === '') return;

        const newPost = document.createElement('div');
        newPost.className = 'post-card bg-white rounded-xl shadow-md overflow-hidden';
        newPost.innerHTML = `
                    <div class="p-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                                    <span>U</span>
                                </div>
                                <div>
                                    <h3 class="font-semibold">You</h3>
                                    <p class="text-gray-500 text-sm">Just now</p>
                                </div>
                            </div>
                            <button class="text-gray-400 hover:text-gray-600">
                                <i class="fas fa-ellipsis-h"></i>
                            </button>
                        </div>
                        
                        <div class="mt-4">
                            <p class="text-gray-700">${postContent.value}</p>
                        </div>
                        
                        <div class="mt-4 flex items-center justify-between text-gray-500">
                            <div class="flex items-center space-x-2">
                                <span>0 likes</span>
                            </div>
                            <div>
                                <span>0 comments</span>
                            </div>
                        </div>
                        
                        <div class="mt-4 pt-4 border-t border-gray-100 flex space-x-2">
                            <button class="like-btn flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-50 transition">
                                <i class="far fa-heart"></i>
                                <span>Like</span>
                            </button>
                            <button class="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-50 transition">
                                <i class="far fa-comment"></i>
                                <span>Comment</span>
                            </button>
                            <button class="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg hover:bg-gray-50 transition">
                                <i class="fas fa-share"></i>
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Comments Section -->
                    <div class="bg-gray-50 px-6 py-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">
                                <span>U</span>
                            </div>
                            <div class="flex-1">
                                <input type="text" placeholder="Write a comment..." class="comment-input w-full px-3 py-2 text-sm border border-gray-200 rounded-full focus:border-purple-500">
                            </div>
                        </div>
                    </div>
                `;

        postsContainer.prepend(newPost);
        postContent.value = '';

        // Add event listener to the new like button
        const newLikeBtn = newPost.querySelector('.like-btn');
        newLikeBtn.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.classList.add('liked');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.classList.remove('liked');
            }
        });
    });

    // Comment functionality
    document.addEventListener('keypress', function (e) {
        if (e.target.classList.contains('comment-input') && e.key === 'Enter' && e.target.value.trim() !== '') {
            const commentInput = e.target;
            const commentContainer = commentInput.closest('.bg-gray-50');
            const commentSection = commentContainer.querySelector('.mb-4') || document.createElement('div');

            if (!commentContainer.querySelector('.mb-4')) {
                commentContainer.insertBefore(commentSection, commentInput.closest('.flex'));
                commentSection.className = 'mb-4';
            }

            const newComment = document.createElement('div');
            newComment.className = 'flex items-start space-x-3';
            newComment.innerHTML = `
                        <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">
                            <span>U</span>
                        </div>
                        <div class="flex-1 bg-white p-3 rounded-lg shadow-sm">
                            <div class="flex justify-between items-start">
                                <h4 class="font-semibold text-sm">You</h4>
                                <span class="text-xs text-gray-400">Just now</span>
                            </div>
                            <p class="text-sm mt-1">${commentInput.value}</p>
                        </div>
                    `;

            commentSection.appendChild(newComment);
            commentInput.value = '';
        }
    });

    // Floating action button
    const createPostBtn = document.getElementById('createPostBtn');
    createPostBtn.addEventListener('click', function () {
        postContent.scrollIntoView({ behavior: 'smooth' });
        postContent.focus();
    });
});