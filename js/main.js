$(document).ready(function() {
    var plinks = [
       	       	{
            name: 'motion',
            plink: 'http://steamcommunity.com/profiles/76561198094225861'
        },
		{
            name: 'quake',
            plink: 'http://steamcommunity.com/profiles/76561198111823010'
       },       
	   {
            name: 'mystie',
            plink: 'http://steamcommunity.com/profiles/76561198115007530'
        },
		{
            name: 'ksiaze',
            plink: 'http://steamcommunity.com/profiles/76561198139369327'
		},
        {
            name: 'valentina',
            plink: 'http://steamcommunity.com/profiles/76561198238193390'

        },
		];    
	
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '" target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
	}
	
	});