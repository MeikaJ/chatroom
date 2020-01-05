import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQwfU9OH_QU8K9s8VaPwbEEBaxHgv5hXI",
    authDomain: "cats-17222.firebaseapp.com",
    databaseURL: "https://cats-17222.firebaseio.com",
    projectId: "cats-17222",
    storageBucket: "cats-17222.appspot.com",
    messagingSenderId: "1079525237366",
    appId: "1:1079525237366:web:984028ca5ffc25fdab3557",
    measurementId: "G-1VKBR9PHKQ"
};

firebase.initializeApp(firebaseConfig);

function retrieveImage(imagePath, imageElement) {
    console.log("Firebase");

    var storage = firebase.storage();
    var storageRef = storage.ref(imagePath);

    // Create a reference to the file we want to download
    var imageRef = storageRef.child(imagePath);

    // Get the download URL
    storageRef.getDownloadURL().then(function (url) {
        // Insert url into an <img> tag to "download"

        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
            var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

        // Or inserted into an <img> element:
        var img = document.getElementById(imageElement);
        img.src = url;

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        modal.style.display = "block";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
    }).catch(function (error) {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors

        var error;
        switch (error.code) {
            case 'storage/object-not-found':
                error = "img not found";
                break;

            case 'storage/unauthorized':
                error = "user doesn't have permission";
                break;

            case 'storage/canceled':
                error = "user cancelled upload";
                break;

            case 'storage/unknown':
                error = "unknown error occurred";
                break;
        }

        console.log(error);
    });
}


export { retrieveImage }