/**
 * Created by Garrett on 4/16/2015.
 */

$(document).ready(function(){

    $("#circulation").hover(function(){
        hideAll();
        $("#circulation-info").show();
    });

    $("#ejournal").hover(function(){
        hideAll();
        $("#ejournal-info").show();
    });

    $("#instruction").hover(function(){
        hideAll();
        $("#instruction-info").show();
    });

    $("#sidebar").mouseleave(function(){
        hideAll();
    }).height($(document).height());

    $("#sidebar-items").height($("#sidebar").height() - ($("#sidebar").height() - $("#content").height()));

    $("#sidebar_info").css('left', $("#sidebar").width() + "px").height($("#sidebar").height() - ($("#sidebar").height() - $("#content").height()));

    hideAll();

});

function hideAll(){
    $("#circulation-info").hide().removeClass("hover");
    $("#ejournal-info").hide().removeClass("hover");
    $("#instruction-info").hide().removeClass("hover");

}