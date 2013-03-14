window.onload = ->
  delay = (ms, func) -> setTimeout func, ms
  delay 4000, -> $('.alert').fadeOut('slow')

  # side bar
  affixTop = $("#nav_top").outerHeight() + $("#nav_main").outerHeight() + $("header").outerHeight() + $(".content h1:first").outerHeight() + parseInt($(".content h1:first").css('marginTop')) + parseInt($(".content h1:first").css('marginBottom'))
  affixBottom = $(".sponsors").outerHeight() + parseInt($("#main_container").css("padding-bottom"))+ parseInt($(".border").css('marginTop'))
  affixHeight = $(".b-affix:first").outerHeight()
  docHeight = $(document).height()
  bottomLimit = docHeight - affixBottom - affixHeight

  setInterval (->
    b_affix()
  ), 1

  b_affix = ->
    curPos = $(window).scrollTop()
    if curPos > affixTop and curPos < bottomLimit
      $(".b-affix").addClass("top")
    else
      $(".b-affix").removeClass("top")

    if curPos > bottomLimit
      $(".b-affix").addClass("bottom")
    else
      $(".b-affix").removeClass("bottom")