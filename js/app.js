
$("#simple").on("click",_=>{
    $("#Simple").removeClass("d-none");
    $("#bookmarks").addClass("d-none");
    $("#sharing").addClass("d-none");
    
    $("#simple").addClass("active");
    $("#speedy").removeClass("active");
    $("#easy").removeClass("active");
})

$("#speedy").on("click",_=>{
    $("#Simple").addClass("d-none");
    $("#bookmarks").removeClass("d-none");
    $("#sharing").addClass("d-none");

    $("#simple").removeClass("active");
    $("#speedy").addClass("active")
    $("#easy").removeClass("active");
})
$("#easy").on("click",_=>{
    $("#Simple").addClass("d-none");
    $("#bookmarks").addClass("d-none");
    $("#sharing").removeClass("d-none");


    $("#simple").removeClass("active");
    $("#speedy").removeClass("active")
    $("#easy").addClass("active");
})

  $(".navbar-toggler").on("click", function() {
    if ($(this).hasClass("collapsed")) {
        $(".navbar-nav").slideUp(500);
        $("#nav-icon").attr('src','./images/icon-hamburger.svg');
        $(".social-nav").addClass('d-none');
        $(".logo").removeClass("footer-logo");
      console.log("collapsed");
    } else {
        $(".navbar-nav").addClass('navshow').slideDown(500);
        $("#nav-icon").attr('src','./images/icon-close.svg');
        $(".social-nav").removeClass('d-none');
        $(".logo").addClass("footer-logo");
      console.log("not collapsed");
    }
  });
  $(window).on("scroll", function(){
    if($(".navbar-nav").hasClass("navshow")){
        $(".navbar-nav").slideUp(500);
        $("#nav-icon").attr('src','./images/icon-hamburger.svg');
        $(".social-nav").addClass('d-none');
        $(".logo").removeClass("footer-logo");
    }
  })

let lists = [
    {
       "userId": 1,
       "id": 1,
       "title": "What is Bookmark?",
       "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
        "userId" : 2,
        "id": 2,
        "title": " How can I request a new browser?",
        "body": " Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    },
    {
        "userId": 3,
        "id": 3,
        "title": "Is there a mobile app?",
        "body": "  Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
        "userId":4,
        "id": 4,
        "title": "What about other Chromium browsers?",
        "body": "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
]

lists.map(list=>{
    $(".FAQs").append(`
   <div class="border-bottom faq-item" id="${list.id}">
    <div class="d-flex justify-content-between align-items-center py-3">
        <p class="mb-0 faq-title">
            ${list.title}
        </p>
        <i class="fa fa-angle-down faq-icon"></i>
    </div>
    <div class="faq-body border-bottom pb-3">
        <small>
            ${list.body}
        </small>
    </div>
   </div>
    `)
})

$(".faq-item").click(function(el){

    $(".faq-body").slideUp(500);
    $(".faq-icon").removeClass("rotate text-danger");

    $(this).children(".faq-body").slideToggle(500);
    $(this).find(".faq-icon").toggleClass("rotate text-danger");
     
})



// <------email error------>

$("form").on("submit",(e)=>{
    e.preventDefault();
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regEx.test($("#email").val())){
        alert("Already send email!")
        $("#email").val("") 
    }else{
        $("#email").addClass('error');
        $('.error-message').removeClass('d-none')
    }
})
$("#email").on('keyup',function(){
    $(this).removeClass('error')
    $('.error-message').addClass('d-none')

})