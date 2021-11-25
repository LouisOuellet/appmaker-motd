<?php
class motdAPI extends CRUDAPI {

	public function get($request = null, $data = null){
		if(isset($data)){
			if(!is_array($data)){ $data = json_decode($data, true); }
			$this->Auth->setLimit(0);
			// Load Event
			$get = parent::get('events', $data);
			// Load Items
			$items = $this->Auth->query('SELECT * FROM `event_items` WHERE `setEvent` = ?',$get['output']['this']['raw']['id']);
			if($items->numRows() > 0){
			  $items = $items->fetchAll()->All();
				foreach($items as $item){
					if(!isset($get['output']['details']['event_items']['raw'][$item['id']])){
						$get['output']['details']['event_items']['raw'][$item['id']] = $this->Auth->read('event_items',$item['id'])->all()[0];
						$get['output']['details']['event_items']['dom'][$item['id']] = $this->convertToDOM($get['output']['details']['event_items']['raw'][$item['id']]);
					}
				}
			}
			if(isset($get['success'],$get['output']['this']['raw']['setPlanners'])){
				if(!isset($get['output']['details']['users'])){ $get['output']['details']['users'] = ['dom' => [],'raw' => []]; }
				foreach(explode(";",trim($get['output']['this']['raw']['setPlanners'],";")) as $userID){
					if(!isset($get['output']['details']['users']['raw'][$userID])){
						$get['output']['details']['users']['raw'][$userID] = $this->Auth->read('users',$userID)->all()[0];
						$get['output']['details']['users']['dom'][$userID] = $this->convertToDOM($get['output']['details']['users']['raw'][$userID]);
					}
				}
			}
			// Load Users
			if(isset($get['success'],$get['output']['this']['raw']['setPlanners'])){
				if(!isset($get['output']['details']['users'])){ $get['output']['details']['users'] = ['dom' => [],'raw' => []]; }
				foreach(explode(";",trim($get['output']['this']['raw']['setPlanners'],";")) as $userID){
					if(!isset($get['output']['details']['users']['raw'][$userID])){
						$get['output']['details']['users']['raw'][$userID] = $this->Auth->read('users',$userID)->all()[0];
						$get['output']['details']['users']['dom'][$userID] = $this->convertToDOM($get['output']['details']['users']['raw'][$userID]);
					}
				}
			}
			if(isset($get['success'],$get['output']['this']['raw']['setStaffs'])){
				if(!isset($get['output']['details']['users'])){ $get['output']['details']['users'] = ['dom' => [],'raw' => []]; }
				foreach(explode(";",trim($get['output']['this']['raw']['setStaffs'],";")) as $userID){
					if(!isset($get['output']['details']['users']['raw'][$userID])){
						$get['output']['details']['users']['raw'][$userID] = $this->Auth->read('users',$userID)->all()[0];
						$get['output']['details']['users']['dom'][$userID] = $this->convertToDOM($get['output']['details']['users']['raw'][$userID]);
					}
				}
			}
			// Load Hosts
			if(isset($get['success'],$get['output']['this']['raw']['setHosts'])){
				if(!isset($get['output']['details'][$get['output']['this']['raw']['setHostType']])){ $get['output']['details']['users'] = ['dom' => [],'raw' => []]; }
				foreach(explode(";",trim($get['output']['this']['raw']['setHosts'],";")) as $ID){
					if(!isset($get['output']['details'][$get['output']['this']['raw']['setHostType']]['raw'][$ID])){
						$get['output']['details'][$get['output']['this']['raw']['setHostType']]['raw'][$ID] = $this->Auth->read($get['output']['this']['raw']['setHostType'],$ID)->all()[0];
						$get['output']['details'][$get['output']['this']['raw']['setHostType']]['dom'][$ID] = $this->convertToDOM($get['output']['details'][$get['output']['this']['raw']['setHostType']]['raw'][$ID]);
					}
				}
			}
			// Build Relations
			foreach($get['output']['relationships'] as $rid => $relations){
				foreach($relations as $uid => $relation){
					if(isset($get['output']['details'][$relation['relationship']]['dom'][$relation['link_to']])){
						$get['output']['relations'][$relation['relationship']][$relation['link_to']] = $get['output']['details'][$relation['relationship']]['dom'][$relation['link_to']];
						$get['output']['relations'][$relation['relationship']][$relation['link_to']]['owner'] = $relation['owner'];
						$get['output']['relations'][$relation['relationship']][$relation['link_to']]['created'] = $relation['created'];
						if(isset($relation['statuses'])){
							$get['output']['relations'][$relation['relationship']][$relation['link_to']]['status'] = $get['output']['details']['statuses']['dom'][$relation['statuses']]['order'];
						}
						if(!isset($get['output']['relations'][$relation['relationship']][$relation['link_to']]['name']) && isset($get['output']['relations'][$relation['relationship']][$relation['link_to']]['first_name'])){
							$get['output']['relations'][$relation['relationship']][$relation['link_to']]['name'] = '';
							if($get['output']['relations'][$relation['relationship']][$relation['link_to']]['first_name'] != ''){
								if($get['output']['relations'][$relation['relationship']][$relation['link_to']]['name'] != ''){
									$get['output']['relations'][$relation['relationship']][$relation['link_to']]['name'] .= ' ';
								}
								$get['output']['relations'][$relation['relationship']][$relation['link_to']]['name'] .= $get['output']['relations'][$relation['relationship']][$relation['link_to']]['first_name'];
							}
							if($get['output']['relations'][$relation['relationship']][$relation['link_to']]['middle_name'] != ''){
								if($get['output']['relations'][$relation['relationship']][$relation['link_to']]['name'] != ''){
									$get['output']['relations'][$relation['relationship']][$relation['link_to']]['name'] .= ' ';
								}
								$get['output']['relations'][$relation['relationship']][$relation['link_to']]['name'] .= $get['output']['relations'][$relation['relationship']][$relation['link_to']]['middle_name'];
							}
							if($get['output']['relations'][$relation['relationship']][$relation['link_to']]['last_name'] != ''){
								if($get['output']['relations'][$relation['relationship']][$relation['link_to']]['name'] != ''){
									$get['output']['relations'][$relation['relationship']][$relation['link_to']]['name'] .= ' ';
								}
								$get['output']['relations'][$relation['relationship']][$relation['link_to']]['name'] .= $get['output']['relations'][$relation['relationship']][$relation['link_to']]['last_name'];
							}
						}
					}
				}
			}
			return $get;
		}
	}

