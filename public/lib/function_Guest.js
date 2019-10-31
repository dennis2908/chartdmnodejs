function load_body(zone_id){
	  
	$.ajax({
	method: "GET",	
    url:"/crud/get_by_id_Guest", 
    data: { id: zone,author: "guest"},
    success:function(data) {
		if(data)
		{
			$('#table_1').html(data);
		}
			
	  }
	})
}

function save_body(zone_id,zone_to){
	
if(!zone_id)
{
	zone_id=zone;
}	

var startTime = "";

setTimeout(function(){

    $.ajax({
        url: "/crud/save",
        type: "post",
        data: {	
			body: $('#table_1').html(),
			id: zone_id
		} ,
        success: function (response) {
			/*
			if(!zone_to)
			{
				zone_to = "zone"+zone_id+"_only";
			}

		    var loc = window.location;
				 
		    window.location.href = "/"+zone_to;
			
			*/
			
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
	
 }, 1000);
	
}
	
load_body(zone);


function change_image(zone,arr=[]){				

	setTimeout(function(){   
					  for (i = 0; i < arr.length; i++) {
						if(document.getElementById(arr[i]).className  == "green")
						{
								document.getElementById(arr[i]).src = "/"+zone+"/images/"+arr[i]+"_red.jpg"; 
								document.getElementById(arr[i]).className  = "red";
						}
						else
						{
								document.getElementById(arr[i]).src = "/"+zone+"/images/"+arr[i]+"_green.jpg"; 
								document.getElementById(arr[i]).className  = "green";
						}
								var container = document.querySelector("#"+arr[i]);
					  } 
					  
	 }, 600);				  
        
}

function change_new_table_col(id=0,table_type=""){
  if($("#t"+id).attr('class')=="green")
			{

			   $("#t"+id).attr('class','red');
			   $("#t"+id).html('<img src="/images/'+table_type+'_red.jpg" width="78" height="68" alt="">'+id);


			}
			else{

			   $("#t"+id).attr('class','green');
			   $("#t"+id).html('<img src="/images/'+table_type+'_green.jpg" width="78" height="68" alt="">'+id);
			}
			
			


}

function change_color_dm(arr=[],arr_table_type=[]){
	
	
	setTimeout(function(){
	
	
	var id_div = arr.join('_');
    if($('#t'+id_div+'_merge').attr('class')=="green")
		   {
		      var div = "";
		      $('#t'+id_div+'_merge').attr('class','red');
		      for(i=0;i<arr.length;i++)
			  {
				div +='<div style="float:left;"><img class="'+arr_table_type[i]+'" src="/images/'+arr_table_type[i]+'_red.jpg" width="78" height="68" alt="">'+arr[i]+'</div>';
			  }
			  $('#t'+id_div+'_merge').html(div);
		   }
		   else
		   {
		      var div = "";
		      $('#t'+id_div+'_merge').attr('class','green');
		      for(i=0;i<arr.length;i++)
			  {
				div +='<div style="float:left;"><img class="'+arr_table_type[i]+'" src="/images/'+arr_table_type[i]+'_green.jpg" width="78" height="68" alt="">'+arr[i]+'</div>';
			  }
			  $('#t'+id_div+'_merge').html(div);
		   }   
		   
	}, 1000);
		   
   
}