function () {

    let currentPhoto = 0;
    let imagesData = [
        {
            photo: 'images/01.jpg',
            title: Bora-Bora,
            description: 'What hapenned here, why is this a very nice image.'
        },
        {
            photo: 'images/02.jpg',
            title: Island,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            photo: 'images/03.jpg',
            title: Sunset,
            description: 'Suscipit itaque fugiat quibusdam amet dolor, natus, pariatur repudiandae illum.'
        }

    ];

    let loadImage = (ind) => {
        $('#photo').attr('src', imagesData[ind].photo);
        $('#photo-title').text(imagesData[ind].title);
        $('#photo-description').text(imagesData[ind].description);
    };

    loadImage(currentPhoto);

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

    imagesData.forEach((item,index) => {
        $('#thumbnails').append(`<div class="thumbnail" data-number="${index}">
                                <img src="${item.photo}" alt="${item.title}"
                                    </div>`);
        $('.thumbnail').click((event)=>{
            let ind = parseInt($(event.target).attr('data-number'));
            loadImage(ind);
        });
        $( "thumbnail" ).mouseover(function(event) {
            $( ".active").text($(event.target).attr('src'));
        });
    });
    
};
