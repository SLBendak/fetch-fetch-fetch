console.log("This works");
const container = document.querySelector('.container'); // step one define where text will be pushed to

fetch("https://api.spacexdata.com/v3/capsules")// step 1 request info from database
// .then(function(respone))

.then(response => {
    // console.log(response);

    return response.json(); //data
})
// returns an array of objects
.then(data => {
    // console.log(data);
    // const firstElement = data[0];
    // console.log(firstElement);
    // let capsuleID = firstElement.capsule_id;
    // console.log(capsuleID);
    // let details = firstElement.details;
    // console.log(details);
    // let landings = firstElement.landings;
    // console.log(landings);
// for loop goes thru the full length of the array 
    for (let i=0; i < data.length; i++) {
        //eachCapsule makes sure were gathering info from each loop
        let eachCapsule = data[i];// data[i] is how you collect data from each capsule
        // console.log(eachCapsule);
        // obj made to pull specific info from objects
        const obj = {
            capsuleID: eachCapsule.capsule_id,
            details: eachCapsule.details,
            landings: eachCapsule.landings
        }
        console.log(obj);
        // capsuleElement is a variable to create an element
        const capsuleElement = document.createElement('p');
        // dot notation means writing the object.specific key
        capsuleElement.textContent = obj.capsuleID;
        // setting the text content of made capsuleElement <p> to specific data

        console.log(capsuleElement);
        // appending container
        container.appendChild(capsuleElement);
    }
})