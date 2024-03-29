let currentPhoto = 0;

// tömb a képek adataival
let imagesData = [ 
    {
        photo: 'images/01.jpg',
        title: '01_Bora-Bora',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates voluptatibus nisi eaque illum aut itaque fugit nostrum, accusamus ratione optio placeat, aspernatur quia quasi ipsa sint unde assumenda harum?'
        },
    {
        photo: 'images/02.jpg',
        title: '02_Sunset',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sequi, dolorum cum error earum praesentium eos saepe nesciunt deleniti veniam iste natus, magnam facilis quasi porro voluptas nisi sed officia!'
            
    },
    {
        photo: 'images/03.jpg',
        title: '03_Beach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa neque eum molestiae eligendi, libero architecto perspiciatis aspernatur iste in sint at, ratione harum et eveniet rem. Facilis, repellat magni!'
    },
    {
      photo: 'images/01.jpg',
      title: '04_Bora-Bora',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates voluptatibus nisi eaque illum aut itaque fugit nostrum, accusamus ratione optio placeat, aspernatur quia quasi ipsa sint unde assumenda harum?'
    },
    {
      photo: 'images/02.jpg',
      title: '05_Sunset',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sequi, dolorum cum error earum praesentium eos saepe nesciunt deleniti veniam iste natus, magnam facilis quasi porro voluptas nisi sed officia!'      
    },
    {
      photo: 'images/03.jpg',
      title: '06_Beach',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa neque eum molestiae eligendi, libero architecto perspiciatis aspernatur iste in sint at, ratione harum et eveniet rem. Facilis, repellat magni!'
    },
    {
      photo: 'images/01.jpg',
      title: '07_Bora-Bora',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates voluptatibus nisi eaque illum aut itaque fugit nostrum, accusamus ratione optio placeat, aspernatur quia quasi ipsa sint unde assumenda harum?'
    },
    {
      photo: 'images/02.jpg',
      title: '08_Sunset',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sequi, dolorum cum error earum praesentium eos saepe nesciunt deleniti veniam iste natus, magnam facilis quasi porro voluptas nisi sed officia!'      
    },
    {
      photo: 'images/03.jpg',
      title: '09_Beach',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa neque eum molestiae eligendi, libero architecto perspiciatis aspernatur iste in sint at, ratione harum et eveniet rem. Facilis, repellat magni!'
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
    } else {
    if(currentPhoto = imagesData.length) {
        currentPhoto = 0;
    }}
    loadImage(currentPhoto);
});

$('#la').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;
    } else {
    if(currentPhoto == 0) {
        currentPhoto = imagesData.length;
    }}
    loadImage(currentPhoto);
});

// thumbnail-ek megjelenítése
imagesData.forEach((item,index) => {
    // thumbnail-sorozat generálása
    $('#thumbnails').append(`<div class="thumbnail" data-number="${index}">
                                <img src="${item.photo}" alt="${item.title}" data-number="${index}"
                            </div>`); //a keretre és a képre is kattinthat, ezért ismételjük meg a data-number-t
    // kattintás egy thumbnail-en
    $('.thumbnail').click((event)=>{ //ki kell olvasni, hogy hányadik képen kattintottak
        let photoNumber = parseInt($(event.target).attr('data-number'));
        //parseInt kovnertál stringből számmá
        //let photoNumber = parseInt(indexClicked);
        loadImage(photoNumber);
    });
    // a title jelenjen meg föléhúzáskor - nem működik még
    $( 'thumbnail' ).mouseover(function(event) {
        $('.active').text($(event.target).attr('src'));
    });
});