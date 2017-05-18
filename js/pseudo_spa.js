function page_feed() {
    let page = document.querySelector("#page1");

    page.innerHTML = ``;

    $("#page1").load("feed.html");

    $(document).ready(function() {
        $('ul.tabs').tabs();
    });

    loadCards();
}

function page_map() {
    let page = document.querySelector("#page1");

    page.innerHTML = '';

    $("#page1").load("map.html");

    $(document).ready(function() {
        $('ul.tabs').tabs();
    });
}