//= require jquery
//= require jquery.timeTo.min

$(document).ready(function(){
  // $('#flipTimer').timeTo({
  //     timeTo: new Date(2015, 1, 28, 23, 59),
  //     displayDays: 2,
  //     theme: "black",
  //     displayCaptions: true,
  //     fontSize: 44,
  //     captionSize: 14,
  //     lang: 'ru'
  // });
  SliderColleagues();

  $('input[name="radioFace"]').change(function(){
    if($('input[name="radioFace"]:checked').val() == 'forFizicFace')
    {
      $('.forYuricFace').hide();
      $('.forFizicFace').show();
    }
    else{
      if($('input[name="radioFace"]:checked').val() == 'forYuricFace')
      {
        $('.forFizicFace').hide();
        $('.forYuricFace').show();
      }
    }
  }).change();
});
function SliderColleagues(){
    var $nextControl = $('.slider_colleagues .controls.next');
    var $previewControl = $('.slider_colleagues .controls.preview');
    var $sliderBox = $('.slider_colleagues .slider_big_box');
    var $elements = $sliderBox.find('.item');
    var elementCount = $elements.length;
    var index = 0;

    $nextControl.click(nextSlide);
    $previewControl.click(previewSlide);

    function nextSlide(){
        index ++;
        if(index >= elementCount - 3) {
            index = 0;
        }
        $sliderBox.animate({
            marginLeft: '-' + index * 202 + 'px'
        }, 300);
    }
    function previewSlide(){
        index--;
        if(index == -1)
            index = elementCount-4;
        $sliderBox.animate({
            marginLeft: '-' + index * 202 + 'px'
        }, 300);
    }
}

function changeTicketPrice(value) {
  var price = $('#ticketPrice');
  price.html(value * price.data('price'));
  changeAllPrice();
}

function changeAfterpartyPrice(value) {
  var price = $('#afterpartyPrice');
  price.html(value * price.data("price"));
  changeAllPrice();
}

function changeAllPrice() {
  var all = $('#allPrice');
  var priceTicket =  parseInt($('#ticketPrice').html());
  var priceAfterparty =  parseInt($('#afterpartyPrice').html());
  all.html(priceTicket + priceAfterparty);
}

$(document).ready(function(){
  $('.popup .close_window, .overlay').click(function (){
    $('.popup, .overlay').css('opacity','0');
    $('.popup, .overlay').css('visibility','hidden');
  });
});

function lal(id)
  {
    $('#'+id).css('opacity','1');
    $('.overlay').css('opacity','1');
    $('#'+id).css('visibility','visible');
    $('.overlay').css('visibility','visible');
  }
