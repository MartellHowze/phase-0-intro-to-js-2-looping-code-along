const friend = ['Lisa', 'Kaitlin', 'Jan'];
//created an array named "friend"


function writeCards(friend, event){
//function takes in two arguments, the "friend" array and an event
    let newFriendArr = []
//per readme, created a new array to hold "friend" list with message added

    for (let i = 0; i < friend.length; i++){
//standard for loop syntax
   
    newFriendArr.push(`Thank you, ${friend[i]}, for the wonderful ${event} gift!`)
//used .push method to combine the message and "friend" array in order to create the "newFriendArr"
}

return newFriendArr;
//make sure to return outside of the loop function 
}


function countDown(int){
    // let int = 10
    
    
    while (int >= 0) {
        console.log(int)
         int--
    }

}