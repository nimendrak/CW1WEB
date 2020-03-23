//slideShow #5
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides1");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

// when user clicks on the oldKingdomImages, sideshow #1 window will popup
document.getElementById("oldKingdom").addEventListener("click", oldKingdom);

// when user clicks on the mountainsImage, sideshow #2 window will popup
document.getElementById("culture").addEventListener("click", culture);

// when user clicks on the mountainsImage, sideshow #3 window will popup
document.getElementById("mountains").addEventListener("click", mountains);

// when user clicks on the forestsImage, sideshow #4 window will popup
document.getElementById("forests").addEventListener("click", forests);

// when user clicks on the beachesImage, sideshow #5 window will popup
document.getElementById("beaches").addEventListener("click", beaches);

// when the user clicks on (x), close the student04_images container
document.getElementById("closeID").addEventListener("click", function () {
    document.getElementById("imagesContainerID").style.display="none";
});

//get the user selected destination from the drop down menu
document.getElementById("go").addEventListener("click", function () {
    const option = document.getElementById("destinationOptions").value;
    if (option==="pathwaysToOldKingdom") {
        oldKingdom();
    } else if (option==="fascinatedCulture") {
        culture();
    } else if (option==="mistyMountains") {
        mountains();
    } else if (option==="greenyforests") {
        forests();
    } else if (option==="saltyBeaches") {
        beaches();
    } else {
        document.getElementById("imagesContainerID").style.display="none";
    }
});

function mountains() {
    document.getElementById('slideShowPhoto1').src="student04_images/slideshow/mountains/badulla.jpg";
    document.getElementById('slideShowPhotoPreview1').src="student04_images/slideshow/mountains/badullaPreview.jpg";
    document.getElementById('slideShowPhotoPreview1').alt="One of untouched Treasures that can be found in the up-country of Sri Lanka";

    document.getElementById('slideShowPhoto2').src="student04_images/slideshow/mountains/kallebokka.jpg";
    document.getElementById('slideShowPhotoPreview2').src="student04_images/slideshow/mountains/kallebokkaPreview.jpg";
    document.getElementById('slideShowPhotoPreview2').alt="Kallebokka viewpoint is one of the best viewpoints in Sri Lanka which gives 360 magnificent views of the Kandy, Matale and the beautiful Knuckles Mountain Range";

    document.getElementById('slideShowPhoto3').src="student04_images/slideshow/mountains/kallebokka2.jpg";
    document.getElementById('slideShowPhotoPreview3').src="student04_images/slideshow/mountains/kallebokka2Preview.jpg";
    document.getElementById('slideShowPhotoPreview3').alt="Another magnificent photo captured at the Kallebokka viewpoint ";

    document.getElementById('slideShowPhoto4').src="student04_images/slideshow/mountains/knuckles.jpg";
    document.getElementById('slideShowPhotoPreview4').src="student04_images/slideshow/mountains/knuckclesPreview.jpg";
    document.getElementById('slideShowPhotoPreview4').alt="Misty mountains in Knuckles";

    document.getElementById('slideShowPhoto5').src="student04_images/slideshow/mountains/badulla2.jpg";
    document.getElementById('slideShowPhotoPreview5').src="student04_images/slideshow/mountains/badulla2Preview.jpg";
    document.getElementById('slideShowPhotoPreview5').alt="Avalanche of mist falling through the mountains of Matale";

    document.getElementById('slideShowPhoto6').src="student04_images/slideshow/mountains/riverston.jpg";
    document.getElementById('slideShowPhotoPreview6').src="student04_images/slideshow/mountains/riverstonPreview.jpg";
    document.getElementById('slideShowPhotoPreview6').alt="One of a kind sun rise that you can find middle of the Riverston";

    document.getElementById("imagesContainerID").style.display="block";
}

