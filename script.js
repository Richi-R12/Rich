
// Profile button di navbar bawah
const profileBtnBottom = document.querySelector('.navbar .profile-button');
if (profileBtnBottom) {
  profileBtnBottom.addEventListener('click', () => {
    window.location.href = 'profile.html';
  });
}

// Your Story click event
const yourStoryBtn = document.querySelector('.story--add-story');
if (yourStoryBtn) {
  yourStoryBtn.addEventListener('click', () => {
    window.location.href = 'yourstory.html';
  });
}
