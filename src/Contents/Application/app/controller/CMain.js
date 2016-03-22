App.controller.define('CMain', {

    views: [
        "VMain",
        "VForm1",
        "VForm2",
        "VForm3",
        "VForm4",
        "VShowDoc",
        "VMobile",
        "VFavoris"
    ],

    models: [

    ],

    init: function() {

        this.control({
            "menu>menuitem": {
                click: "Menu_onClick"
            },
            "button#CancelMobile": {
                click: "CancelMobile"
            },
            "button#SynchroniserMobile": {
                click: "SynchroniserMobile"
            },
            "TForm1 grid#AO": {
                itemclick: "AO_onclick",
                itemdblclick: "grid_dblclick",
                beforeitemcontextmenu: "grid_oncontextmenu"
            },
            "TFavoris grid#AO": {
                itemclick: "AO_onclick",
                itemdblclick: "grid_dblclick",
                beforeitemcontextmenu: "grid_oncontextmenu"
            },
            "uploadpanel#up": {
                itemuploadsuccess: "item_upload"
            },
            "button#ajouter_modification": {
                click: "ajouter_modification"
            },
            "button#b_favoris": {
                click: "ShowFavoris"
            },
            "button#retour_accueil": {
                click: "ShowAccueil"
            },
			"datefield#date": {
				change: "date_change_week"
			},
            "TShowDoc button#Exit": {
                click: "button_exit_onclick"
            },
            "button#ajouter_groupe": {
                click: "Ajouter_groupe"
            },
            "button#ajouter_agent": {
                click: "ajouter_agent"
            },
            "button#effacer_saisie": {
                click: "effacer_saisie"
            },
            "button#annuler": {
                click: "annuler"
            },
            "button#annuler2": {
                click: "annuler2"
            },
            "button#CANCEL_lien": {
                click: "CANCEL_lien"
            },
            "uploadfilemanager#up": {
                itemdblclick: "up_click"
            },
            "grid#grid2": {
                itemclick: "grid2_onclick",
                itemdblclick: "grid2_doubleclick"
            },
            "grid#grid3": {
                itemclick: "grid3_onclick",
                itemdblclick: "grid3_doubleclick"
            },
            "grid#grid1": {
                itemclick: "grid1_onclick"
            },
            "grid#upload": {
                itemclick: "upload_onclick"
            },
            "TForm2 grid#grid1": {
                beforeitemcontextmenu: "grid1_oncontextmenu"
            },
            "button#ajouter2": {
                click: "validation_groupe"
            },
            "button#ajouter": {
                click: "validation_agent"
            },
            "button#valider_saisie": {
                click: "valider_saisie"
            },
            "TForm2": {
                show: "TForm2_onshow"
            },
            "combo#cboDomaine": {
                select: "valider_thematiques"
            },
            "TForm2 textfield#ed_keyword": {
                keydown : "keyword_add"   
            }
        });

        App.init('VMain', this.onLoad);

    },
    keyword_add: function(p,s) {
        console.log(s.button);
        if (s.button==12) {
            App.DB.get('gestionao2://keywords?keyword='+p.getValue(),function(o) {
                if (o.data.length==0) {
                    App.DB.post('gestionao2://keywords',{
                        keyword: p.getValue()   
                    }, function(e,r) {
                        App.get('TForm2 boxselect#Keywords').getStore().load();
						App.get('TForm2 boxselect#Keywords').getStore().on('load',function() {
							var values=App.get('TForm2 boxselect#Keywords').getValue();
							values.push(e.insertId);
							App.get('TForm2 boxselect#Keywords').setValue([]);
							App.get('TForm2 boxselect#Keywords').setValue(values);
                            App.get('TForm2 textfield#ed_keyword').hide();
                            App.get('boxselect#Keywords').show();      
                            App.get('TForm2 button#add_keyword').setDisabled(false);
						});                        
                    });
                } else {
                    App.get('TForm2 textfield#ed_keyword').hide();
                    App.get('boxselect#Keywords').show();                     
                    App.get('TForm2 button#add_keyword').setDisabled(false);
                }
            });
        }
    },
	date_change_week: function(p) {
		App.get('textfield#numero_semaine').setValue(p.getValue().getWeekOfYear()+1);
	},
	up_click: function(p, record) {
		App.view.create('VShowDoc', {
			modal: true,
			pid: record.data.docId
		}).show().center();
    },
	grid_oncontextmenu: function(view, record, item, index, e) {
        e.stopEvent();
		Auth.login(function(user) {
			App.AO.getProfil(user.mail, function(err, r) {
				if (r.result.length<=0) return;
				var gridMenu = Ext.create('Ext.menu.Menu', {
					items: [{
						text: 'Supprimer',
						handler: function() {
							Ext.MessageBox.show({
							   title:"Supprimer l'appel d'offre",
							   msg: "Vous êtes sur le point de supprimer cet appel d'offre. Voulez vous continuer ?",
							   buttons: Ext.MessageBox.YESNOCANCEL,
							   fn: function(btn) {
									if (btn=="yes") {
										App.AO.del(record.data.IdAppelOffre,function(err,r){
											view.getStore().load();
											App.notify("L'appel d'offre a été supprimé");
										});									
									}
							   },
							   animateTarget: 'mb4',
							   icon: Ext.MessageBox.QUESTION
							});
						}

					}]
				});
				gridMenu.showAt(e.getXY());				
			});
		});
		
    },
    button_exit_onclick: function() {
        App.get('TShowDoc').close();
    },
    item_upload: function(response) {
        UPLOADZ.push(response.message);
    },
    //Permet le double click sur un appelOffre et recupere les données 
    grid_dblclick: function(p, record) {


        OP = false;

        App.view.create('VForm2', {
            modal: true,
			listeners: {
				show: function() {
					Auth.login(function(user) {
						App.AO.getProfil(user.mail, function(err, r) {
							
							if (r.result.length > 0) {

								App.get('TForm2').setTitle('Modifier un enregistrement');
								App.get('combo#cboNom').setValue(record.data.IdSource);
								
								App.DB.get('gestionao2://mails?idao='+record.data.IdAppelOffre,function(e,r) {
									try {
										var t=JSON.parse(r.result.data[0].value);
										App.get('grid#grid1').getStore().loadRawData(t);
									}catch(e) {}
								});
								
								App.get('combo#cboType').setValue(record.data.IdConsultation);
								App.get('textfield#objet').setValue(record.data.Objet);
								App.get('textfield#client').setValue(record.data.Client);
								App.get('textfield#observations').setValue(record.data.Observation);
								App.get('uploadfilemanager#up').setFiles(JSON.parse(record.data._BLOB));
								if (record.data.Keywords) App.get('boxselect#Keywords').setValue(JSON.parse(record.data.Keywords));
								
								try {
									var tab = record.data.IdDepartement.split(',');
								} catch (e) {
									var tab = [];
									tab.push(record.data.IdDepartement);
								};
								var tabx = [];
								for (var i = 0; i < tab.length; i++) {
									tabx.push(parseInt(tab[i]));
								};
								
								App.get('boxselect#cboDepartement').setValue(tabx);
								App.get('datefield#date').setValue(record.data.DateParution);
								App.get('datefield#date_limite').setValue(record.data.DateLimite);
								App.get('combo#cboCode').setValue(record.data.IdNaturePrestation);
								App.get('textfield#numero_semaine').setValue(record.data.Semaine);
								App.get('combo#cboDomaine').setValue(record.data.IdDomaine);
								App.get('combo#cboThematique').setValue(record.data.IdThematique);
								if (App.get('combo#cboDomaine').getValue() == 0) {
									App.get('combo#cboDomaine').setValue('');
								};
								App.get('combo#cboThematique').getStore().getProxy().extraParams.id_domaine = record.data.Id_domaine;
								App.get('combo#cboThematique').getStore().load();

								AO_ID = record.data.IdAppelOffre;

							} else {
								AO_ID = record.data.IdAppelOffre;
								App.get('TForm2').setTitle('Appel d\'offre');
								App.get('panel#regroupement_hboxGrid1').hide();
								App.get('uploadfilemanager#up').setReadOnly(true);
								App.get('combo#cboNom').setReadOnly(true);
								App.get('combo#cboType').setReadOnly(true);
								App.get('boxselect#cboDepartement').setReadOnly(true);
								App.get('datefield#date').setReadOnly(true);
								App.get('datefield#date_limite').setReadOnly(true);
								App.get('button#effacer_saisie').hide();
								App.get('button#valider_saisie').hide();
								App.get('textfield#client').setReadOnly(true);
								App.get('textarea#objet').setReadOnly(true);
								App.get('textarea#observations').setReadOnly(true);
								App.get('combo#cboDomaine').setReadOnly(true);
								App.get('combo#cboThematique').setReadOnly(true);
								App.get('combo#cboCode').setReadOnly(true);
								App.get('TForm2 boxselect#Keywords').setReadOnly(true);
								App.get('TForm2 button#add_keyword').hide();
								App.get('combo#cboNom').setValue(record.data.IdSource);
								App.get('combo#cboType').setValue(record.data.IdConsultation);
								App.get('textfield#objet').setValue(record.data.Objet);
								App.get('textfield#client').setValue(record.data.Client);
								App.get('textfield#observations').setValue(record.data.Observation);

								App.get('uploadfilemanager#up').setFiles(JSON.parse(record.data._BLOB));

								try {
									var tab = record.data.IdDepartement.split(',');
								} catch (e) {
									var tab = [];
									tab.push(record.data.IdDepartement);
								};
								var tabx = [];
								for (var i = 0; i < tab.length; i++) {
									tabx.push(parseInt(tab[i]));
								};
								App.get('boxselect#cboDepartement').setValue(tabx);
								App.get('boxselect#cboDepartement').getStore().on('load', function() {
									
								});
								App.get('datefield#date').setValue(record.data.DateParution);
								App.get('datefield#date_limite').setValue(record.data.DateLimite);

								App.get('combo#cboCode').setValue(record.data.IdNaturePrestation);
								App.get('textfield#numero_semaine').setValue(record.data.Semaine);
								App.get('combo#cboDomaine').setValue(record.data.IdDomaine);
								App.get('combo#cboThematique').setValue(record.data.IdThematique);
								if (App.get('combo#cboDomaine').getValue() == 0) {
									App.get('combo#cboDomaine').setValue('');
								}
								App.get('combo#cboThematique').getStore().getProxy().extraParams.id_domaine = record.data.Id_domaine;
								App.get('combo#cboThematique').getStore().load();

							}
						});
					});
				
				}
			}
        }).show().center();
        
    },
    //Si l'url contient ?appelOffre= cela modifie la fenêtre initial et affiche les données de l'appelOffre correspondante
    TForm2_onshow: function(p) {
		var d=new Date();
		App.get('TForm2 textfield#numero_semaine').setValue(d.getWeekNumber());
	
        AO_ID = "";
        UPLOADZ = [];
        BLOB = [];
        EMAIL = [];

    },

    AO_onclick: function(p, record) {

    },

    //Permet de supprimer une ligne avec le clic droit supprimer
    grid1_oncontextmenu: function(view, record, item, index, e) {
        Remove_Id = record.data.Id;
        e.stopEvent();
        var gridMenu = Ext.create('Ext.menu.Menu', {
            items: [{
                text: 'Supprimer',
                handler: function() {
                    var ndx = App.get("grid#grid1").getSelectionModel().getSelection();
                    console.log(ndx);
                    App.get('grid#grid1').getStore().remove(ndx);
                }

            }]
        });
        gridMenu.showAt(e.getXY());

    },
    //Permet de supprimer une ligne avec le clic droit supprimer
    grid_upload_oncontextmenu: function(view, record, item, index, e) {
        e.stopEvent();
        var gridMenu = Ext.create('Ext.menu.Menu', {
            items: [{
                text: 'Supprimer',
                handler: function() {
                    var ndx = App.get("grid#upload").getSelectionModel().getSelection();
                    console.log(ndx);
                    App.get('grid#upload').getStore().remove(ndx);
                }

            }]
        });
        gridMenu.showAt(e.getXY());

    },
/*****************************************************************************************************************************************************************/
    LoadFavoris: function(){
        Auth.login(function(user) {

        App.DB.get('gestionao2://favoris?UId=' + user.uid,function(e, r){
                if(e.success){
                    if(e.data[0].Favoris){
                        console.log(e.data[0].Favoris);
                    }
                }
/*
                var store = App.store.create({
                    fields : r.result.metaData.fields,
                    data : r.result.data,
                    groupField: 'nom_thematique'
                });

                App.get('TFavoris grid#AO').bindStore(store);
                App.get('TFavoris grid#AO').getStore().load();
*/
            });


        });
      
    },
    ShowFavoris: function(){
        this.LoadFavoris();
        App.get('TForm1').hide();
        App.get('TFavoris').show();
    },
    ShowAccueil: function(){
        App.get('TForm1').show();
        App.get('TFavoris').hide();
    },
    Menu_onClick: function(p) {
        if (p.itemId) {
            if (p.itemId == "MobileADD") {
                App.view.create('VMobile',{modal: true}).show().center();
            }
        };
    },
    CancelMobile: function(p, record) {
        App.get('VMobile').close();
    },
    SynchroniserMobile: function(p){

        var mobileId = App.get('VMobile textfield#Peripherique').getValue();

        if(mobileId != ''){
            Auth.login(function(user) {

                var UId = user.uid;

                App.DB.get('gestionao2://mobile?MobileId=' + mobileId, function(e,r) {

                    if(r.result.data.length == 1) {
                        if(e.data[0].UId == null){
                            App.DB.post('gestionao2://mobile',{
                                UId: UId,
                                MobileId: mobileId
                            },function(e,r) {
                                if(r.result.affectedRows == 1) {
                                    App.get('VMobile label#LabelError').el.setStyle({"color":"green"});
                                    App.get('VMobile label#LabelError').setText('Synchronisation Terminée.');
                                    App.IO.send("#"+mobileId,true,"*");
                                }
                            });
                        } else {
                            App.get('VMobile label#LabelError').el.setStyle({"color":"orange"});
                            App.get('VMobile label#LabelError').setText('Ce code Mobile est déjà attribué.');
                            App.IO.send("#"+mobileId,true,"*");
                        }

                    } else {
                        App.get('VMobile label#LabelError').el.setStyle({"color":"red"});
                        App.get('VMobile label#LabelError').setText('Code incorrect.');
                    }
                });
            });
        } else {
            App.get('VMobile label#LabelError').el.setStyle({"color":"red"});
            App.get('VMobile label#LabelError').setText('Champ Obligatoire.');
        }
    },
/*****************************************************************************************************************************************************************/
    //remet les saisies à vide
    effacer_saisie: function(p, record) {
        App.get('combo#cboNom').setValue('');
        App.get('datefield#date').setValue('');
        App.get('combo#cboType').setValue('');
        App.get('textfield#objet').setValue('');
        App.get('textfield#client').setValue('');
        App.get('textfield#observations').setValue('');
        App.get('combo#cboDepartement').setValue('');
        App.get('datefield#date_limite').setValue('');
        App.get('combo#cboCode').setValue('');
        App.get('textfield#numero_semaine').setValue('');
        App.get("grid#grid1").getStore().removeAll();
        App.get("grid#upload").getStore().removeAll();
        App.get('combo#cboDomaine').setValue('');
        App.get('combo#cboThematique').setValue('');
        EMAIL = [];
        BLOB = [];

    },
    ajouter_modification: function(p, record) {
        OP = true;
        App.view.create('VForm2', {
            modal: true
        }).show().center();

    },
    //bouton ajouter groupe de la grid principal
    Ajouter_groupe: function(p, record) {

        App.view.create('VForm4', {
            modal: true
        }).show();
    },
    //bouton ajouter agent de la grid principal
    ajouter_agent: function(p, record) {

        App.view.create('VForm3', {
            modal: true
        }).show();

    },
    //Bouton annuler de la grid agent
    annuler: function(p, record) {
        App.get('TForm3').close();
    },

    //Bouton annuler de la grid groupe
    annuler2: function(p, record) {
        App.get('TForm4').close();
    },

    CANCEL_lien: function(p, record) {
        App.get('TForm2').close();
    },

    grid1_onclick: function(p, record) {
        console.log(record);
    },

    //Grid agent
    grid2_onclick: function(p, record) {

        GRP_NOM2 = record.data.Nom + " " + record.data.Prenom;
        GRP_EMAIL2 = record.data.LibMelA;
        console.log(record);
        GRP_ID2 = record.data.Kage;


    },
    // Permet le double clic sur un enregistrement qui ajoutera les données si il y a un mail
    grid2_doubleclick: function(p, record) {

        GRP_NOM2 = record.data.Nom + " " + record.data.Prenom;
        GRP_EMAIL2 = record.data.LibMelA;
        console.log(record);
        GRP_ID2 = record.data.Kage;


        if (GRP_EMAIL2 == null) Ext.Msg.alert('Mail manquant', 'Cette agent n\'a pas encore de mail !');
        else {
            App.get('grid#grid1').getStore().add([{
                Nom: GRP_NOM2,
                Email: GRP_EMAIL2,
                Type: "Agent",
                Id: GRP_ID2
            }]);

            EMAIL.push(GRP_EMAIL2);
            EMAIL.join(',');
            console.log(EMAIL);
        }
    },

    //Grid groupe 
    grid3_onclick: function(p, record) {
        GRP_NOM = record.data.LibUnic;
        GRP_EMAIL = record.data.LibMelU;
        console.log(record);

    },
    // Permet le double clic sur un enregistrement qui ajoutera les données si il y a un mail
    grid3_doubleclick: function(p, record) {

        GRP_NOM = record.data.LibUnic;
        GRP_EMAIL = record.data.LibMelU;

        if (GRP_EMAIL == null) Ext.Msg.alert('Mail manquant', 'Ce groupe n\'a pas encore de mail !');
        else {
            App.get('grid#grid1').getStore().add([{
                Nom: GRP_NOM,
                Email: GRP_EMAIL,
                Type: "Groupe",

            }]);

            EMAIL.push(GRP_EMAIL);
            EMAIL.join(',');
            console.log(EMAIL);
        }
    },

    //Bouton valider de la grid groupe
    validation_groupe: function(p, record) {
        /* App.get('grid#grid1').getStore().add([{
			Nom: GRP_NOM,
			Email: GRP_EMAIL,
			Type: "Groupe",
		}]); */
        App.get('TForm4').close();
    },
    //Bouton valider de la grid agent
    validation_agent: function(p, record) {
        /* App.get('grid#grid1').getStore().add([{
			Nom: GRP_NOM2,
			Email: GRP_EMAIL2,
			Type: "Agent",
			Id: GRP_ID2
		}]); */
        App.get('TForm3').close();
    },
    //Certain saisie sont obligatoire. Si on a fait un click sur le bouton ajouter_modification on fera 
    //de l'insertion et si on a fait un click sur grid_dblclick on fera une modification dans la base de donnée
    valider_saisie: function(p, record) {

		p.setDisabled(true);
        //for (var i=0;i<filez.length;i++) UPLOADZ.push(filez[i].tmpfilename+'|'+filez[i].filename+'|'+filez[i].filetype+'|'+filez[i].filesize);

        var temoin = false;
        if (App.get('combo#cboNom').getValue() == null) {
            alert('Veuillez entrer un nom');
            temoin = true;
        };
        if (App.get('datefield#date').getValue() == null) {
            alert('Veuillez entrer une date de parution');
            temoin = true;
        };
        if (App.get('combo#cboType').getValue() == null) {
            alert('Veuillez entrer un type de consulatation');
            temoin = true;
        };
        if (App.get('textfield#client').getValue() == "") {
            alert('Veuillez entrer un client');
            temoin = true;
        };
        if (App.get('textfield#objet').getValue() == "") {
            alert('Veuillez entrer un objet');
            temoin = true;
        };
        if (App.get('boxselect#cboDepartement').getValue() == null) {
            alert('Veuillez entrer un département');
            temoin = true;
        };
        if (App.get('datefield#date_limite').getValue() == null) {
            alert('Veuillez entrer une date limite');
            temoin = true;
        };
        if (App.get('combo#cboDomaine').getValue() == null) {
            alert('Veuillez entrer un domaine');
            temoin = true;
        };
        if (App.get('combo#cboThematique').getValue() == null) {
            alert('Veuillez entrer une thématique');
            temoin = true;
        };
        if (App.get('combo#cboCode').getValue() == null) {
            alert('Veuillez entrer un code de la prestation');
            temoin = true;
        };
        if (App.get('textfield#numero_semaine').getValue() != parseInt(App.get('textfield#numero_semaine').getValue())) {
            alert('Veuillez entrer un numero de semaine');
            temoin = true;
        };
        if (temoin) return;

        if (OP == true) {

            var o = {
                IdSource: App.get('combo#cboNom').getValue(),
                DateParution: App.get('datefield#date').getValue(),
                IdConsultation: App.get('combo#cboType').getValue(),
                Objet: App.get('textfield#objet').getValue(),
                Client: App.get('textfield#client').getValue(),
                Observation: App.get('textfield#observations').getValue(),
                IdDepartement: App.get('combo#cboDepartement').getValue().join(','),
                DateLimite: App.get('datefield#date_limite').getValue(),
                Semaine: App.get('textfield#numero_semaine').getValue(),
                IdDomaine: App.get('combo#cboDomaine').getValue(),
                IdThematique: App.get('combo#cboThematique').getValue(),
                IdNaturePrestation: App.get('combo#cboCode').getValue(),
                _BLOB: App.get('uploadfilemanager#up').getFiles(),
                Keywords: App.get('boxselect#Keywords').getValue()
            };

            App.AO.insert(o, function(err, rr) {
                if (!rr) {
                    App.notify("Un problème est survenu lors de l'enregistrement de la fiche");
					p.setDisabled(false);
                    return;
                };
                var id_appelOffre = rr.result.insertId;

				var values=App.get('TForm2 boxselect#Keywords').getRawValue().split(', ');
				App.DB.get('gestionao2://keywords?keyword=["'+values.join('","')+'"]', function(e,r) {
					var arr=[];
					for (var i=0;i<r.result.data.length;i++) arr.push(r.result.data[i].keyword);
					var diff = $(values).not(arr).get();
					var d=[];
					for (var i=0;i<diff.length;i++) d.push({
						keyword: diff[i]
					});
					App.DB.post('gestionao2://keywords',d,function(e2,r2) {
						try {
							App.get('TForm2 boxselect#Keywords').getStore().load();
							App.get('TForm2 boxselect#Keywords').on('load',function() {
								App.DB.post('gestionao2://appelsoffres',{												  
									IdAppelOffre: id_appelOffre,
									keywords: JSON.stringify(App.get('TForm2 boxselect#Keywords').getValue())
								},function(e,r) {
								
								});
							});
						}catch(e) {
						
						}
					});
				});
                App.get('TForm1 grid#AO').getStore().load();
                if (EMAIL.length > 0) {
					var subject="Appel d'offre #"+id_appelOffre+' :'+App.get('textfield#objet').getValue();
                    var o = {
                        to: EMAIL,
                        subject: subject.substr(0,255),
                        text: 'Bonjour, \nl\'appel d\'offre "'+subject.substr(0,255)+'" a été identifié pour vous. \nVeuillez cliquer sur le lien suivant :\n'+lien+'?appelOffre='+id_appelOffre+'\nEn cas de question, merci de contacter la balu.'
                    };
					
					var obj=App.get('grid#grid1').getStore().getRange();
					var d=[];
					for (var k=0;k<obj.length;k++) d.push(obj[k].data);
					
					App.DB.post('gestionao2://mails',{
						idao: id_appelOffre,
						value: JSON.stringify(d)
					},function(e,r) {
					
					});
				
                    App.Mail.send(o, function(error, result) {
                        if (!error) App.notify('Impossible d\'envoyer le mail !');
                        else App.notify('Les agents ont été notifiés.');
						p.setDisabled(false);
                    });
                }
                App.get('TForm2').close();

            });
        } else {

            var o = {
                IdAppelOffre: AO_ID,
                IdSource: App.get('combo#cboNom').getValue(),
                DateParution: App.get('datefield#date').getValue(),
                IdConsultation: App.get('combo#cboType').getValue(),
                Objet: App.get('textfield#objet').getValue(),
                Client: App.get('textfield#client').getValue(),
                Observation: App.get('textfield#observations').getValue(),
                IdDepartement: App.get('combo#cboDepartement').getValue().join(','),
                DateLimite: App.get('datefield#date_limite').getValue(),
                Semaine: App.get('textfield#numero_semaine').getValue(),
                IdDomaine: App.get('combo#cboDomaine').getValue(),
                IdThematique: App.get('combo#cboThematique').getValue(),
                IdNaturePrestation: App.get('combo#cboCode').getValue(),
                Keywords: App.get('boxselect#Keywords').getValue()
            };
            //if (App.get('uploadfilemanager#up').getFiles().length>0) 
            o._BLOB = App.get('uploadfilemanager#up').getFiles();

            App.AO.update(o, function(error, result) {
                App.get('TForm1 grid#AO').getStore().load();
                UPLOADZ = [];
				var id_appelOffre=AO_ID;

				var values=App.get('TForm2 boxselect#Keywords').getRawValue().split(', ');
				App.DB.get('gestionao2://keywords?keyword=["'+values.join('","')+'"]', function(e,r) {
					var arr=[];
					for (var i=0;i<r.result.data.length;i++) arr.push(r.result.data[i].keyword);
					var diff = $(values).not(arr).get();
					var d=[];
					for (var i=0;i<diff.length;i++) d.push({
						keyword: diff[i]
					});
					App.DB.post('gestionao2://keywords',d,function(e2,r2) {
						App.get('TForm2 boxselect#Keywords').getStore().load();
						App.get('TForm2 boxselect#Keywords').getStore().on('load',function() {
							App.DB.post('gestionao2://appelsoffres',{												  
								IdAppelOffre: id_appelOffre,
								keywords: JSON.stringify(App.get('TForm2 boxselect#Keywords').getValue())
							},function(e,r) {
							
							});
						});
					});
				});
				
				var subject="Appel d'offre #"+id_appelOffre+' :'+App.get('textfield#objet').getValue();
                var o = {
                    from: "stephane.zucatti@cerema.fr",
                    to: EMAIL,
					subject: subject.substr(0,255),
					text: 'Bonjour, \nl\'appel d\'offre suivant "'+subject.substr(0,255)+'" a été identifié pour vous. \n\nVeuillez cliquer sur le lien suivant :\n'+lien+'?appelOffre='+id_appelOffre+'\n\nEn cas de question, merci de contacter la balu.'
                };
                if (EMAIL.length <= 0) {
                    App.notify("Vous n'avez pas sélectionner d'agent à notifier !");
                } else {
				var obj=App.get('grid#grid1').getStore().getRange();
				var d=[];
				for (var k=0;k<obj.length;k++) d.push(obj[k].data);
				App.DB.post('gestionao2://mails',{
					idao: id_appelOffre,
					value: JSON.stringify(d)
				},function(e,r) {
				
				});					

				App.Mail.send(o, function(error, result) {
					if (!error) App.notify('Impossible d\'envoyer le mail !');
					else App.notify('Les agents ont été notifiés.');
				});

				};

                App.get('TForm2').close();

            });
        }




    },
    //Selon le domaine selectionné cela affiche la thematique correspondante
    valider_thematiques: function(p, record) {

        var id_domaine = App.get('combo#cboDomaine').getValue();
        App.get('combo#cboThematique').setValue('');
        App.get('combo#cboThematique').getStore().getProxy().extraParams.id_domaine = id_domaine;
        App.get('combo#cboThematique').getStore().load();

    },

    upload_onclick: function(p, record) {

        console.log(record);

    },

    //Au chargement de l'application si le lien URL contient ?appelOffre= on recuperera les information de l'offre grace a son numero
    onLoad: function() {

        var loc = document.location.href.split('?appelOffre=');
        lien = document.location.href.split('?')[0];

        if (loc.length > 1) {
            profil = parseInt(document.location.href.split('?appelOffre=')[1].trim());
            App.AO.get(profil, function(response) {
                App.get('TForm1').hide();
                App.view.create('VForm2', {
                    modal: true
                }).show().center();
                App.get('TForm2').setTitle('Appel d\'offre');
                //App.get('grid#docs').show();
                App.get('panel#regroupement_hboxGrid1').hide();
                App.get('combo#cboNom').setReadOnly(true);
                App.get('combo#cboType').setReadOnly(true);
                App.get('boxselect#cboDepartement').setReadOnly(true);
                App.get('datefield#date').setReadOnly(true);
                App.get('datefield#date_limite').setReadOnly(true);
                App.get('button#effacer_saisie').hide();
                App.get('button#valider_saisie').hide();
                App.get('textfield#client').setReadOnly(true);
                App.get('textarea#objet').setReadOnly(true);
                App.get('textarea#observations').setReadOnly(true);
                App.get('combo#cboDomaine').setReadOnly(true);
                App.get('combo#cboThematique').setReadOnly(true);
                App.get('combo#cboCode').setReadOnly(true);


                App.get('combo#cboNom').setValue(response.data[0].IdSource);
                App.get('combo#cboType').setValue(response.data[0].IdConsultation);
                App.get('textfield#objet').setValue(response.data[0].Objet);
                App.get('textfield#client').setValue(response.data[0].Client);
                App.get('textfield#observations').setValue(response.data[0].Observation);

                App.get('uploadfilemanager#up').setReadOnly(true);
                App.get('uploadfilemanager#up').setFiles(JSON.parse(response.data[0]._BLOB));

                try {
                    var tab = response.data[0].IdDepartement.split(',');
                } catch (e) {
                    var tab = [];
                    tab.push(response.data[0].IdDepartement);
                };
                var tabx = [];
                for (var i = 0; i < tab.length; i++) {
                    tabx.push(parseInt(tab[i]));
                };
				App.get('boxselect#cboDepartement').setValue(tabx);
                App.get('boxselect#cboDepartement').getStore().on('load', function() {
                    
                });
				
                App.get('datefield#date').setValue(response.data[0].DateParution.toDate());
                App.get('datefield#date_limite').setValue(response.data[0].DateLimite.toDate());

                App.get('combo#cboCode').setValue(response.data[0].IdNaturePrestation);
                App.get('textfield#numero_semaine').setValue(response.data[0].Semaine);
                App.get('combo#cboDomaine').setValue(response.data[0].IdDomaine);
                App.get('combo#cboThematique').setValue(response.data[0].IdThematique);
                if (App.get('combo#cboDomaine').getValue() == 0) {
                    App.get('combo#cboDomaine').setValue('');
                }
                App.get('combo#cboThematique').getStore().getProxy().extraParams.id_domaine = response.data[0].Id_domaine;
                App.get('combo#cboThematique').getStore().load();
            });
        } else {
            Auth.login(function(user) {
                //console.log(user);
                App.AO.getProfil(user.mail, function(err, r) {
                    App.get('TForm1 grid#AO').getStore().load();
                    if (r.result.length > 0) App.get('button#ajouter_modification').show();
                    else App.get('button#ajouter_modification').hide();
                });
            });
        };


    }


});