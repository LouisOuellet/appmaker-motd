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
			    html += '<p><h1 class="mt-3">Louis ouellet</h1></p>';
			    html += '<p><h1>et</h1></p>';
			    html += '<p class="mt-4"><h1 class="mt-4">Christelle Tsague</h1></p>';
			    html += '<p class="mt-4"><button class="btn btn-warning btn-lg mt-4">Entrer</button></p>';
			  html += '</div>';
			  html += '<div class="motd-box pt-0 bg-black noselect hide" id="motd-2">';
					html += '<nav class="navbar navbar-expand-lg navbar-dark bg-transparent">';
					  html += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMOTD" aria-controls="navbarMOTD" aria-expanded="false" aria-label="Toggle navigation">';
					    html += '<i class="fas fa-bars"></i>';
					  html += '</button>';
					  html += '<div class="collapse navbar-collapse justify-content-center" id="navbarMOTD">';
					    html += '<div class="navbar-nav">';
					      html += '<a class="nav-item nav-link active" data-page="about">A Propos</a>';
					      html += '<a class="nav-item nav-link" data-page="gallery">Gallerie</a>';
					      html += '<a class="nav-item nav-link" data-page="attendance">Invitations</a>';
					      html += '<a class="nav-item nav-link" data-page="planning">Programme</a>';
					      html += '<a class="nav-item nav-link" data-page="menu">Menu</a>';
					    html += '</div>';
					  html += '</div>';
					html += '</nav>';
					html += '<div class="motd-pages">';
						html += '<div class="motd-page active" data-page="about">';
							html += '<p><h2>A Propos</h2></p>';
							html += '<p class="text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>';
							html += '<p class="text-justify">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>';
						html += '</div>';
						html += '<div class="motd-page hide" data-page="gallery">';
							html += '<p><h2>Gallerie</h2></p>';
							html += '<p class="text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>';
							html += '<p class="text-justify">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>';
						html += '</div>';
						html += '<div class="motd-page hide" data-page="attendance">';
							html += '<p><h2>Invitations</h2></p>';
							html += '<p class="text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>';
							html += '<p class="text-justify">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>';
						html += '</div>';
						html += '<div class="motd-page hide" data-page="planning">';
							html += '<p><h2>Programme</h2></p>';
              html += '<ul class="timeline">';
                html += '<li>';
                  html += '<div class="timeline-image"><h4>Be Part<br>Of Our<br>Story!</h4></div>';
                  html += '<div class="timeline-panel">';
                    html += '<div class="timeline-heading">';
                      html += '<h4>December 2015</h4>';
                      html += '<h4 class="subheading">Transition to Full Service</h4>';
                    html += '</div>';
                    html += '<div class="timeline-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>';
                  html += '</div>';
                html += '</li>';
                html += '<li class="timeline-inverted">';
                  html += '<div class="timeline-image"><h4>Be Part<br>Of Our<br>Story!</h4></div>';
                  html += '<div class="timeline-panel">';
                    html += '<div class="timeline-heading">';
                      html += '<h4>July 2020</h4>';
                      html += '<h4 class="subheading">Phase Two Expansion</h4>';
                    html += '</div>';
                    html += '<div class="timeline-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>';
                  html += '</div>';
                html += '</li>';
                html += '<li class="timeline-inverted">';
                  html += '<div class="timeline-image">';
                    html += '<h4>Be Part<br>Of Our<br>Story!</h4>';
                  html += '</div>';
                html += '</li>';
              html += '</ul>';
						html += '</div>';
						html += '<div class="motd-page hide" data-page="menu">';
							html += '<p><h2>Menu</h2></p>';
							html += '<div class="btn-group btn-block">';
								html += '<button class="btn btn-outline-warning btn-lg active" data-menu="adulte">Adulte</button>';
								html += '<button class="btn btn-outline-warning btn-lg" data-menu="enfant">Enfant</button>';
							html += '</div>';
							html += '<div class="motd-menus mt-4">';
								html += '<div class="motd-menu active" data-menu="adulte">';
									html += '<p><h3>Bouchées à la volée</h3></p>';
									html += '<p>';
										html += 'Station du maraîcher - Légumes de saison en crudités, craquelins maison, hummus et trempettes';
										html += '<br>ou<br>';
										html += 'Charcuteries en folies - saucissons bio de Charlevoix, jambon cru, fraises, melons, salade d’herbes';
									html += '</p>';
									html += '<p><h3>Entrées</h3></p>';
									html += '<p>';
										html += 'Tartelette aux légumes grillés - Fromage, tomates, courgettes vinaigrette';
										html += '<br>ou<br>';
										html += 'Tomates de Fardoche - Haloumi grillé de St-Robert, pesto du jardin, pousses, crumble à la fleur d’ail';
									html += '</p>';
									html += '<p><h3>Soupe</h3></p>';
									html += '<p>Crème de courgettes, sumac et herbes fraîches</p>';
									html += '<p><h3>Résistance</h3></p>';
									html += '<p>';
										html += 'Filet de porc sirop-whiskey-piment goria écrasé de pommes de terre à l’ail grillé, lime et gingembre';
										html += '<br>ou<br>';
										html += 'Blanc de volaille citron-oregano sauce chimichurri et légumes du marché';
									html += '</p>';
									html += '<p><h3>Dessert</h3></p>';
									html += '<p>Feuilleté d’été fraises au sirop de mélilot, crème chiboust et fleurs<br>*Café, thé et infusion inclus</p>';
								html += '</div>';
								html += '<div class="motd-menu hide" data-menu="enfant">';
									html += '<p><h3>Entrees</h3></p>';
									html += '<p>Soupe, Crème de courgettes, sumac et herbes fraîches</p>';
									html += '<p><h3>Résistance</h3></p>';
									html += '<p>Pates<br>ou<br>Pizza du chef</p>';
									html += '<p><h3>Dessert</h3></p>';
									html += '<p>Feuilleté d’été fraises au sirop de mélilot, crème chiboust et fleurs</p>';
								html += '</div>';
							html += '</div>';
						html += '</div>';
					html += '</div>';
			    html += '<p class="mt-4"><button class="btn btn-warning btn-lg" data-action="ControlPanel">Control Panel</button></p>';
			  html += '</div>';
			html += '</div>';
			$('body').prepend(html);
			var motd = $('body').find('div.motd-content-wrapper').first();
			var nav = motd.find('nav.navbar').first();
			var pages = motd.find('div.motd-pages').first();
			var menus = motd.find('div.motd-menus').first();
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
				var page = $(this).attr('data-page');
				nav.find('a[data-page]').removeClass('active');
				$(this).addClass('active');
				pages.find('div[data-page].active').removeClass('active').fadeOut('slow','swing',function(){
					pages.find('div[data-page="'+page+'"]').addClass('active').fadeIn('slow','swing');
				});
			});
			pages.find('div[data-page="menu"]').find('div.btn-group button').off().click(function(){
				var menu = $(this).attr('data-menu');
				pages.find('div[data-page="menu"]').find('div.btn-group button.active').removeClass('active');
				$(this).addClass('active');
				menus.find('div[data-menu].active').removeClass('active').fadeOut('slow','swing',function(){
					menus.find('div[data-menu="'+menu+'"]').addClass('active').fadeIn('slow','swing');
				});
			});
		},
	},
}

API.Plugins.motd.init();
