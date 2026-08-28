$(document).ready(function(){
    $("#todoForm").on("submit",function(){
        if($(this).val() === "" ){
            $("#message").texte("veuilliez saisire une tache !")
        }else{
            $("#todoList").append(
                '<li class="list-group-item">'+
				'<input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">'+
				'<label class="form-check-label stretched-link" for="firstCheckboxStretched">'+ $(this).val() +'</label>'+
			'</li>'
            )
        }
    })

});