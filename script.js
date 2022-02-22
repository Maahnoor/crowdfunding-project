$(document).ready(function(){

  let startingAmount = 89914;
  let startingBackers = 5007;
  let progress= startingAmount/1000;
  $('.progress-bar').css('width', progress+'%').attr('aria-valuenow', progress);

  $('.continue-noreward').click(function(){
      startingBackers++;
      $("#backers-total").html(numberWithCommas(startingBackers));

     $('#exampleModalLong').modal('hide');
      $('#exampleModalCenter').modal('show');
  })

    $(".continue").click(function(){

     /////alerts if input pledge is less than the specified amount
 
    if (Number($(this).siblings().eq(1).val()) < Number($(this).siblings().eq(1).attr("value"))) {
        alert("Pledge $" + $(this).siblings().eq(1).attr("value")+ " or more");
        $(this).siblings().eq(1).val('');
        $(this).siblings().eq(1).focus();
    } else{
      startingAmount+=Number($(this).siblings().eq(1).val());
      startingBackers++;
      $("#pledge-total").html('$'+ numberWithCommas(startingAmount));
      $("#backers-total").html(numberWithCommas(startingBackers));

      progress= startingAmount/1000;

      $('.progress-bar').css('width', progress+'%').attr('aria-valuenow', progress);
      $('#exampleModalLong').modal('hide');
      $('#exampleModalCenter').modal('show');
    }   


    })


    // ///////////// change menu icon on click
$('.dropdown').on('hide.bs.dropdown', function () {
 $("#hamburger").attr("src","images/icon-hamburger.svg");
})

    $('.dropdown').on('show.bs.dropdown', function () {
  $("#hamburger").attr("src","images/icon-close-menu.svg");
})
    
// /////////////////shows input form anad adds border to the selected pledge  
$("div.hidden1").hide();
$("input[name$='flexRadioDefault']").click(function() {
  $(this).parent().parent().siblings().removeClass("selected-pledge");
  $(this).parent().parent().addClass("selected-pledge");
        var test = $(this).val();
        $("div.hidden1").hide();

        $(".show" + test).show();
    });





// ///////////////////////// open modal from main body buttons

$(".select-modal").click(function(){

  $("div.hidden1").hide();
  var x= $(this).val();
  $('#flexRadioDefault'+x).attr('checked', true);
  
  $(".show"+x).parent().siblings().removeClass("selected-pledge");
  $(".show"+x).parent().addClass("selected-pledge");
  $(".show"+x).show();
})

$(".bookmark-btn").click(function(){
  if($("#bookmark-img").attr('src')=='images/icon-bookmark.svg'){
    $("#bookmark-img").attr('src','images/icon-bookmarked.svg')
     $(".bookmark-text").html('Bookmarked');
    $(".bookmark-text").css("color","hsl(176, 72%, 28%)");

    $(".bookmark-btn").css("background-color","#F4F8F9");
    if (window.matchMedia('(max-width: 767px)').matches) {
    $(".bookmark-btn").css("width","182px");}

  } else{
    $("#bookmark-img").attr('src','images/icon-bookmark.svg');
     $(".bookmark-text").html('Bookmark');
     if (window.matchMedia('(max-width: 767px)').matches) {
    $(".bookmark-btn").css("width","170px");
}
    $(".bookmark-text").css("color","hsl(0, 0%, 48%)");
  }
})




function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

});

