API.Plugins.motd = {
	init:function(){
		API.GUI.Sidebar.Nav.add('motd', 'main_navigation');
	},
	load:{
		index:function(){},
	},
}

API.Plugins.motd.init();