function beaches() {
    document.getElementById('slideShowPhoto1').src="student04_images/slideshow/beaches/dondaraBeach2.jpg";
    document.getElementById('slideShowPhotoPreview1').src="student04_images/slideshow/beaches/dondaraBeach2Preview.jpg";
    document.getElementById('slideShowPhotoPreview1').alt="A Mighty lighthouse captured at Dondara Beach";

    document.getElementById('slideShowPhoto2').src="student04_images/slideshow/beaches/dondaraBeach.jpg";
    document.getElementById('slideShowPhotoPreview2').src="student04_images/slideshow/beaches/dondaraBeachPreview.jpg";
    document.getElementById('slideShowPhotoPreview2').alt="Epic scenario caught at Dondara Beach";

    document.getElementById('slideShowPhoto3').src="student04_images/slideshow/beaches/rannaBeach.jpg";
    document.getElementById('slideShowPhotoPreview3').src="student04_images/slideshow/beaches/rannaBeachPreview.jpg";
    document.getElementById('slideShowPhotoPreview3').alt="Fisherman getting off to work early in the morning, Captured at Ranna Beach";

    document.getElementById('slideShowPhoto4').src="student04_images/slideshow/beaches/tangalleBeachjpg.jpg";
    document.getElementById('slideShowPhotoPreview4').src="student04_images/slideshow/beaches/tangalleBeachPreview.jpg";
    document.getElementById('slideShowPhotoPreview4').alt="Southern coast of Sri Lanka, Captured at Weligama";

    document.getElementById('slideShowPhoto5').src="student04_images/slideshow/beaches/dondaraBeach4.jpg";
    document.getElementById('slideShowPhotoPreview5').src="student04_images/slideshow/beaches/dondaraBeach4Preview.jpg";
    document.getElementById('slideShowPhotoPreview5').alt="Beautiful sunset captured at Dondara Beach";

    document.getElementById('slideShowPhoto6').src="student04_images/slideshow/beaches/dondaraBeach3.jpg";
    document.getElementById('slideShowPhotoPreview6').src="student04_images/slideshow/beaches/dondaraBeach3Preview.jpg";
    document.getElementById('slideShowPhotoPreview6').alt="One of the biggest lighthouses of Sri Lanka located in Southern Coast, Captured at Habaraduwa";

    document.getElementById("imagesContainerID").style.display="block";
}

function forests() {
    document.getElementById('slideShowPhoto1').src="student04_images/slideshow/forests/ramboda.jpg";
    document.getElementById('slideShowPhotoPreview1').src="student04_images/slideshow/forests/rambodaPreview.jpg";
    document.getElementById('slideShowPhotoPreview1').alt="Beautiful scenario which can be caught at Ramboda State";

    document.getElementById('slideShowPhoto2').src="student04_images/slideshow/forests/kadiyanlena.jpg";
    document.getElementById('slideShowPhotoPreview2').src="student04_images/slideshow/forests/kadiyanlenaPreview.jpg";
    document.getElementById('slideShowPhotoPreview2').alt="Fascinating waterfall that you can find in Kadiyangala";

    document.getElementById('slideShowPhoto3').src="student04_images/slideshow/forests/narampanawa.jpg";
    document.getElementById('slideShowPhotoPreview3').src="student04_images/slideshow/forests/narampanawaPreview.jpg";
    document.getElementById('slideShowPhotoPreview3').alt="A tuk tuk passing through a tea estate in Narampanawa surrounded by a natural forest";

    document.getElementById('slideShowPhoto4').src="student04_images/slideshow/forests/riverston.jpg";
    document.getElementById('slideShowPhotoPreview4').src="student04_images/slideshow/forests/riverstonPreview.jpg";
    document.getElementById('slideShowPhotoPreview4').alt="Another beautiful waterfall captured at Riverston";

    document.getElementById('slideShowPhoto5').src="student04_images/slideshow/forests/kallebokka.jpg";
    document.getElementById('slideShowPhotoPreview5').src="student04_images/slideshow/forests/kallebokkaPreview.jpg";
    document.getElementById('slideShowPhotoPreview5').alt="Kallebokka view point with a majestic sunset";

    document.getElementById('slideShowPhoto6').src="student04_images/slideshow/forests/knuckles.jpg";
    document.getElementById('slideShowPhotoPreview6').src="student04_images/slideshow/forests/knucklesPreview.jpg";
    document.getElementById('slideShowPhotoPreview6').alt="A misty morning in the Knuckles mountain range";

    document.getElementById("imagesContainerID").style.display="block";
}

