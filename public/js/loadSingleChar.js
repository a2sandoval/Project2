function biodata(info) {

};

function attrs(info) {

};

function skillz(info) {

};

function traits(data) {

};

function loadCharacter() {
    $.ajax({

    }).then(function (data) {
        $("#charHere").append(biodata(data), attrs(data), skillz(data), traits(data));
    });
};

$(document).ready(function () {
    loadCharacter();
});