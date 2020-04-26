function handleBackgroundSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.

    f = files[0];
      // Only process image files.
      if (!f.type.match('image.*')) {
        return;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
            var card = document.getElementById('background');
            card.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+ e.target.result + ")";
            var innerCard = document.getElementById("background-inner-card");
            innerCard.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(" + e.target.result + ")";
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
}

function handleAvatarSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.

    f = files[0];
      // Only process image files.
      if (!f.type.match('image.*')) {
        return;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
            var card = document.querySelector('.avatar');
            card.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+ e.target.result + ")";
            var innerCard = document.getElementById("background-inner-card");
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
}

document.getElementById('changeBackground').addEventListener('change', handleBackgroundSelect, false);
document.getElementById("changeAvatar").addEventListener("change", handleAvatarSelect, false);