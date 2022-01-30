$(document).ready(function () {
    loadPostHtml();
});

const loadPostHtml = function () {
    $('#post-list-container').load(`${HOST_URL}/fragment/post-area.html`);
};
