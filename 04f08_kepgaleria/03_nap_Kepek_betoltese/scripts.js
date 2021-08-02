let currentPhoto = 0;

// tömb a képek adataival
let imagesData = [ 
    {
        photo: 'images/01.jpg',
        title: 'Bora-Bora',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates voluptatibus nisi eaque illum aut itaque fugit nostrum, accusamus ratione optio placeat, aspernatur quia quasi ipsa sint unde assumenda harum?'
        },
    {
        photo: 'images/02.jpg',
        title: 'Sunset',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sequi, dolorum cum error earum praesentium eos saepe nesciunt deleniti veniam iste natus, magnam facilis quasi porro voluptas nisi sed officia!'
            
    },
    {
        photo: 'images/03.jpg',
        title: 'Beach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa neque eum molestiae eligendi, libero architecto perspiciatis aspernatur iste in sint at, ratione harum et eveniet rem. Facilis, repellat magni!'
    },
    {
      photo: 'images/01.jpg',
      title: 'Bora-Bora',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates voluptatibus nisi eaque illum aut itaque fugit nostrum, accusamus ratione optio placeat, aspernatur quia quasi ipsa sint unde assumenda harum?'
    },
    {
      photo: 'images/02.jpg',
      title: 'Sunset',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sequi, dolorum cum error earum praesentium eos saepe nesciunt deleniti veniam iste natus, magnam facilis quasi porro voluptas nisi sed officia!'      
    },
    {
      photo: 'images/03.jpg',
      title: 'Beach',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa neque eum molestiae eligendi, libero architecto perspiciatis aspernatur iste in sint at, ratione harum et eveniet rem. Facilis, repellat magni!'
    },
    {
      photo: 'images/01.jpg',
      title: 'Bora-Bora',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates voluptatibus nisi eaque illum aut itaque fugit nostrum, accusamus ratione optio placeat, aspernatur quia quasi ipsa sint unde assumenda harum?'
    },
    {
      photo: 'images/02.jpg',
      title: 'Sunset',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sequi, dolorum cum error earum praesentium eos saepe nesciunt deleniti veniam iste natus, magnam facilis quasi porro voluptas nisi sed officia!'      
    },
    {
      photo: 'images/03.jpg',
      title: 'Beach',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos culpa neque eum molestiae eligendi, libero architecto perspiciatis aspernatur iste in sint at, ratione harum et eveniet rem. Facilis, repellat magni!'
    }
];

// függvény a képek megjelenítéséhez
// $('#photo').attr('src', imagesData[currentPhoto].photo);

// a függvény felépítése
let loadImage = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
};

// a függvény futtatása (meg kell hívni)
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