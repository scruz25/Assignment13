$(document).ready(function(){

	var pokemonName;

	$("#search").keypress(function(event){
		if(event.keyCode==13){
			$("h2").remove();
			pokemonName=$("#search").val().toLowerCase();
			console.log(pokemonName);
			$.ajax({
				url:"https://pokeapi.co/api/v2/pokemon-species/"+pokemonName+"/",
				method: "GET",
				dataType:"JSON",
				data:{
					'name':pokemonName,
				},
				success: function(data){
					console.log(data);
					var pokemonspecies = data.genera.length;
					do{
						console.log(data.genera[2].genus);
						var pokemonspeciesName = data.genera[2].genus;
					
							var newHeader = $("<h2 class='species'><span class='name'>"+pokemonName+"</span> has the species <span class='name'>"+pokemonspeciesName+"</span></h2>");
							$("body").append(newHeader);
						
					}while(pokemonspecies<1);
				},
				error: function(data, textStatus, errorThrown){
					console.log("bad");
					console.log(errorThrown);
					var newHeader = $("<h2>Sorry,there's nothing on this Pokemon</h2>");
					$("body").append(newHeader);
				}
			})
		}
	})
})


 
   





		
	