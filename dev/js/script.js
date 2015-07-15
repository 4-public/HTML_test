jQuery(document).ready(function () {

  // Last note editing
  $('.note-last .text').click(function(){
    var thisObg = $(this);
    $(this).css("display", "none");
    $("<textarea>" + $(this).text() + "</textarea>").attr('id', 'editArea').css({
      width: '100%',
      maxWidth: '100%',
      height: '6em',
      maxHeight: '10em',
      boxSizing: 'border-box',
      border: '1px solid #0798C7',
      fontFamily: 'MyriadProRegular',
      color: '#656565'
    }).insertAfter($(this));

    var btnStyle = {
      border: '1px solid #0798C7',
      color: '#444',
      backgroundColor: 'white'
    };

    $("<button id='applyChanges'>Apply changes</button>").css(btnStyle)
    .on("click", function(){
        $(thisObg)
        .text($('#editArea').val())
        .css("display", "inline");
        $('#editArea').add('#applyChanges').add('#back').remove();
    }).insertAfter($('#editArea'));

    $("<button id='back'>Dont make changes</button>").css(btnStyle).click(function(){
        $(thisObg)
        .css("display", "inline");
        $('#editArea').add('#applyChanges').add('#back').remove();
    }).insertAfter($('#applyChanges'));
  });

 //  Tab "active" icon scr switch on/off
var isActive = function () {
  if ($(this).hasClass('active')) return;
  var srcVal = $(this).children().children('img').attr('src');
  srcVal = srcVal.replace('.', '-active.');
  $(this).children().children('img').attr('src', srcVal);
}
var notActive = function() {
  if ($(this).hasClass('active')) return;
  var srcVal = $(this).children().children('img').attr('src');
  srcVal = srcVal.replace('-active.', '.');
  $(this).children().children('img').attr('src', srcVal);
}
  // Menu tab hover image changes
  $('.tab-item').on('mouseover', isActive);
  $('.tab-item').on('mouseout', notActive);

  // Tabs switch
  $('.tab-item').bind({
    click: function(){
      if ($(this).hasClass('active')) return;
      var $this = this;
      // console.log($('.tab-item.active').children().children('img'));
      var srcVal = $('.tab-item.active img').attr('src');
      srcVal = srcVal.replace('-active.', '.');
      $('.tab-item.active img').attr('src', srcVal);
      $(this).addClass('active').siblings().removeClass('active');
      $($(this).children('a').attr('href')).slideDown(400).siblings().slideUp(400);
    }
  });


  // Input area open
  $('.input-area').focus(function(){
    $(this).css({
      height: '100px',
      overflow: 'auto'
    }).parent().css('height', '100px');
  });
  $('.input-area').blur(function(){
    $(this).css({
      height: '40px',
      overflow: 'hidden'
    }).parent().css('height', '40px');
  });
})

