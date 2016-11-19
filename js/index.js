
var $emoteList = $("#emoteList li");
var $emoticonsBox = $(".emoticons-box");
var $textArea = $("#chat-form")

//hide emote box
$(document).ready( function() {
  $emoticonsBox.hide();
  console.log("hidden");
});

//listen for click on smiley icon
//toggle show or hide for emotes box when smiley is clicked on
$( "span.emotes a" ).click(function( e ) {
  e.preventDefault();
  $emoticonsBox.toggle();
  console.log("prevented");
});

//when emote box is shown, channel link should be active


//on hover, show emote title in a box below the emote aka TOOLTIP
$emoteList.each(function() {
  $(this).tooltip({
    show: {
      effect: 'fade',
      duration: 0
    },
    hide: {
      effect: 'fade',
      duration: 0
    },
    position: {
      my: 'center',
      at: 'top+50'
    }
  })
  $(".ui-helper-hidden-accessible").hide();
});

//listen for click on emote
$emoteList.each( function() {
  $(this).click( function() {
    var $emoteIconTitle = $(this).attr("title");
    $textArea.val($textArea.val() + $emoteIconTitle)
    .focus();
    console.log($emoteIconTitle);
  })
});

//when emote is clicked, insert emote name into chat textarea
//if space before cursor, then insert text without space before
//else insert text with space before
