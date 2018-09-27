// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function () {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};


var formSubmit = function (event) {
  event.preventDefault();

  // Creation of object to pass to POST URLs
  // TODO create reference for stuff
  var characterBase = {
    playerName: $("#player_name").val().trim(),
    charName: $("#first_name").val().trim(),
    image: $("#character_image").val().trim(),
    description: $("#character_description").val().trim(),
    background: $("#character_background").val().trim(),
    stuff: "stuff"
  };
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/characters/characters",
    data: JSON.stringify(charTraits)
  });

  // TODO: correct references
  var charAttributes = {
    attrAwMax: $("attrAw").val(),
    attrAwCurr: $("attrAw").val(),
    attrCoMax: $("attrCo").val(),
    attrCoCurr: $("attrCo").val(),
    attrInMax: $("attrIn").val(),
    attrInCurr: $("attrIn").val(),
    attrPrMax: $("attrPr").val(),
    attrPrCurr: $("attrPr").val(),
    attrReMax: $("attrRe").val(),
    attrReCurr: $("attrRe").val(),
    attrStMax: $("attrSt").val(),
    attrStCurr: $("attrSt").val()
  };
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/characters/attributes",
    data: JSON.stringify(charTraits)
  });

  // TODO: correct reference
  var charSkillz = {
    skAthletics: $("#skAthletics").val(),
    skConvince: $("#skConvince").val(),
    skCraft: $("#skCraft").val(),
    skFighting: $("#skFighting").val(),
    skKnowledge: $("#skKnowledge").val(),
    skMarksman: $("#skMarksman").val(),
    skMedicine: $("#skMedicine").val(),
    skScience: $("#skScience").val(),
    skSubterfuge: $("#skSubterfuge").val(),
    skSurvival: $("#skSurvival").val(),
    skTechnology: $("#skTechnology").val(),
    skTransport: $("#skTransport").val()
  };
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/characters/skills",
    data: JSON.stringify(charTraits)
  });

  // TODO: correct references
  var charTraits = {
    trait1: 0,
    trait2: 0,
    trait3: 0,
    trait4: 0,
    trait5: 0,
    trait6: 0,
    trait7: 0,
    trait8: 0,
    trait9: 0,
    trait10: 0,
    trait11: 0,
    trait12: 0
  };
  var count = 1;
  $("input[type=checkbox]").each(function () {
    if (count <= 12) {
      var temp = "trait" + count;
      charTraits[x] = $(this).attr("data-id");
      count++;
    }
  });
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: "api/characters/traits",
    data: JSON.stringify(charTraits)
  });

};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", formSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
