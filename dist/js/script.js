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
					  html += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">';
					    html += '<i class="fas fa-bars"></i>';
					  html += '</button>';
					  html += '<div class="collapse navbar-collapse" id="navbarNavAltMarkup">';
					    html += '<div class="navbar-nav">';
					      html += '<a class="nav-item nav-link active" href="#">A Propos</a>';
					      html += '<a class="nav-item nav-link" href="#">Gallerie</a>';
					      html += '<a class="nav-item nav-link" href="#">Invitations</a>';
					      html += '<a class="nav-item nav-link" href="#">Programme</a>';
					      html += '<a class="nav-item nav-link" href="#">Menu</a>';
					    html += '</div>';
					  html += '</div>';
					html += '</nav>';
			    html += '<p><button class="btn btn-warning btn-lg" data-action="ControlPanel">Control Panel</button></p>';
			  html += '</div>';
			html += '</div>';
			$('body').prepend(html);
			$('#motd-1 button').off().click(function(){
				$('#motd-1').fadeOut('slow','swing',function(){
					$('#motd-2').fadeIn('slow','swing');
				});
			});
			$('#motd-2 button[data-action="ControlPanel"]').off().click(function(){
				$('div.wrapper').show();
				$('div.motd-content-wrapper').fadeOut('slow','swing');
			});
		},
	},
}

API.Plugins.motd.init();
