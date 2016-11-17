

var $emoticonsBox = $(".emoticons-box");
var $emotesIcon = $(".emotes a");
var $hoverTextBox = $("<div id='hoverTextBox'>&nbsp;</div>");

//hide emote box
$(document).ready( function() {
  $("div.emoticons-box").hide();
  console.log("hidden");
});

//listen for click on smiley icon
//toggle show or hide for emotes box when smiley is clicked on
$( "span.emotes a" ).click(function( e ) {
  e.preventDefault();
  $("div.emoticons-box").toggle();
  console.log("prevented");
});

//when emote box is shown, channel link should be active


//on hover, show emote title in a box below the emote aka TOOLTIP
$("#emoteList li").each(function() {
  $(this).tooltip()
  $(".ui-helper-hidden-accessible").hide();
});

// $("#emoteList li").each(function() {
//   $(this).mouseenter(function(e){
//     $(this)
//     .after($hoverTextBox);
//     $("#hoverTextBox").css({"background-color":"#333","padding":"10px",'display':'inline-block','font-size':'12px','color':'#fff'})
//     .text($(this).attr("id"));
//     console.log($("#emoteList").val());
//   });
//   $(this).mouseleave(function(e){
//     $hoverTextBox
//     .css({'display':'none'});
//     console.log($("#emoteList").val());
//   });
// });

//listen for click on emote
//when emote is clicked, insert emote name into chat textarea
