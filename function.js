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
     // console.log(contacts);
     console.log("saved successfully");
  };


  // search for a contact
     function search_function()

      {
        var phrase = document.querySelector("#search_phrase").value;

        for (var i =0;i<contacts.length;i++)
          {
            var contact = contacts[i];
            if (contact[0].includes(phrase)){
              console.log(contact);
               
              document.getElementById("result").innerHTML = contact[0];
                   }
          else
          {
            console.log("Oops not found");
          }
      }
    };