function culture() {
    document.getElementById('slideShowPhoto1').src="student04_images/slideshow/culture/sigiriya.jpg";
    document.getElementById('slideShowPhotoPreview1').src="student04_images/slideshow/culture/sigiriyaPreview.jpg";
    document.getElementById('slideShowPhotoPreview1').alt="Majestic Sigiriya rock on a beautiful morning";

    document.getElementById('slideShowPhoto2').src="student04_images/slideshow/culture/perahera.jpg";
    document.getElementById('slideShowPhotoPreview2').src="student04_images/slideshow/culture/peraheraPreview.jpg";
    document.getElementById('slideShowPhotoPreview2').alt="Beautiful shot caught at Kandy Esala Perahera";

    document.getElementById('slideShowPhoto3').src="student04_images/slideshow/culture/fishermen.jpg";
    document.getElementById('slideShowPhotoPreview3').src="student04_images/slideshow/culture/fishermenPreview.jpg";
    document.getElementById('slideShowPhotoPreview3').alt="Group of fishermen starting their day at dawn";

    document.getElementById('slideShowPhoto4').src="student04_images/slideshow/culture/mask.jpg";
    document.getElementById('slideShowPhotoPreview4').src="student04_images/slideshow/culture/maskPreview.jpg";
    document.getElementById('slideShowPhotoPreview4').alt="Unique kind of cravings that can be found in Ambalangoda";

    document.getElementById('slideShowPhoto5').src="student04_images/slideshow/culture/dalada.jpg";
    document.getElementById('slideShowPhotoPreview5').src="student04_images/slideshow/culture/daladaPreview.jpg";
    document.getElementById('slideShowPhotoPreview5').alt="Temple of Tooth otherwise known as Heart of the up-country, Sri Lanka";

    document.getElementById('slideShowPhoto6').src="student04_images/slideshow/culture/dancers.jpg";
    document.getElementById('slideShowPhotoPreview6').src="student04_images/slideshow/culture/dancersPreview.jpg";
    document.getElementById('slideShowPhotoPreview6').alt="Traditional Dancers of Sri Lanka";

    document.getElementById("imagesContainerID").style.display="block";
}

