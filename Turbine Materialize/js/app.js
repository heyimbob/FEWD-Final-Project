 $(document).ready(function(){
      $('.slider').slider();
    });

 $(document).ready(function() {
    $('select').material_select();
  });

// QUIZ JQuery 
$(document).ready(function() {
  console.log($('#quizify'))
  $("#quizify").submit(function(evt) {
    evt.preventDefault(); 
    console.log( $( this ).serialize() );
    var formData = $(this).serializeArray().reduce(function(acc, item){
      var tmp = {};
      tmp[item.name] = item.value;
      return Object.assign({}, acc, tmp);
    }, {});
    console.log(formData.first_name)

    var total = Number(formData.question1)+Number(formData.question2)+Number(formData.question3)+Number(formData.question4);
    console.log(total)

    if(total <= 2) {
      displayadam()
    } else {
      displayjayme()      
    }
  
    $("#quizify").hide()

  }) 

  

});

function displayadam() {
  var adam = '<div id="Adam" class="container coachsection">'+
  '<div class="row">'+
    '<div class="coach left col s12 m4">'+
      '<img class="portrait" src="./images/Adam.jpg" alt="Adam Fernandes">'+

    '</div>'+
    '<div class="right col s12 m8">'+
      '<h1 class="coachname">You got Adam Fernandes!</h1>'+
        '<h4 class="coachtitle">Owner, Head Coach</h4>'+
        '<p>When I discovered Crossfit in 2006 I found my passion. Since then, I spent nearly every moment of my spare time seeking perfection in movement. As I continued to develop as an athlete, I found that helping others gave me just as much excitement as performing the workouts. Now, there are two things that bring me more joy than just about anything else. Seeing a person achieve what they never thought was possible, and seeing those people unite in an effort to make themselves better. My desire is to provide the best possible experience to each and every individual who walks through Turbine’s doors.</p>'+
      '<div class="col s12">'+
        '<a class="waves-effect waves-light btn red darken-4">Contact Adam</a>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>'


$("#trainerslot").html(adam)
}

function displayjayme() {
  var jayme = '<div id="Jayme" class="container coachsection">'+
  '<div class="row">'+
    '<div class="coach left col s12 m4">'+
      '<img class="portrait valign-wrapper" src="./images/Jayme.jpg" alt="Jayme Hefler">'+

    '</div>'+
    '<div class="right col s12 m8">'+
      '<h1 class="coachname">You got Jayme Hefler!</h1>'+
        '<h4 class="coachtitle">Coach</h4>'+
        '<p>I found CrossFit in the summer of 2012 while looking for a different avenue to get stronger for my upcoming junior year of softball at Lewis University. I ended up doing “Karen” as my first workout and fell in love. After the soreness wore off a few days later I headed back into the box and never looked back. CrossFit has not only strengthened my body but it’s also strengthened my spirit and my self-esteem. I love that CrossFit is a community and everyone is pushing each other to get better every single day.'+
            'I have been coaching CrossFit in 2014 and I’m so excited to be a part of the amazing CrossFit Turbine team. I have to say that my favorite part of coaching is seeing people smile after they complete a workout or a movement they never thought they could do. That’s the best.</p>'+
      '<div class="col s12">'+
        '<a class="waves-effect waves-light btn red darken-4">Contact Jayme</a>'+            
      '</div>'+
    '</div>'+
  '</div>'+      
'</div>'


$("#trainerslot").html(jayme)
}





 // Keep At Bottom!

(function($){
  $(function(){

    $('.button-collapse').sideNav();


    
  }); // end of document ready
})(jQuery); // end of jQuery name space 

//  $(document).ready(function(){
//       $('.slider').slider();
//     });

//  $(document).ready(function() {
//     $('select').material_select();
//   });



//  // Keep At Bottom!

// (function($){
//   $(function(){

//     $('.button-collapse').sideNav();

//   }); 

//  // end of document ready
// })(jQuery); // end of jQuery name space 
// >>>>>>> e86caadb3b501be9e9ed9b62f59de277832677cc


$(document).ready(function(){
  $('.parallax').parallax();
});