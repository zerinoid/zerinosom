$(document).ready(function() {
	$('#fullpage').fullpage({
		licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors: ['p1', 'p2', 'p3'],
		scrollingSpeed: 1200,
        controlArrows: true,
	});



    //cor aleatoria
    var num = 15;
    var color = randomColor({luminosity: 'light', count: num});
 	$(".rback").each(function () {
        var rand = Math.floor(Math.random() * num) + 1
        $(this).css("background-color",color[rand]);''
    });
    $(".rtext").each(function () {
        var rand = Math.floor(Math.random() * num) + 1
        $(this).css("color",color[rand]);
    });
    $(".rborder").each(function () {
        var rand = Math.floor(Math.random() * num) + 1
        $(this).css("border-left-color",color[rand]);
    });



    //botao home
    $(document).on('click', '.home', function(){
        fullpage_api.moveTo('p1');
    });
    //botao proximo
     $(document).on('click', '.prox', function(){
        fullpage_api.moveSectionDown();
    });
    //botao anterior
     $(document).on('click', '.ante', function(){
        fullpage_api.moveSectionUp();
    });
    //botao videos
     $(document).on('click', '.vid', function(){
        fullpage_api.moveSlideRight();
    });
    //botao voltar  videos
     $(document).on('click', '.bvid', function(){
        fullpage_api.moveSlideLeft();
    });


     $(".but").hover(
        // mouse in
        function(){
            $(this).css("filter","invert(100%)");
        },
        // mouse out
        function(){
            $(this).css("filter","unset");
        }

    );
});