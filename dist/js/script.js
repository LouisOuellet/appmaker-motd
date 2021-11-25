API.Plugins.motd = {
	init:function(){
		API.GUI.Sidebar.Nav.add('motd', 'main_navigation');
	},
	load:{
		index:function(){

		},
		details:function(){
			$('div.wrapper').hide();
			var url = new URL(window.location.href);
			var id = url.searchParams.get("id");
			API.request(url.searchParams.get("p"),'get',{data:{id:id,key:'id'}},function(result){
				var dataset = JSON.parse(result);
				if(dataset.success != undefined){
					var data = dataset.output;
					var html = '';
					html += '<div class="motd-content-wrapper motd-background row m-0 align-items-center text-center justify-content-center">';
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
							      html += '<a class="nav-item nav-link" data-page="vows">Voeux</a>';
							      html += '<a class="nav-item nav-link" data-page="planning">Programme</a>';
							      html += '<a class="nav-item nav-link" data-page="menu">Menu</a>';
							    html += '</div>';
							  html += '</div>';
							html += '</nav>';
							html += '<div class="motd-pages">';
								html += '<div class="motd-page active" data-page="about">';
									html += '<p><h2>A Propos</h2></p>';
									html += data.this.raw.about;
								html += '</div>';
								html += '<div class="motd-page hide" data-page="gallery">';
									html += '<p><h2>Gallerie</h2></p>';
									html += '<div class="row justify-content-center">';
										html += '<div class="col-lg-4 col-sm-6 mb-4">';
											html += '<div class="portfolio-item">';
												html += '<a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">';
													html += '<div class="portfolio-hover">';
														html += '<div class="portfolio-hover-content"><i class="fas fa-expand fa-3x"></i></div>';
													html += '</div>';
													html += '<img class="img-fluid" src="/plugins/motd/dist/img/roses.png" alt="..." />';
												html += '</a>';
											html += '</div>';
										html += '</div>';
										html += '<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">';
					            html += '<div class="modal-dialog">';
				                html += '<div class="modal-content">';
		                      html += '<div class="row justify-content-center">';
		                        html += '<div class="col-12">';
		                          html += '<div class="modal-body">';
																html += '<div class="close-modal" data-dismiss="modal"></div>';
		                            html += '<img class="img-fluid d-block mx-auto" src="/plugins/motd/dist/img/roses.png" alt="..." />';
		                          html += '</div>';
		                        html += '</div>';
		                      html += '</div>';
				                html += '</div>';
					            html += '</div>';
						        html += '</div>';
										html += '<div class="col-lg-4 col-sm-6 mb-4">';
											html += '<div class="portfolio-item">';
												html += '<a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">';
													html += '<div class="portfolio-hover">';
														html += '<div class="portfolio-hover-content"><i class="fas fa-expand fa-3x"></i></div>';
													html += '</div>';
													html += '<img class="img-fluid" src="/plugins/motd/dist/img/hands.png" alt="..." />';
												html += '</a>';
											html += '</div>';
										html += '</div>';
										html += '<div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">';
					            html += '<div class="modal-dialog">';
				                html += '<div class="modal-content">';
		                      html += '<div class="row justify-content-center">';
		                        html += '<div class="col-12">';
		                          html += '<div class="modal-body">';
																html += '<div class="close-modal" data-dismiss="modal"></div>';
		                            html += '<img class="img-fluid d-block mx-auto" src="/plugins/motd/dist/img/hands.png" alt="..." />';
		                          html += '</div>';
		                        html += '</div>';
		                      html += '</div>';
				                html += '</div>';
					            html += '</div>';
						        html += '</div>';
									html += '</div>';
								html += '</div>';
								html += '<div class="motd-page hide" data-page="attendance">';
									html += '<p><h2>Invitations</h2></p>';
									html += '<p class="text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>';
									html += '<p class="text-justify">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>';
								html += '</div>';
								html += '<div class="motd-page hide" data-page="vows">';
									html += '<p><h2>Voeux</h2></p>';
									html += '<p class="text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>';
									html += '<p class="text-justify">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>';
								html += '</div>';
								html += '<div class="motd-page hide" data-page="planning">';
									html += '<p><h2>Programme</h2></p>';
		              html += '<ul class="timeline">';
		                html += '<li>';
		                  html += '<div class="timeline-image"><h4>13:00</h4></div>';
		                  html += '<div class="timeline-panel">';
		                    html += '<div class="timeline-heading">';
		                      html += '<h4>Arrivé des invités</h4>';
		                    html += '</div>';
		                    html += '<div class="timeline-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>';
		                  html += '</div>';
		                html += '</li>';
		                html += '<li class="timeline-inverted">';
		                  html += '<div class="timeline-image"><h4>13:30</h4></div>';
		                  html += '<div class="timeline-panel">';
		                    html += '<div class="timeline-heading">';
		                      html += '<h4>Allergies</h4>';
		                    html += '</div>';
		                    html += '<div class="timeline-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>';
		                  html += '</div>';
		                html += '</li>';
		                html += '<li>';
		                  html += '<div class="timeline-image"><h4>14:00</h4></div>';
		                  html += '<div class="timeline-panel">';
		                    html += '<div class="timeline-heading">';
		                      html += '<h4>Décoration de la salle</h4>';
		                    html += '</div>';
		                    html += '<div class="timeline-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>';
		                  html += '</div>';
		                html += '</li>';
		                html += '<li class="timeline-inverted">';
		                  html += '<div class="timeline-image"><h4>16:00</h4></div>';
		                  html += '<div class="timeline-panel">';
		                    html += '<div class="timeline-heading">';
		                      html += '<h4>Cérémonie</h4>';
		                    html += '</div>';
		                    html += '<div class="timeline-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>';
		                  html += '</div>';
		                html += '</li>';
		                html += '<li>';
		                  html += '<div class="timeline-image"><h4>16:45</h4></div>';
		                  html += '<div class="timeline-panel">';
		                    html += '<div class="timeline-heading">';
		                      html += '<h4>Cocktail</h4>';
		                    html += '</div>';
		                    html += '<div class="timeline-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>';
		                  html += '</div>';
		                html += '</li>';
		                html += '<li class="timeline-inverted">';
		                  html += '<div class="timeline-image"><h4>17:00</h4></div>';
		                  html += '<div class="timeline-panel">';
		                    html += '<div class="timeline-heading">';
		                      html += '<h4>Ouverture du Bar</h4>';
		                    html += '</div>';
		                    html += '<div class="timeline-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>';
		                  html += '</div>';
		                html += '</li>';
		                html += '<li>';
		                  html += '<div class="timeline-image"><h4>18:00</h4></div>';
		                  html += '<div class="timeline-panel">';
		                    html += '<div class="timeline-heading">';
		                      html += '<h4>Repas Servi</h4>';
		                    html += '</div>';
		                    html += '<div class="timeline-body"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>';
		                  html += '</div>';
		                html += '</li>';
		              html += '</ul>';
								html += '</div>';
								html += '<div class="motd-page hide" data-page="menu">';
									html += '<p><h2>Menu</h2></p>';
									html += '<div class="btn-group btn-block">';
										html += '<button class="btn btn-outline-warning btn-lg active" data-menu="adult">Adulte</button>';
										html += '<button class="btn btn-outline-warning btn-lg" data-menu="kid">Enfant</button>';
									html += '</div>';
									html += '<div class="motd-menus mt-4">';
										html += '<div class="motd-menu active" data-menu="adult">';
											html += data.this.raw.menuAdult;
										html += '</div>';
										html += '<div class="motd-menu hide" data-menu="kid">';
											html += data.this.raw.menuKid;
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
				} else { $('div.wrapper').show(); }
			});
		},
	},
}

API.Plugins.motd.init();
