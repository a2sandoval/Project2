console.log("JS File Loaded");
/** This section will hold my button logic */

// Controller 1 Variables
var maxSkillPoints = 24;
var currentSkillPoints = 0;
var remainingSkillPoints = 24;
var amount1 = 0;
var amount2 = 0;
var amount3 = 0;
var amount4 = 0;
var amount5 = 0;
var amount6 = 0;


/** attributesUpdate function
 * Updates max for all buttons
 */

function attributesUpdate() {
    console.log("Updating Max");
    $("#attrAw").attr("max", remainingSkillPoints + amount1);
    $("#attrCo").attr("max", remainingSkillPoints + amount2);
    $("#attrIn").attr("max", remainingSkillPoints + amount3);
    $("#attrPr").attr("max", remainingSkillPoints + amount4);
    $("#attrRe").attr("max", remainingSkillPoints + amount5);
    $("#attrSt").attr("max", remainingSkillPoints + amount6);
};

/** traitsUpdate
 * Disables buttons based on remainding skill points
 */

 function traitsUpdate() {
     console.log("Traits Update function called");
     $(":checkbox").each(function () {
         var cost = +($(this).attr("cost"));
         console.log($(this).prop('checked'))
         if (remainingSkillPoints < cost && !($(this).prop('checked'))) {
            $(this).attr("disabled", true);
         } else {
            $(this).attr("disabled", false);
         }
    });
 }

/** Controller Function
 *  Updates Current skill points used in both section
 * if we have not over spent are skill points
 * call update attribute buttons and traits button
 * if we have over spent
 * call disable all neccessary buttons (traits and skills)
 */

function controller() {
    console.log("Controller function called");
    amount1 = +($("#attrAw").val().trim());
    amount2 = +($("#attrCo").val().trim());
    amount3 = +($("#attrIn").val().trim());
    amount4 = +($("#attrPr").val().trim());
    amount5 = +($("#attrRe").val().trim());
    amount6 = +($("#attrSt").val().trim());
    var traitCount = 0;
    $(":checkbox:checked").each(function () {
        traitCount += +($(this).attr("cost"));
    });
    currentSkillPoints = amount1 + amount2 + amount3 + amount4 + amount5 + amount6 + traitCount;
    console.log("Current skill points " + currentSkillPoints)
    

    if (currentSkillPoints <= 24) {
        remainingSkillPoints = maxSkillPoints - currentSkillPoints;
        console.log("Curren remainder " + remainingSkillPoints);
        attributesUpdate()
        traitsUpdate();
    } else {
        console.log("you ran out of points");
    }

};

/** Controller Function
 * Updates current skill points used
 * checks if user has sufficient funds
 * calls attribute function
 * calls traits
 */
//-Controller 2 Variables
var maxSkillPoints2 = 18;
var currentSkillPoints2 = 0;
var remainingSkillPoints2 = 18;
var amount7 = 0;
var amount8 = 0;
var amount9 = 0;
var amount10 = 0;
var amount11 = 0;
var amount12 = 0;
var amount13 = 0;
var amount14 = 0;
var amount15 = 0;
var amount16 = 0;
var amount17 = 0;
var amount18 = 0;

function attributesUpdate2() {
    console.log("Updating Max");
    $('#skAthletics').attr('max', remainingSkillPoints2 + amount7);
    $('#skConvince').attr('max', remainingSkillPoints2 + amount8);
    $('#skCraft').attr('max', remainingSkillPoints2 + amount9);
    $('#skFighting').attr('max', remainingSkillPoints2 + amount10);
    $('#skKnowledge').attr('max', remainingSkillPoints2 + amount11);
    $('#skMarksman').attr('max', remainingSkillPoints2 + amount12);
    $('#skMedicine').attr('max', remainingSkillPoints2 + amount13);
    $('#skScience').attr('max', remainingSkillPoints2 + amount14);
    $('#skSubterfuge').attr('max', remainingSkillPoints2 + amount15);
    $('#skSurvival').attr('max', remainingSkillPoints2 + amount16);
    $('#skTechnology').attr('max', remainingSkillPoints2 + amount17);
    $('#skTransport').attr('max', remainingSkillPoints2 + amount18);

}

function controller2() {
    amount7 = +($('#skAthletics').val().trim());
    amount8 = +($('#skConvince').val().trim());
    amount9 = +($('#skCraft').val().trim());
    amount10 = +($('#skFighting').val().trim());
    amount11 = +($('#skKnowledge').val().trim());
    amount12 = +($('#skMarksman').val().trim());
    amount13 = +($('#skMedicine').val().trim());
    amount14 = +($('#skScience').val().trim());
    amount15 = +($('#skSubterfuge').val().trim());
    amount16 = +($('#skSurvival').val().trim());
    amount17 = +($('#skTechnology').val().trim());
    amount18 = +($('#skTransport').val().trim());
    currentSkillPoints2 = amount7 + amount8 + amount9 + amount10 + amount11 + amount12 + amount13 + amount14 + amount15 + amount16 + amount17 + amount18;
    console.log("Current skill points 2 is at " + currentSkillPoints2)

    if (currentSkillPoints2 <= 18) {
        remainingSkillPoints2 = maxSkillPoints2 - currentSkillPoints2;
        attributesUpdate2()
    } else {
        console.log("you ran out of points");
    }
}

/** This Section Will hold character creation  */
// Saves all information in an object for easy uploading

function saveCharacter() {
    console.log("save character function called");
    var character = {
        Attributes: {
            Awareness: amount1,
            Coordination: amount2,
            Ingenuity: amount3,
            Presence: amount4,
            Resolve: amount5,
            Strength: amount6
        },
        Traits: {

        },
        Skills: {
            Athletics: amount7,
            Convince: amount8,
            Craft: amount9,
            Fighting: amount10,
            Knowledge: amount11,
            Marksman: amount12,
            Medicine: amount13,
            Science: amount14,
            Subterfuge: amount15,
            Survival: amount16,
            Technology: amount17,
            Transport: amount18

        }
    };

    $(":checkbox:checked").each(function () {
        var trait = $(this).attr("id");
        character.Traits[trait] = true;



    });


    console.log(character);

}

// function () {
//     $(":checkbox").each(function () {
//         console.log(this);
//         var trait = $(this).attr("id");
//         var cost = $(this).attr("cost");
//         console.log("The id for this is " + trait);
//         console.log("The cost for this is " + cost);
//         this[trait] = cost;
//    });
// }
// $("#submit").on('click', function () {
//     event.preventDefault();
//   });
// $( "#saveChar" ).click(function() {
//     alert( "Handler for .click() called." );
//   });
