$('#place').change( function() {

    var place = $(this).val(),
        key = '75bchbce7y3g673b7uwh3489y547rhdiw';
    console.log(place);
    /*$.ajaxSetup({
        headers: {
            'content-type': 'application/json',
            'apikey': key,
        }
    });*/
    if(place == 1) {
        // http://api3.eatandcheckcycling.com/get_weather?lat=39.529942&long=2.729396
        var lat = 39.529942,
            long = 2.729396;
            $('#weather', function(){
                $('#city').html('Mallorca');
            });
        $.ajax({
            url: 'http://api3.eatandcheckcycling.com/get_weather',
            async: true,
            crossDomain: true,
            method: "GET",
            data: {
                lat: lat,
                long: long,
                apikey: key
            },
            headers: {
                'content-type': 'application/json',
                'apikey': key,
            }
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function(data) {
            alert( 'Error al tratar de obtener los Datos' );
        });
    }
    else {
        var lat = 28.292249,
            long = -17.0831152;
            $('#weather', function(){
                $('#city').html('Tenerife');
            });
        $.ajax({
            url: 'http://api3.eatandcheckcycling.com/get_weather',
            async: true,
            crossDomain: true,
            method: "GET",
            data: {
                lat: lat,
                long: long,
                apikey: key
            },
            headers: {
                'content-type': 'application/json',
                'apikey': key,
            }
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function(data) {
            alert( 'Error al tratar de obtener los Datos' );
        });
    }
});