function oldKingdom() {
    document.getElementById('slideShowPhoto1').src="student04_images/slideshow/oldKingdom/galleFort.jpg";
    document.getElementById('slideShowPhotoPreview1').src="student04_images/slideshow/oldKingdom/galleFortPreview.jpg";
    document.getElementById('slideShowPhotoPreview1').alt="Galle Fort in the Bay of Galle on the southwest coast of Sri Lanka, was built first in" +
        "1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards. It is a historical," +
        "archaeological and architectural heritage monument, which even after more than 432 years maintains a polished appearance, " +
        "due to extensive reconstruction work done by Archaeological Department of Sri Lanka.";

    document.getElementById('slideShowPhoto2').src="student04_images/slideshow/oldKingdom/dambulla.jpg";
    document.getElementById('slideShowPhotoPreview2').src="student04_images/slideshow/oldKingdom/dambullaPreview.jpg";
    document.getElementById('slideShowPhotoPreview2').alt="Dambulla is the largest and best-preserved cave temple complex in Sri Lanka. The rock towers " +
        "160 m over the surrounding plains. There are more than 80 documented caves in the surrounding area. Major attractions " +
        "are spread over five caves, which contain statues and paintings. These paintings and statues are related to Gautama Buddha and his life." +
        "There are a total of 153 Buddha statues, three statues of Sri Lankan kings and four statues of gods and goddesses. The latter include Vishnu" +
        "and the Ganesha. The murals cover an area of 2,100 square metres (23,000 sq ft). Depictions on the walls of the caves include the temptation by the" +
        "demon Mara, and Buddha's first sermon.";

    document.getElementById('slideShowPhoto3').src="student04_images/slideshow/oldKingdom/adamsPeak.jpg";
    document.getElementById('slideShowPhotoPreview3').src="student04_images/slideshow/oldKingdom/adamsPeakPreview.jpg";
    document.getElementById('slideShowPhotoPreview3').alt="The mountain is located in the southern reaches of the Central " +
        "Highlands in the Ratnapura District and Nuwara Eliya district of the Sabaragamuwa Province and Central Province - lying about 40 km " +
        "northeast of the city of Ratnapura and 32 km southwest of the city of Hatton. The surrounding region is largely forested hills," +
        "with no mountain of comparable size nearby. The region along the mountain is a wildlife reserve, housing many species varying from " +
        "elephants to leopards, and including many endemic species." + "\n" + "Adam's Peak is important as a watershed. The districts to the " +
        "south and the east of Adam's Peak yield precious stones—emeralds, rubies and sapphires, for which the island has been famous, and which" +
        "earned for it the ancient name of Ratnadvipa.";

    document.getElementById('slideShowPhoto4').src="student04_images/slideshow/oldKingdom/ruwanweliseya.jpg";
    document.getElementById('slideShowPhotoPreview4').src="student04_images/slideshow/oldKingdom/ruwanweliseyaPreview.jpg";
    document.getElementById('slideShowPhotoPreview4').alt="The Ruwanwelisaya is a stupa and a hemispherical structure containing relics," +
        "in Sri Lanka, considered sacred to many Buddhists all over the world. Two quarts or one Drona of the Gothama Buddha's relics are" +
        "enshrined in the stupa, which is the largest collection of his relics anywhere.[2] It was built by King Dutugemunu" +
        " c. 140 B.C., who became King of all Sri Lanka after a war in which the Chola King Elāra (Ellalan) was defeated. It is also known" +
        " as \"Mahathupa\", \"Swarnamali Chaitya\", \"Suvarnamali Mahaceti\" (in Pali) and \"Rathnamali Dagaba\".";

    document.getElementById('slideShowPhoto5').src="student04_images/slideshow/oldKingdom/kuttamPokuna.jpg";
    document.getElementById('slideShowPhotoPreview5').src="student04_images/slideshow/oldKingdom/kuttamPokunaPreview.jpg";
    document.getElementById('slideShowPhotoPreview5').alt="One of the best specimen of bathing tanks or pools in ancient Sri Lanka" +
        "is the pair of pools known as Kuttam Pokuna (Twin Ponds/Pools). The said pair of pools were built by the Sinhalese in the ancient kingdom of Anuradhapura." +
        "These are considered one of the significant achievements in the field of hydrological engineering and outstanding architectural and artistic" +
        "creations of the ancient Sinhalese.";

    document.getElementById('slideShowPhoto6').src="student04_images/slideshow/oldKingdom/galWiharaya.jpg";
    document.getElementById('slideShowPhotoPreview6').src="student04_images/slideshow/oldKingdom/galWiharayaPreview.jpg";
    document.getElementById('slideShowPhotoPreview6').alt="This is a group of beautiful Buddha student04_images that probably marks the high point of Sinhalese" +
        "rock carving. They are part of Parakramabahu I’s northern monastery. The Gal Vihara consists of four separate student04_images, all cut from one long slab of granite." +
        "At one time, each was enshrined within a separate enclosure.";

    document.getElementById("imagesContainerID").style.display="block";
}
