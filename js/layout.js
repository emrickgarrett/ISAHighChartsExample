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
    }).height($(document).height() - $("navbar").height() + "px");

    //Calculate the width for the description space. Document width - the graph space width and the sidebar width
    $("#descrip_space").width(($(document).width() - $("#sidebar").width() - $("#graph_space").width() - 5) + "px");

    //Hide all of the descriptions in the descrip_space
    var divs = $("#descrip_space").children();

    var length = divs.length;

    while(length--){
        divs[length].style.display = "none";
    }

    //Adjust height of the elements to make sure they fit perfectly
    $("#content").height($(document).height() - $("navbar").height() + "px");
    //Sidebar heights
    $("#sidebar-items").height($("#sidebar").height() - ($("#sidebar").height() - $("#content").height()));

    $("#sidebar_info").css('left', $("#sidebar").width() + "px").height($("#sidebar").height() - ($("#sidebar").height() - $("#content").height()));
    //Graph_space heights
    $("#graph_space").height($("#sidebar").height() + "px");

    //Descrip_space height
    $("#descrip_space").height($("#sidebar").height() + "px");


    hideAll();

});

function hideAll(){
    $("#circulation-info").hide().removeClass("hover");
    $("#ejournal-info").hide().removeClass("hover");
    $("#instruction-info").hide().removeClass("hover");

}