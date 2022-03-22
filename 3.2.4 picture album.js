let myPicturesArray = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://placehold.it/600/92c952",
        "thumbnailUrl": "https://placehold.it/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://placehold.it/600/771796",
        "thumbnailUrl": "https://placehold.it/150/771796"
    },
    {
        "albumId": 2,
        "id": 51,
        "title": "non sunt voluptatem placeat consequuntur rem incidunt",
        "url": "https://placehold.it/600/8e973b",
        "thumbnailUrl": "https://placehold.it/150/8e973b"
    },
    {
        "albumId": 2,
        "id": 52,
        "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
        "url": "https://placehold.it/600/121fa4",
        "thumbnailUrl": "https://placehold.it/150/121fa4"
    },
    {
        "albumId": 3,
        "id": 127,
        "title": "magnam quia sed aspernatur",
        "url": "https://placehold.it/600/74456b",
        "thumbnailUrl": "https://placehold.it/150/74456b"
    },
    {
        "albumId": 3,
        "id": 128,
        "title": "est facere ut nam repellat numquam quia quia eos",
        "url": "https://placehold.it/600/b0931d",
        "thumbnailUrl": "https://placehold.it/150/b0931d"
    }
    ];

    myPicturesArray.forEach(function(currentImage) {
        let image = document.createElement("img");
        image.src = currentImage.thumbnailUrl;
        image.alt = currentImage.title;
        document.body.append(image);
     });
/*
     to do:
Improve the display, by adding margins (CSS), shadows, border, and changing the URLs for real pictures.
Remember that you need to have a smaller versions of the pictures, i.e., thumbnails.
You can use existing images (images.google.com is your friend) or images you upload somewhere.
Use JavaScript for adding a click event listener on each image, then when clicked, you will show a bigger version of each picture.
For the moment, just change the value of the src attribute of the clicked image
(set it to the URL of the full size image from the array).

Try to make something nicer:
reserve a <div> on the right of the document so to display the clicked image with a bigger size.
In that case, you will need to create an image (only once, after the first click),
to set it to the size of the div (use the width and height attributes of the img element), and to append it to the div.
Try to add more images, and find a way to display them per album.
Create buttons entitled "album1", "album2", etc., and when clicked,
you will only display images from the selected album.

[Advanced] Add an option for deleting a picture.
It should be removed from the document and from the array too
Feel free to add any interesting feature you think about ;-)
*/