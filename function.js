 var contacts =[];

  var saveContact = () => {
    var first_name = document.querySelector("#first_name").value;
    var second_name = document.querySelector("#second_name").value;
    var phone_number = document.querySelector("#phone_number").value;
    var email = document.querySelector("#email").value;
    var address = document.querySelector("#address").value;
    
    var newcontact = [first_name,second_name,phone_number,email,address];
  // var newcontact = Contact(first_name,second_name,phone_number,email,address);
     
     contacts.push(newcontact);
     console.log("saved successfully");
  };
  // search for a contact
     function search_function()
     //var searchContacts = (search_phrase) =>
      //document.getElementById("result").innerHTML= "";
      
      {
        // var phrase = document.querySelector("search-id").value;

        for (var i =0;i<array.length;i++)
          var e=array[i];
        {
          // var contactarray = allcontacts[i];
          // if (contactarray[0].includes(phrase)){
          //   console.log(contactarray);
             document.getElementById("search").innerHTML = e;
        }
      }
