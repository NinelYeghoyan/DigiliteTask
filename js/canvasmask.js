(function(){
    var imagecanvas = document.createElement('canvas');
    var imagecontext = imagecanvas.getContext('2d');
    window.addEventListener('load', function(){
        [].forEach.call(document.querySelectorAll('img[data-mask]'), function(img){
            var newImg = document.createElement('img');
            newImg.src = img.src;

            newImg.onload = function() {

                var mask = new Image();

                mask.src = img.getAttribute('data-mask');

                mask.onload = function() {
                    imagecanvas.width  = newImg.width;
                    imagecanvas.height = newImg.height;

                    imagecontext.drawImage(mask, 0, 0, newImg.width, newImg.height);
                    imagecontext.globalCompositeOperation = 'source-atop';
                    imagecontext.drawImage(newImg, 0, 0);

                    img.setAttribute("data-url",img.src);
                    img.src = imagecanvas.toDataURL();
                    img.style.visibility = "inherit";
                }
            }
        });
    }, false);
})();

[].forEach.call(document.querySelectorAll('img[data-mask]'), function(img){
    img.onclick=function(){
        Modal.openModal(img.getAttribute("data-url"));
    };
});
















