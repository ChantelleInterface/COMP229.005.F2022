// Student name: Chantelle Lawson
// Student number: 301216199
// Assignment Due Date: October 22nd 2022
// Filename: appclient.js

console.log("it goes to the client-side.");

if(getTitle == "Inventory List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}