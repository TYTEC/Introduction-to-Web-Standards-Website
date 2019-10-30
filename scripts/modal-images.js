/**
 * Code from W3School for modal images.
 * Source: https://www.w3schools.com/howto/howto_css_modal_images.asp
 *
 * Modifications to original code: replicated 3 times for the 3 images requiring modals.
 * Modifications by Adam Jaamour
 */

// Figure 1 Modal

// Get the modal
const modal1 = document.getElementById("modal-html-code-comparison");
// Get the image and insert it inside the modal and use its "alt" text as a caption
const image1 = document.getElementById("fig-html-code-comparison");
const modalImg1 = document.getElementById("modal-img-html-code-comparison");
const modelCaptionText1 = document.getElementById("caption-html-code-comparison");
image1.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = this.src;
    modelCaptionText1.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
};

// Figure 2 Modal

// Get the modal
const modal2 = document.getElementById("modal-browser-wars");
// Get the image and insert it inside the modal and use its "alt" text as a caption
const image2 = document.getElementById("fig-browser-wars");
const modalImg2 = document.getElementById("modal-img-browser-wars");
const modelCaptionText2 = document.getElementById("caption-browser-wars");
image2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    modelCaptionText2.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
const span2 = document.getElementsByClassName("close")[1];
// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
};

// Figure 3 Modal

// Get the modal
const modal3 = document.getElementById("modal-W3C-recommendations");
// Get the image and insert it inside the modal and use its "alt" text as a caption
const image3 = document.getElementById("fig-W3C-recommendations");
const modalImg3 = document.getElementById("modal-img-W3C-recommendations");
const modelCaptionText3 = document.getElementById("caption-W3C-recommendations");
image3.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    modelCaptionText3.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
const span3 = document.getElementsByClassName("close")[2];
// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
    modal3.style.display = "none";
};
