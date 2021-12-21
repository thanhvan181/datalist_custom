id_button1_custom_url.onfocus = function () {
    list__message_button2_name.style.display = 'block';
    // id_button1_custom_url.style.borderRadius = "10px 10px 10px 10px";  
  }
  for (let option of list__message_button2_name.options) {
    option.onclick = function () {
      id_button1_custom_url.value = option.value;
      list__message_button2_name.style.display = 'none';
      
    //   id_button1_custom_url.style.borderRadius = "10px";
    }
  };
  
  id_button1_custom_url.onid_button1_custom_url = function() {
    currentFocus = -1;
    var text = id_button1_custom_url.value.toUpperCase();
    for (let option of list__message_button2_name.options) {
      if(option.value.toUpperCase().indexOf(text) > -1){
        option.style.display = "block";
    }else{
      option.style.display = "none";
      }
    };
  }
  var currentFocus = -1;
  id_button1_custom_url.onkeydown = function(e) {
    if(e.keyCode == 40){
      currentFocus++
     addActive(list__message_button2_name.options);
    }
    else if(e.keyCode == 38){
      currentFocus--
     addActive(list__message_button2_name.options);
    }
    else if(e.keyCode == 13){
      e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (list__message_button2_name.options) list__message_button2_name.options[currentFocus].click();
          }
    }
  }
  
  function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
      }
    }