	public function unlink($request = null, $data = null){
		if(isset($data)){
			if(!is_array($data)){ $data = json_decode($data, true); }
			// Return
			$return = [
				"error" => $this->Language->Field["Unable to complete the request"],
				"request" => $request,
				"data" => $data,
				"output" => [
					'relationship' => $data['relationship']['relationship'],
					'id' => $data['relationship']['link_to'],
				],
			];
			$relationships = $this->getRelationships($request,$data['id']);
			foreach($relationships as $id => $relationship){
				foreach($relationship as $relation){
					if(($relation['relationship'] == $data['relationship']['relationship'])&&($relation['link_to'] == $data['relationship']['link_to'])){
						$this->Auth->delete('relationships',$id);
						// Return
						$return = [
							"success" => $this->Language->Field["Record successfully updated"],
							"request" => $request,
							"data" => $data,
							"output" => [
								'relationship' => $data['relationship']['relationship'],
								'id' => $data['relationship']['link_to'],
							],
						];
					}
				}
			}
			return $return;
		}
	}

	public function link($request = null, $data = null){
		if(isset($data)){
			if(!is_array($data)){ $data = json_decode($data, true); }
			// Return
			$return = [
				"error" => $this->Language->Field["Unable to complete the request"],
				"request" => $request,
				"data" => $data,
				"output" => [
					'relationship' => $data['relationship']['relationship'],
					'id' => $data['relationship']['link_to'],
				],
			];
			$found = true;
			$relationships = $this->getRelationships($request,$data['id']);
			foreach($relationships as $id => $relationship){
				foreach($relationship as $relation){
					if(($relation['relationship'] == $data['relationship']['relationship'])&&($relation['link_to'] == $data['relationship']['link_to'])){ $found = false; }
				}
			}
			if(($request == $data['relationship']['relationship'])&&($data['id'] == $data['relationship']['link_to'])){ $found = false; }
			if($found){
				$new = [
					'relationship_1' => $request,
					'link_to_1' => $data['id'],
					'relationship_2' => $data['relationship']['relationship'],
					'link_to_2' => $data['relationship']['link_to'],
				];
				if($data['relationship']['relationship'] == "issues"){
					$status = $this->Auth->query('SELECT * FROM `statuses` WHERE `relationship` = ? AND `order` = ?',$data['relationship']['relationship'],1);
					if($status != null){
						$status = $status->fetchAll()->all();
						if(!empty($status)){
							$new['relationship_3'] = 'statuses';
							$new['link_to_3'] = $status[0]['id'];
						}
					}
				}
				$rel = $this->createRelationship($new);
				$relation = $this->Auth->read($data['relationship']['relationship'],$data['relationship']['link_to']);
				if($relation != null){
					$relation = $relation->all()[0];
					$rel = $this->convertToDOM($rel);
					// Return
					$return = [
						"success" => $this->Language->Field["Record successfully updated"],
						"request" => $request,
						"data" => $data,
						"output" => [
							'relationship' => $data['relationship']['relationship'],
							'id' => $data['relationship']['link_to'],
							'dom' => $this->convertToDOM($relation),
							'raw' => $relation,
							'timeline' => [
								'relationship' => $data['relationship']['relationship'],
								'link_to' => $data['relationship']['link_to'],
								'created' => $rel['created'],
								'owner' => $rel['owner'],
							],
						],
					];
					if(isset($new['relationship_3'],$new['link_to_3'])){ $return['output']['timeline'][$new['relationship_3']] = $new['link_to_3']; }
				}
			}
			return $return;
		}
	}

