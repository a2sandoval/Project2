function createTrait(info) {
    var newTrait = $("<div>").addClass("col s1 m3");
    var mainLabel = $("<label>").html(info.name);
    var switchDiv = $("<div>").addClass("switch");
    var subLabel = $("<label>");
    var traitInput = "<input type='checkbox' class='blue darken-4' unchecked id='trait" + info.id + "' cost='" + info.cost + "' data-id='" + info.id + "'/>";
    var lever = $("<span>").addClass("lever blue darken-4");
    subLabel.append("Off", traitInput, lever, "On");
    switchDiv.append(subLabel);
    newTrait.append(mainLabel, switchDiv);
    return newTrait;
};

function loadAllTraits() {
    //console.log("hullo");
    $.ajax({
        method: "GET",
        url: "/api/static/traits"
    }).then(function (data) {
        //console.log(data);
        // loop through all traits
        var testTrait = {
            name: "Test Trait",
            id: 0,
            cost: 5
        };
        var testTraitttt = createTrait(testTrait);
        for (var i = 0; i < data.length; i++) {
            var newTrait = createTrait(data[i]);
            $("#traitsHere").append(newTrait);
        };
        $("#traitsHere").append(testTraitttt);
    });
};

$(document).ready(function () {
    //console.log("bonjour");
    loadAllTraits();
});