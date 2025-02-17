const bookmarkImgURL = chrome.runtime.getURL('assets/bookmark.png');

window.addEventListener("load", addBookmarkButton);

function addBookmarkButton(){
    const bookmarkButton = document.createElement('img');
    bookmarkButton.id = "add-bookmark-button";
    bookmarkButton.src = bookmarkImgURL;
    bookmarkButton.style.height = "30px";
    bookmarkButton.style.width = "30px";

    const askDoubtButton = document.getElementsByClassName("coding_ask_doubt_button__FjwXJ")[0];

    askDoubtButton.parentNode.insertAdjacentElement("afterend", bookmarkButton);
}
