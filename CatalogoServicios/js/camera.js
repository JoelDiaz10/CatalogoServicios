cargarFoto: function(pictureSourceType){
        var options = {
                sourceType: pictureSourceType,
                destinationType: Camera.DestinationType.FILE_URI,
                targetWidth: 300,
                targetHeight: 300,
                quality:100,
                correctOrientation: true,
                saveToPhotoAlbum: true,
                cameraDirection: 1,
        };
        navigator.camera.getPicture(app.fotoCargada, app.errorAlTomarFoto,options)
},

fotoCargada: function(imageURI){
                var img = document.createElement('img');
                img.onload = function(){
                        app.pintarFoto(img)
                }
                img.src=imageURI
        },

errorAlTomarFoto: function(message){
        console.log('Fallo al tomar la foto o toma candelada: '+message);
},

var buttonAction = document.querySelector('#button-action');
buttonAction.addEventListener('click', function(){ app.cargarFoto(Camera.PictureSourceType.CAMERA)});
var buttonGallery = document.querySelector('#button-gallery');
buttonGallery.addEventListener('click', function(){ app.cargarFoto(Camera.PictureSourceType.PHOTOLIBRARY)});

