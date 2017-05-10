$( document ).ready(function() {
$('.legal-container').hide("slow")
$('.chuck-container').hide("slow")
$('.quiz-container').hide("slow")
$('.diamonds-container').show("slow")
$('.me').fadeIn(40000)
});


//When you click on 21 Diamonds it will hide the other projects and show 21 Diamonds
$('.tdd').on('click', () => {
$('.legal-container').hide("slow")
$('.chuck-container').hide("slow")
$('.quiz-container').hide("slow")
$('.diamonds-container').show("slow")
})

//When you click on Chuck norris jokes hide other projects and show that one

$('.facts').on('click', () => {
$('.legal-container').hide("slow")
$('.quiz-container').hide("slow")
$('.diamonds-container').hide("slow")
$('.chuck-container').show("slow")

})

$('.dom').on('click', () => {
$('.legal-container').hide("slow")
$('.diamonds-container').hide("slow")
$('.chuck-container').hide("slow")
$('.quiz-container').show("slow")

})

$('.legal').on('click', () => {
$('.diamonds-container').hide("slow")
$('.chuck-container').hide("slow")
$('.quiz-container').hide("slow")
$('.legal-container').show("slow")


})