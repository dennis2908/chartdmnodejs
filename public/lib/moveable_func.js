    $('img,div').each(function () {

				var arrx = ['green','blue','red'];
				var arry = ['border_red rectangle','border_green rectangle','border_blue rectangle'];
				var arrz = ['merge'];
				var i = $(this).attr('class');
				if(i)
				{
					if(i.includes('ui-draggable'))
					{
						$(this).attr('class',$(this).attr('class').replace(' ui-draggable',''));
					}
				}
				
				
				var i = $(this).attr('class');
				
				if(arrx.includes(i))
				{
					$(this).draggable();
					$(this).mousedown(function() {
						timerS(5);
					}).mousemove(function() {
						timerS(5);
					}).mouseup(function() {
						timerS(5);
					}).mouseover(function(){
						timerS(5);
					});
				}
				
				if(arrz.includes(i))
				{
					$(this).draggable();
					$(this).mouseover(function(){
						timerS(5);
					});
				}
				
				if(arry.includes(i))
				{
					$(this).click(function() {
						if($(this).attr('class')=="border_blue rectangle ui-draggable")
						{
									
						   $(this).attr('class','border_red rectangle ui-draggable');
										  
						}
						else if($(this).attr('class')=="border_green rectangle ui-draggable")
						{
									
						   $(this).attr('class','border_blue rectangle ui-draggable');
										  
						}
						else{
						  
						   $(this).attr('class','border_green rectangle ui-draggable');
						}		
						
						
					});
					
					$(this).draggable();
					
					$(this).mouseover(function(){
						timerS(5);
					});
					
				}
			
	})