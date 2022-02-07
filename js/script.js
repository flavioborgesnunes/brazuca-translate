$(document).ready(function(){
    function pegarIdioma(){
        var idiomas = []
        $.ajax({
            method: "get",
            url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
            headers: {
                "accept-encoding": "application/gzip",
		        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
		        "x-rapidapi-key": "5d6c0ce980msh491bd586a6f34fcp1561adjsnd2493b085289"
            }
        }).done( function(data){
            idiomas = data.data.languages
            for (var x = 0; x < idiomas.length; x++){
                $("#idioma").append(
                    `<option value="${idiomas[x].language}">${idiomas[x].language}</option>`
                )

            }
        })
    }
    $("#texto-original").keypress(function (){
            var textoOriginal =  $("#texto-original").val()
    })
    pegarIdioma()
})