$(document).ready(function(){
    function pegarIdioma(){
        var idiomas = []
        $.ajax({
            method: "get",
            url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
            headers: {
                "accept-encoding": "application/gzip",
		        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
		        "x-rapidapi-key": "ece77d6516msh087fed3413e7514p19d3ccjsnfe5cb3e6bd51"
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
        var idioma = $("idioma").val()
        $.ajax({
            "url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"accept-encoding": "application/gzip",
		"x-rapidapi-host": "google-translate1.p.rapidapi.com",
		"x-rapidapi-key": "ece77d6516msh087fed3413e7514p19d3ccjsnfe5cb3e6bd51"
	},
	"data": {
		"source": idioma,
		"target": "pt",
		"q": textoOriginal
	}
        }).done(function(data){
            console.log(data)
        })
    })
    pegarIdioma()
})