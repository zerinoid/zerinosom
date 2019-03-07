$(document).ready(function() {
	$('#fullpage').fullpage({
		licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
		scrollingSpeed: 1500,
	});

    var color = randomColor({luminosity: 'light', count: 48});
 	$(".pad").each(function () {
        var rand = Math.floor(Math.random() * 48) + 1
        $(this).css("background-color",color[rand]).css("color",color[rand]).css("border-left-color",color[rand]);
    });
});