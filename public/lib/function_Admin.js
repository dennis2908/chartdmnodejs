function save_body(zonename){
	alert('Save Zone');
	localStorage[zonename] = $('#table_1').html();
}

function load_body(zonename){
  $('#table_1').html(localStorage[zonename]);
}

load_body(zone);
		 
function change_image(zone,arr=[]){				   
                  for (i = 0; i < arr.length; i++) {
					if(document.getElementById(arr[i]).className  == "blue")
					{
							document.getElementById(arr[i]).src = "/"+zone+"/images/"+arr[i]+"_red.jpg"; 
							document.getElementById(arr[i]).className  = "red";
					}
					else if(document.getElementById(arr[i]).className  == "green")
					{
							document.getElementById(arr[i]).src = "/"+zone+"/images/"+arr[i]+"_blue.jpg"; 
							document.getElementById(arr[i]).className  = "blue";
					}
					else
					{
							document.getElementById(arr[i]).src = "/"+zone+"/images/"+arr[i]+"_green.jpg"; 
							document.getElementById(arr[i]).className  = "green";
					}

				  } 
         
}
		 
		


//localStorage['body'] = '';
