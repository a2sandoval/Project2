function createCharCard(info) {
    var displayChar = $("<div>").addClass("card horizontal medium");
    var divImage = $("<div>").addClass("card-image");
    var image = "<img src='" + info.image + "'/>";
    divImage.append(image);
    var stacked = $("<div>").addClass("card-stacked");
    var content = $("<div>").addClass("card-content");
    var name = $("<h4>").text(info.name);
    var description = $("<p>").text(info.description);
    content.append(name, description);
    var links = $("<div>").addClass("card-action");
    var view = $("<a>").addClass("blue-text text-darken-2").attr("href", "/character/" + info.id).text("View Character");
    var edit = $("<a>").addClass("blue-text text-darken-2").attr("href", "#").text("Edit Character");
    links.append(view, edit);
    stacked.append(content, links);
    displayChar.append(divImage, stacked);
    return displayChar;
}

function loadAllCharacters() {
    $.ajax({
        method: "GET",
        url: "/api/characters"
    }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
            var newChar = createCharCard(data[i]);
            $("#charsHere").append(newChar);
        }
        var charr = {
            image: "https://www.usajacket.com/wp-content/uploads/2016/11/10th-Doctor-Who-Brown-Suit.jpg",
            name: "10th Doctor",
            id: 1,
            description: "The 10th Doctor is played by David Tenant. He is many people's favorite Doctor. He has a british accent but is actually scottish."
        }
        var charrr = {
            image: "https://i.pinimg.com/originals/68/e9/29/68e92935f174eac5ae7552ec03d8c95d.jpg",
            name: "Poppy 'Oz' Osgood",
            id: 2,
            description: "Known globally as Oz, Poppy is a famous rockstar who moonlights as a Torchwood Informant on the side."
        };
        $("#charsHere").append(createCharCard(charr), createCharCard(charrr));
    });
}

$(document).ready(function () {
    loadAllCharacters();
})
