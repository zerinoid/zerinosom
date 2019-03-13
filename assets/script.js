$(document).ready(function() {
	$('#fullpage').fullpage({
		licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
		scrollingSpeed: 1500,
	});

    var color = randomColor({luminosity: 'light', count: 48});
 	$(".rback").each(function () {
        var rand = Math.floor(Math.random() * 48) + 1
        $(this).css("background-color",color[rand]);
    });
    $(".rtext").each(function () {
        var rand = Math.floor(Math.random() * 48) + 1
        $(this).css("color",color[rand]);
    });
    $(".rborder").each(function () {
        var rand = Math.floor(Math.random() * 48) + 1
        $(this).css("border-left-color",color[rand]);
    });
});