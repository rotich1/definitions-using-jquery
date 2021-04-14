$(document).ready(function () {
    $("h5.js").click(function () {
        $("p#js").toggle(2000).fadeOut();
    });
    $("h5.var").click(function () {
        $("p#variable").toggle(1000).fadeIn();
    });
    $("h5.operator").click(function () {
        $("p#operator").toggle(500);
    });
});

