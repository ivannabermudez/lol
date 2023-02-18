let petSalon = {
    name:"The Fashion Pet",
    phone:"619-777-7777",
    workingHours:{
        open:"9:00 am",
        close: "9:00pm",
    },
    address:{
        street:"Palm Ave",
        zip: "22345",
        city:"San Diego",
        },

        pets:[]
}

function displayFooterInfo(){
    document.getElementById("footer").
    innerHTML=`<label>${petSalon.name} opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}</label>`;
}
function initFooter(){
        displayFooterInfo();
}
//window.onload=initFooter;

