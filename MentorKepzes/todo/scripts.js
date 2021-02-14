/*
SZÁMLÁLÓ
1. FELADAT
Az Add todo gombra kattintva a szövegdoboz 
tartalma kerüljön a lista végére
*/

$(function(){  // ez a külső függvny azért kell, hogy egyszerre kiderüljön, ha a jQuery nem töltött be

    $('#addToDo').click(()=>{               // ha a gombra kattintunk
        let item = $('#inputField').val();  // az item legyen egyenlő a beviteli mező értékével
                                            // a rendezetlen listához hozzáadjuk egy új elem formájában az itemet
       // csak akkor tudunk beírni valamit, ha nem üres a mező
       if ($('#inputField').val() != '') {
          $('ul').append(`<li>                
                    <span>${item}</span>
                    <img src="images/trash.svg" class="trash" alt="Remove">
                    <img src="images/tick.svg" class="ok" alt="OK">
                </li>`); 
       }
                      
        athuzas();                          // ha már volt valami a listában, azt is lehessen áthúzni
       
        $('.trash').click((event)=>{        // törlés a listából
            $(event.target.parentElement).remove();
        });

    
        kijeloles();

         // reset input field 
        $("#inputField").val('');
    });

    $('.trash').click((event)=>{
        $(event.target.parentElement).remove();
    });

    $('.ok').click((event)=>{        // színezés a listában
        $(event.target.parentElement).css('color', 'MintCream');
    });

    function athuzas() {                    // áthúzó függvény
        $('li').click((event)=>{            // ha egy listaelemre kattintunk, kiváltódik egy esemény
            $(event.target).css('text-decoration','line-through') // amely esemény egy css-ben értelmezett aláhúzás
        });
    }

    function kijeloles() {
        $('.ok').click((event)=>{        // színezés a listában
            let onBit = true; // kapcsoló a listaelemek színezgetéséhez
            if (onBit == true) {
                $(event.target.parentElement).css('color', 'MintCream');
                $(event.target).attr('src', 'images/correct_tick.svg');
                onBit = false;
            } else {
                $(event.target.parentElement).css('color', 'DarkSlateGrey');
                $(event.target).attr('src', 'images/tick.svg');
                onBit = true;
            }
        });
    }

    athuzas(); // fusson az áthúzás függvény az új listaelemekre is
    kijeloles();
});

