let currentPhoto = 0;

// tömb a képek adataival
let imagesData = [ 
    {
        photo: 'images/bora-bora.jpg',
        title: 'Bora-Bora',
        description: 'What happened here, why is this a very nice image.'
        },
    {
        photo: 'images/sunset.jpg',
        title: 'Sunset',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            
    },
    {
        photo: 'images/beach.jpg',
        title: 'Beach',
        description: 'Suscipit itaque fugiat quibusdam amet dolor, natus, pariatur repudiandae illum.'
    }
];

// függvény a képek megjelenítéséhez
// $('#photo').attr('src', imagesData[currentPhoto].photo);

let loadImage = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
};

// a függvény futtatása
loadImage(currentPhoto);

// lapozó függvények
$('#ra').click(() => {
    if(currentPhoto < imagesData.length-1) {
        currentPhoto++;
    }
    loadImage(currentPhoto);
});

$('#la').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;
    }
    loadImage(currentPhoto);
});

// thumbnail-ek megjelenítése
imagesData.forEach((item,index) => {
    // thumbnail-sorozat 
    $('#thumbnails').append(`<div class="thumbnail" data-number="${index}">
                                <img src="${item.photo}" alt="${item.title}"
                            </div>`);
    // kattintás egy thumbnail-en
    $('.thumbnail').click((event)=>{
        let indexClicked = $(event.target).attr('data-number');
        let photoNumber = parseInt(indexClicked);
        loadImage(photoNumber);
    });
    $( '.thumbnail' ).mouseover(function(event) {
        $( ".active").text($(event.target).attr('src'));
    });
});