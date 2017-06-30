
// Templates //
/* a more effecient way of handling events
//Will impliment during refectoring

var s,
sequence_template = {
    settings: {
        ipad_score: 1,
        book_score: 1,
    },

    data: {
        score_1: 0,
        score_2: 0,
    },

    init: function(){
    },

    trial_1: {
    },
};

var main_event = function(console_name, callback){

    $(console_name).click(function(){
        controller.score_take(console_name); //have a comparitor
        console.log(mydata.score1);
        controller.update_scores();
        if (controller.check_scores() == false) { callback()};
        });
    };



*/
