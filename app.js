var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function () {
    
    getAll();
    $('#all.selector').addClass("active");


    $('#all').on('click',function() {  
        $('#ofline.selector').removeClass("active");
        $('#online.selector').removeClass("active");
        $('#all.selector').addClass("active");

        $('#status').empty();
        getAll();
    });

    $('#online').on('click',function() {  
        $('#ofline.selector').removeClass("active");
        $('#all.selector').removeClass("active");
        $('#online.selector').addClass("active");

        $('#status').empty();
        getOnline();
    });

    $('#ofline').on('click',function() {  
        $('#all.selector').removeClass("active");
        $('#online.selector').removeClass("active");
        $('#ofline.selector').addClass("active");

        $('#status').empty();
        getOfline();
    });
    
});

function getOnline() {

    for (var i = 0; i < streamers.length; i++) {
        console.log(streamers[i]);
        var urlString = 'https://wind-bow.gomix.me/twitch-api' + '/streams/' + streamers[i] + '?callback=?';
        $.getJSON(urlString, function (data) {
            if (data.stream) {
                var elms = '<div class="line" id="block"><div id="img"><img class="line3" src="'+ data.stream.channel.profile_banner +'"></img></div><div id="channel-vertical"><div class="line2" id="chanal">'+ data.stream.channel.name +'</div></div><div id="description">' + '<span class="clip">' + data.stream.channel.status + '</span>' + '</div></div>';
                $('#status').append(elms);
            }
        });
    }
}

function getOfline() {
    for (var i = 0; i < streamers.length; i++) {
        
        var urlString = 'https://wind-bow.gomix.me/twitch-api' + '/streams/' + streamers[i] + '?callback=?';
        $.getJSON(urlString, function (data) {
            var channel = data._links.channel.substr(38); //taking chanal name from api
            if (!data.stream) {
                var src = 'https://www.twitch.tv/p/assets/uploads/twitch_474x356.png';
                var elms = '<div class="line" id="block"><div id="img"><img class="line3" src="'+ src +'"></img></div><div id="channel-vertical"><div class="line2" id="chanal">'+ channel +'</div></div><div id="description">' + '<span class="clip">' + 'Ofline :(' + '</span>' + '</div></div>';
                $('#status').append(elms);
            }
        });
    }
}

function getAll() {
    for (var i = 0; i < streamers.length; i++) {
        console.log(streamers[i]);
        var channel = streamers[i];        
        var urlString = 'https://wind-bow.gomix.me/twitch-api' + '/streams/' + streamers[i] + '?callback=?';
        $.getJSON(urlString, function (data) {
            var channel = data._links.channel.substr(38); //taking chanal name from api
            if (data.stream) {
                var elms = '<div class="line" id="block"><div id="img"><img class="line3" src="'+ data.stream.channel.profile_banner +'"></img></div><div id="channel-vertical"><div class="line2" id="chanal">'+ channel +'</div></div><div id="description">' + '<span class="clip">' + data.stream.channel.status + '</span>' + '</div></div>';
                $('#status').append(elms);
            }
            else{
                var src = 'https://www.twitch.tv/p/assets/uploads/twitch_474x356.png';
                var elms = '<div class="line" id="block"><div id="img"><img class="line3" src="'+ src +'"></img></div><div id="channel-vertical"><div class="line2" id="chanal">'+ channel +'</div></div><div id="description">' + '<span class="clip">' + 'Ofline :(' + '</span>' + '</div></div>';
                $('#status').append(elms);
            }
        });
    }
}