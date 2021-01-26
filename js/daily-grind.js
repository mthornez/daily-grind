/*
Here is the info we'll need to change for each copy:
pic - image src
alt - alt tag
day - Day of week
name - Name of coffee
color - Color
desc - Description 
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
4 = Thursday
5 = Friday
6 = Saturday
*/
let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){// use query string data
    myDay = urlParams.get('day');
}else{// use date object
    myDay = myDate.getDay();
}

myDay = parseInt(myDay);

function coffeeTemplate(coffee){
    let myReturn = ""; 

    myReturn += `
        <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong id="coffee-highlight" class="feature">${coffee.day} 
            Coffee Special:</strong> ${coffee.day} daily coffee special is 
            <strong>${coffee.name}</strong>. ${coffee.desc}
        </p>`; 

    return myReturn;
}

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            color: "lightbrown",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            day: "Sunday",
            desc: `Time to end the weekend with a caramel drink treat.`
        }; 
    break;
    case 1:
        today = "Monday";
        coffee = {
            color: "grey",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a Cold Brew coffee",
            day: "Monday",
            desc: `Nothing like a little iced coffee to wake you up for the week.`
        }; 
    break;
    case 2:
        today = "Tuesday";
        coffee = {
            color: "green",
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a cup of Frappaccino",
            day: "Monday",
            desc: `Perk up with some frappaccino to get through Tuesday.`
        };
    break;
    case 3:
        today = "Wednesday";
        coffee = {
            color: "brown",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee",
            day: "Wednesday",
            desc: `Sometimes you just need the drip.`
        }; 
    break;
    case 4:
        today = "Thursday";
        coffee = {
            color: "lightblue",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a cup of mocha",
            day: "Thursday",
            desc: "Some chocolate coffee goodness to perk you up."
        };
    break;
    case 5:
        today = "Friday";
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of some bubble tea.",
            day: "Friday",
            desc: "It's Friday! Go out and have fun with this drink!"
        };
    break;
    case 6:
        today = "Saturday";
        coffee = {
            color: "orange",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of some pumpkin spice latte.",
            day: "Saturday",
            desc: "Relax over the weekend with this latte drink."            
        };
}

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;



