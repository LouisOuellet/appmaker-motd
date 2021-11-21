API.Plugins.motd = {
	init:function(){
		API.GUI.Sidebar.Nav.add('motd', 'main_navigation');
	},
	load:{
		index:function(){
			$('.content-header').hide();
		},
	},
}

API.Plugins.motd.init();
