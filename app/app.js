var CAMP = [
    {
        campTitle: "Tent",
        campThumbImg: "tent.webp",
        campFullImg: "",
        campBriefDescription: "A tent is a portable shelter made of cloth, or sometimes other material, supported by one or more poles and stretched tight by cords attached to pegs driven into the ground.",
        campDescription: "",
    },
    {
        campTitle: "Backpack",
        campThumbImg: "backpack.jpg",
        campFullImg: "",
        campBriefDescription: "A backpack is useful for carying around items that you may need during your camping trip.",
        campDescription: "",
    },
    {
        campTitle: "Sleeping Bag",
        campThumbImg: "bagsleep.webp",
        campFullImg: "",
        campBriefDescription: "A sleeping bag is useful when it is time to go to bed. With one of these, you can crawl into it and get comfortable at night within your tent.",
        campDescription: "",
    },
    {
        campTitle: "Sleeping Pad",
        campThumbImg: "pad.webp",
        campFullImg: "",
        campBriefDescription: "A sleeping pad is useful if you are someone who does not like sleeping bags. With a sleeping pad, you can just set it down and fall asleep on it comfortably",
        campDescription: "",
    },

    {
        campTitle: "Camp Stove",
        campThumbImg: "stove.webp",
        campFullImg: "",
        campBriefDescription: "Having a stove is always a nice thing because with one you are able to to cook meals and even possibly heat up cold food that you may have.",
        campDescription: "",
    },
    {
        campTitle: "Camp Furniture",
        campThumbImg: "furniture.jpg",
        campFullImg: "",
        campBriefDescription: "Camp furniture is an important part of camping because it allows you to set up certain things, such as chairs, so that you can enjoy your camping experience more than without furniture.",
        campDescription: "",
    },
    {
        campTitle: "Camp Hydration",
        campThumbImg: "hydrate.jpg",
        campFullImg: "",
        campBriefDescription: "Staying hydrated is an important thing, so by using camp hydration such as water containers you are keeping yourself healthy. It would be a good idea to bring a lot of these so you don't run out.",
        campDescription: "",
    },
    {
        campTitle: "Camp Lighting",
        campThumbImg: "lighting.jpg",
        campFullImg: "",
        campBriefDescription: "Camp lighting is used to keep your campsite lit up. Lighting can also be useful when you are walking during the night or even exploring a cave.",
        campDescription: "",
    },
    {
        campTitle: "Camp Coolers",
        campThumbImg: "cooler.webp",
        campFullImg: "",
        campBriefDescription: "A camp cooler is an insulated container for keeping food and drinks cold. Usually you will put ice in it to make sure that the food and drinks will stay cold.",
        campDescription: "",
    },
    {
        campTitle: "Camp Heaters",
        campThumbImg: "heater.jpg",
        campFullImg: "",
        campBriefDescription: "A camp heater will heat up things such as the air or water. This will make it so that it is not as cold as it was before.",
        campDescription: "",
    },

];

function loadData() {
    $.each(CAMP, function(index, camp){
    $("#app").append(`
    <div id="${index}" class="camp-holder">
    <br>
    <h4>${camp.campTitle}</h4>
    <div class="camp-image">
        <img src="images/games_thumb/${camp.campThumbImg}" 
        alt="${camp.campTitle}"/>
    </div>
        <div class="brief-rating">
        <br>
            <div class="brief-des">
                ${camp.campBriefDescription}
            </div>
        </div>
</div>`);
    });
     initListeners();
}

function initListeners() {
    $(".camp-holder").click(function(e){
        let campIndex = e.currentTarget.id;
        $("#app").html(`<div class="camp-holder">
        <br>
        <h4>${CAMP[campIndex].campTitle}</h4>
        <div class="camp-image">
            <img src="images/games_thumb/${CAMP[campIndex].campThumbImg}" 
            alt="${CAMP[campIndex].campThumbImg}"/>
        </div>
            <div class="brief-rating">
            <br>
                <div class="brief-des">
                    ${CAMP[campIndex].campBriefDescription}
                </div>
            </div>
            <br>
            <div class="close">CLOSE</div>
            <br>
            </div>`);

            addCloseListener();

    });
}

function addCloseListener(){
    $(".close").click(function(){
        $("#app").html("");
        loadData();
    });
};

$(document).ready(function(){
    loadData();

});