    myPicturesArray.forEach(function(currentImage) {
        let image = document.createElement("img");
        image.src = currentImage.thumbnailUrl;
        image.alt = currentImage.title;
        document.body.append(image);
     });