function createCharCard(info) {
    var displayChar = $("<div>").addClass("card horizontal max-card-height");
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
        for (var i=0; i<data.length; i++) {
            var newChar = createCharCard(data[i]);
            $("#charsHere").append(newChar);
        }
        var charr = {
            image: "https://www.usajacket.com/wp-content/uploads/2016/11/10th-Doctor-Who-Brown-Suit.jpg",
            name: "10th Doctor",
            id: 1,
            description: "The 10th Doctor is played by David Tenant. He is many people's favorite Doctor. He has a british accent but is actually scottish."
        }
        var charrr = createCharCard(charr);
        $("#charsHere").append(charrr);
    });
}

$(document).ready(function() {
    loadAllCharacters();
})