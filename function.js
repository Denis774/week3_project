function Contact(first_name, second_name, phone_number, email, address) /*The constructor function */
 {
  // The properties of this object
  this.first_name = first_name,
  this.second_name = second_name,
  this.phone_number = phone_number,
  this.email = email,
  this.address = address
  var address =["Kampala_Road","Kampala","Uganda"];
}
          
Contact.prototype.full_name = function() 
{
  alert("New Contact added:"  + this.first_name + " " + this.second_name);
}
 
var Contact = new Contact ("Jane", "Ahabwe", "+256752202389", "ahimbisibwedenis@yahoo.com","Plot 45,Kampala Road, P.o.Box 7120, Kampala, Uganda");
Contact.full_name(); //Sets new object's prototype property to be the constructor function's prototype object and returns the newly created object.
var Contact2 = new Contact2 ("Jan", "Ahabwe", "+256752202389", "ahimbisibwedenis@yahoo.com","lumumba Avenue, P.o.Box 7120, Kampala, Uganda");
Contact.full_name();
Contact.push ("");


Array.prototype.search = function(target) {
  if {
    Array.isArray(this)) && target){
  for{
    var i = 0;i<this.length,++){
  if ( this [i]=== target){
   return "found" + target+ "at position" +i;
  }
}
console.log("Not found"); 
}
else{
  console.log("Please search a value");
};
var Contact = [first_name, second_name, phone_number, email, address];
console.log(Contact.search())
}
 
       const contact = document.querySelector("#contact-list ul");

       // delete contact
       contact.addEvent.listener("click",function(e){ =}

      // add contact
const addForm = document.forms["add-contact"];
  // hide contacts
  const hideBox=document.querySelector(#hide);
  hideBox.addEventListener("change",function(e){=

// filter contacts

      Const searchBar = document.forms["search-contacts"].querySelector("input");
      searchBar.addEventListener("keyup",function(e){
  const term = e.target.value.toLowerCase()
  const contact = list.getElementsByTagName(li);
  Array.from(contacts).forEach(function(contact){
  const.name = contact.firstElementChild.textContent;
  if (name toLowerCase).indexOf(item)!= -1)
  {
    name.style.display = "block";
  }
  {
    else {
      name.style.display = "none"
    }
  }
  }
}