	public function create($request = null, $data = null){
		if($data != null){
			if(!is_array($data)){ $data = json_decode($data, true); }
			if(!isset($data['key'])){ $data['key'] = 'id'; }
			if(isset($data['organization'])){ $data['name'] = $data['organization']; }
			if(isset($data['client'])){ $data['name'] = $data['client']; }
			if(isset($data['lead'])){ $data['name'] = $data['lead']; }
			if(isset($data['name'])){ $create = true; } else { $create = false; }
			// Lookup for an existing Entity
			if(isset($data['name']) && is_numeric($data['name'])){
				$organization = $this->Auth->read('motd',$data['name']);
				if($organization != null){
					$organization = $organization->all()[0];
					$create = false;
				}
			}
			if($create){
				// Create Entity
				$result = $this->Auth->create('motd',$this->convertToDB($data));
				// Fetch Entity
				$organization = $this->Auth->read('motd',$result)->all()[0];
				// Init Subscriptions
				$subscriptions = [];
				// Init Subscribed
				$subscribed = [];
				// Init Sub-Categories
				$sub_category = [];
				// Init Messages
				$messages = [];
				// Init Users
				$users = [];
				// Fetch Category
				$issues = $this->Auth->query('SELECT * FROM `issues` WHERE `isDefault` = ?','true')->fetchAll();
				if($issues != null){ $issues = $issues->all(); } else { $issues = []; }
				// Fetch Category
				$category = $this->Auth->query('SELECT * FROM `categories` WHERE `name` = ? AND `relationship` = ?','motd','subscriptions')->fetchAll()->all()[0];
				// Fetch Sub Categories
				$sub_categories = $this->Auth->query('SELECT * FROM `sub_categories` WHERE `relationship` = ?','subscriptions')->fetchAll()->all();
				foreach($sub_categories as $subs){
					$sub_category[$subs['name']] = $subs;
					// Fetch Subscriptions
					$list = $this->Auth->query('SELECT * FROM `subscriptions` WHERE `category` = ? AND `sub_category` = ?',$category['id'],$subs['id'])->fetchAll();
					if($list != null){
						$list = $list->all();
					} else { $list = []; }
					foreach($list as $subscription){ $subscriptions[$subs['name']][$subscription['relationship']][$subscription['link_to']] = $subscription; }
				}
				// Adding Issues
				foreach($this->Auth->read('statuses','1','order')->all() as $statuses){
					if($statuses['relationship'] == 'issues'){ $status = $statuses; }
				}
				foreach($issues as $issue){
					$this->createRelationship([
						'relationship_1' => 'motd',
						'link_to_1' => $organization['id'],
						'relationship_2' => 'issues',
						'link_to_2' => $issue['id'],
						'relationship_3' => 'statuses',
						'link_to_3' => $status['id'],
					]);
				}
				// Create Status
				if(isset($data['status'])){
					foreach($this->Auth->read('statuses',$data['status'],'order')->all() as $statuses){
						if($statuses['relationship'] == 'motd'){ $status = $statuses; }
					}
					$this->createRelationship([
						'relationship_1' => 'motd',
						'link_to_1' => $organization['id'],
						'relationship_2' => 'statuses',
						'link_to_2' => $status['id'],
					]);
				}
				// Create Subscriptions
				foreach($subscriptions as $subscriptionType){
					foreach($subscriptionType as $type => $subscriptionArray){
						foreach($subscriptionArray as $subscription){
							if(!isset($subscribed[$subscription['relationship']])){ $subscribed[$subscription['relationship']] = []; }
							if(!in_array($subscription['link_to'], $subscribed[$subscription['relationship']])){
								array_push($subscribed[$subscription['relationship']], $subscription['link_to']);
								switch($subscription['relationship']){
									case"users":
										if(isset($users[$subscription['link_to']])){
											$this->createRelationship([
												'relationship_1' => 'motd',
												'link_to_1' => $organization['id'],
												'relationship_2' => $subscription['relationship'],
												'link_to_2' => $subscription['link_to'],
											]);
										}
										break;
									default:
										$this->createRelationship([
											'relationship_1' => 'motd',
											'link_to_1' => $organization['id'],
											'relationship_2' => $subscription['relationship'],
											'link_to_2' => $subscription['link_to'],
										]);
										break;
								}
							}
						}
					}
				}
				// Create Contact
				if(isset($data['first_name']) && !empty($data['first_name']) && $data['first_name'] != null){
					$contact = [
						'first_name' => $data['first_name'],
						'middle_name' => $data['middle_name'],
						'last_name' => $data['last_name'],
						'job_title' => $data['job_title'],
						'email' => $data['email'],
						'phone' => $data['phone'],
						'relationship' => 'motd',
						'link_to' => $result,
					];
					if(class_exists('contactsAPI')){
						$contactsAPI = new contactsAPI();
						$contactsAPI->create('contacts',$contact);
					}
				}
				// Fetch Linked Entity
				if((isset($organization['organization']))&&($organization['organization'] != '')){
					$linkedEntity = $this->Auth->read('motd',$organization['organization']);
					if($linkedEntity != null){
						$linkedEntity = $linkedEntity->all()[0];
						// Fetch Users
						if($linkedEntity['assigned_to'] != ''){
							foreach(explode(";",motd['assigned_to']) as $userID){
								$user = $this->Auth->read('users',$userID);
								if($user != null){
									$user = $user->all()[0];
									$users[$user['id']] = $user;
								}
							}
						}
						// Create Linked Entity
						if('motd' != 'motd'){
							$this->createRelationship([
								'relationship_1' => 'motd',
								'link_to_1' => $organization['id'],
								'relationship_2' => 'motd',
								'link_to_2' => $linkedEntity['id'],
							]);
						}
					}
				}
				// Fetch Relationships
				$relationships = $this->getRelationships('motd',$organization['id']);
				// Send Notifications
				if((isset($relationships))&&(!empty($relationships))){
					foreach($relationships as $id => $links){
						foreach($links as $relationship){
							// Fetch Contact Information
							unset($contact);
							if($relationship['relationship'] == "users"){ $contact = $this->Auth->read('users',$relationship['link_to'])->all()[0]; }
							if(isset($contact)){
								if(isset($subscriptions['new']['users'][$contact['id']])){
									// Send Internal Notifications
									if(isset($contact['username'])){
										parent::create('notifications',[
											'icon' => 'icon icon-organization mr-2',
											'subject' => 'You have a new organization',
											'dissmissed' => 1,
											'user' => $contact['id'],
											'href' => '?p='.'motd'.'&v=details&id='.$organization[$data['key']],
										]);
									}
									// Send Mail Notifications
									if(isset($contact['email'])){
										$message = [
											'email' => $contact['email'],
											'message' => 'A new organization has been added.',
											'extra' => [
												'from' => $this->Auth->User['email'],
												'replyto' => $this->Settings['contacts']['motd'],
												'subject' => "ALB Connect -"." ID:".$organization['id']." Entity:".$organization[$data['key']],
												'href' => '?p='.'motd'.'&v=details&id='.$organization[$data['key']],
											],
										];
										$message['status'] = $this->Auth->Mail->send($message['email'],$message['message'],$message['extra']);
										$messages[$contact['email']] = $message;
									}
								}
							}
						}
					}
				}
			}
			if((isset($data['client']))||(isset($data['lead']))){
				// Init Entity
				$result = $organization['id'];
				if(isset($data['client'])){ $organization['isClient'] = 'true';$organization['isActive'] = 'true'; }
				if(isset($data['lead'])){ $organization['isLead'] = 'true';$organization['isActive'] = 'true'; }
				// Update Entity
				$this->Auth->update('motd',$organization,$organization['id']);
			}
			// Return
			if(isset($organization)){
				$results = [
					"success" => $this->Language->Field["Record successfully created"],
					"request" => $request,
					"data" => $data,
					"output" => [
						'dom' => $this->convertToDOM($organization),
						'raw' => $organization,
					],
				];
			} else {
				$results = [
					"error" => $this->Language->Field["Unable to complete the request"],
					"request" => $request,
					"data" => $data,
				];
			}
		} else {
			if(isset($data['name'])){
				$results = [
					"error" => $this->Language->Field["Unable to complete the request"],
					"request" => $request,
					"data" => $data,
				];
			} else {
				$results = [
					"error" => $this->Language->Field["Unable to complete the request"].", no name provided.",
					"request" => $request,
					"data" => $data,
				];
			}
		}
		return $results;
	}
}
