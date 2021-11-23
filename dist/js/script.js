API.Plugins.motd = {
	init:function(){
		API.GUI.Sidebar.Nav.add('motd', 'main_navigation');
	},
	load:{
		index:function(){
			$('#motd-1 button').off().click(function(){
				$('#motd-1').fadeOut('slow','swing',function(){
					$('#motd-2').fadeIn('slow','swing');
				});
			});
			$('#motd-2 button').off().click(function(){
				$('div.motd-content-wrapper').fadeOut('slow','swing',function(){
					$('div.wrapper').fadeIn('slow','swing');
				});
			});
		},
	},
}

API.Plugins.motd.init();
