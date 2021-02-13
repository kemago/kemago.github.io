/*
SZÁMLÁLÓ
1. FELADAT
Az Add todo gombra kattintva a szövegdoboz 
tartalma kerüljön a lista végére
*/

$(function(){

    $('#addToDo').click(()=>{
        let item = $('#inputField').val();
        $('ul').append(`<li>${item}</li>`);
        athuzas();
    });

    function athuzas() {
        $('li').click((event)=>{
            $(event.target).css('text-decoration','line-through')
        });
    }

    athuzas();

});
