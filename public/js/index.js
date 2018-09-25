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

  // TODO: correct references
  var charAttributes = {
    attrAwMax: 1,
    attrAwCurr: 1,
    attrCoMax: 1,
    attrCoCurr: 1,
    attrInMax: 1,
    attrInCurr: 1,
    attrPrMax: 1,
    attrPrCurr: 1,
    attrReMax: 1,
    attrReCurr: 1,
    attrStMax: 1,
    attrStCurr: 1
  }

  // TODO: correct reference
  var charSkillz = {
    skAthletics: 0,
    skConvince: 0,
    skCraft: 0,
    skFighting: 0,
    skKnowledge: 0,
    skMarksman: 0,
    skMedicine: 0,
    skScience: 0,
    skSubterfuge: 0,
    skSurvival: 0,
    skTechnology: 0,
    skTransport: 0
  };

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
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
