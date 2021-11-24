API.Plugins.motd = {
	init:function(){
		API.GUI.Sidebar.Nav.add('motd', 'main_navigation');
	},
	load:{
		index:function(){
			$('div.wrapper').hide();
			var html = '';
			html += '<div class="motd-content-wrapper motd-background row align-items-center text-center justify-content-center">';
			  html += '<div class="w-auto motd-box bg-black noselect" id="motd-1">';
			    html += '<p><h2>Bienvenue au mariage de</h2></p>';
			    html += '<p><h1 class="mt-3">Louis Ouellet</h1></p>';
			    html += '<p><h1>et</h1></p>';
			    html += '<p class="mt-4"><h1 class="mt-4">Christelle Tsague</h1></p>';
			    html += '<p class="mt-4"><button class="btn btn-warning btn-lg mt-4">Entrer</button></p>';
			  html += '</div>';
			  html += '<div class="w-auto motd-box pt-0 bg-black noselect hide" id="motd-2">';
					html += '<nav class="navbar navbar-expand-lg navbar-dark bg-transparent">';
					  html += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMOTD" aria-controls="navbarMOTD" aria-expanded="false" aria-label="Toggle navigation">';
					    html += '<i class="fas fa-bars"></i>';
					  html += '</button>';
					  html += '<div class="collapse navbar-collapse" id="navbarMOTD">';
					    html += '<div class="navbar-nav">';
					      html += '<a class="nav-item nav-link active" data-page="A Propos">A Propos</a>';
					      html += '<a class="nav-item nav-link" data-page="Gallerie">Gallerie</a>';
					      html += '<a class="nav-item nav-link" data-page="Invitations">Invitations</a>';
					      html += '<a class="nav-item nav-link" data-page="Programme">Programme</a>';
					      html += '<a class="nav-item nav-link" data-page="Menu">Menu</a>';
					    html += '</div>';
					  html += '</div>';
					html += '</nav>';
			    html += '<p><button class="btn btn-warning btn-lg" data-action="ControlPanel">Control Panel</button></p>';
			  html += '</div>';
			html += '</div>';
			$('body').prepend(html);
			var motd = $('body').find('div.motd-content-wrapper').first();
			var nav = motd.find('nav.navbar.navbar-expand-lg.navbar-dark.bg-transparent').first();
			$('#motd-1 button').off().click(function(){
				$('#motd-1').fadeOut('slow','swing',function(){
					$('#motd-2').fadeIn('slow','swing');
				});
			});
			$('#motd-2 button[data-action="ControlPanel"]').off().click(function(){
				$('div.wrapper').show();
				$('div.motd-content-wrapper').fadeOut('slow','swing');
			});
			nav.find('a[data-page]').off().click(function(){
				nav.find('a[data-page]').removeClass('active');
				$(this).addClass('active');
			});
		},
	},
}

API.Plugins.motd.init();
