AO = {
	del: function(o,cb) {
		AO.using('db').del('gestionao2','appelsoffres',o,cb);
	},
	get: function(o,cb) {
		AO.using('db').model('gestionao2','select * from appelsoffres left join sources on appelsoffres.IdSource=sources.IdSource left join consultations on appelsoffres.IdConsultation=consultations.IdConsultation left join departements on appelsoffres.IdDepartement=departements.IdDepartement left join naturesprestations on appelsoffres.IdNaturePrestation=naturesprestations.IdNaturePrestation left join domaine on appelsoffres.IdDomaine=domaine.id_domaine left join thematiques on appelsoffres.IdThematique=thematiques.id_thematique where IdAppelOffre="'+o+'"',cb);
	},
	getAll: function(o,cb) {
		AO.using('db').model('gestionao2','SELECT * FROM (appelsoffres LEFT JOIN thematiques ON (thematiques.id_thematique = appelsoffres.IdThematique)) where YEAR(DateParution)>=2014 order by DateParution desc',cb);		
	},
	getProfil: function(o,cb) {
		AO.using('db').query('gestionao2','select * from profils where PassportUID="'+o+'"',cb);
	},
	getAll2: function(o,cb) {
		AO.using('db').model('gestionao2','select * from sources',cb);
	},
	getAll3: function(o,cb) {
		AO.using('db').model('gestionao2','select IdConsultation, concat(LibCourtConsultation,\' - \',LibLongConsultation) reponse from consultations',cb);
	},
	getAll4: function(o,cb) {
		AO.using('db').model('gestionao2','select IdDepartement, concat(NumDepartement,\' - \',LibelleDepartement) as departement from departements order by IdDepartement',cb);
	},
	
	getAll5: function(o,cb) {
		AO.using('db').model('gestionao2','select * from naturesprestations',cb);
	},
	
	getUnites: function(o,cb) {
		AO.using('db').model('bpclight','select * from unites left join melu on melu.Kuni= unites.Kuni where Archive=0',cb);
	},
	getAgents: function(o,cb) {
		AO.using('db').model('bpclight','select * from agents left join mela on mela.Kage=agents.Kage where actif=1 and mela.libmela like "%cerema.fr" order by nom',cb);
	},
	upload_blob: function(list,ndx,cb)
	{
	
		if (!list[ndx]) {cb();return;}
		AO.using('db').query('gestionao2','select docId from docs where docId="'+list[ndx].docId+'"',function(err,result) {
			if (result.length>0) {
				// déjà uploadé
				AO.upload_blob(list,ndx+1,cb);
			} else {
				AO.using('db').query('gestionao2','insert into docs VALUES ("'+list[ndx].docId+'","-1","-1","-1","-1")',function() {
					App.upload.toBase64(list[ndx].docId,function(_blob) {
						console.log(_blob);
						var up={
							docId: list[ndx].docId,
							_blob: _blob,
							filename: list[ndx].filename,
							type: list[ndx].filetype,
							size: list[ndx].filesize			
						};
						AO.using('db').post('gestionao2','docs',up,function(err,x) {
							console.log(err);
							console.log(x);
							AO.upload_blob(list,ndx+1,cb);
						});
					});
				});			
			}
		});

	},
	insert: function(o,cb)
	{
		AO.using('db').post('gestionao2','appelsoffres',o,function(e,r){
			if (o._BLOB) {
				AO.upload_blob(o._BLOB,0,function() {
					cb(e,r);
				});
			} else {
				cb(e,r);
			}
		});
	}, 
	update: function(o,cb)
	{
		AO.using('db').post('gestionao2','appelsoffres',o,function(r){
			if (o._BLOB) {
				AO.upload_blob(o._BLOB,0,function() {
					cb(r);
				});
			} else cb(r);
		});
	},	
	getDomaines: function(o,cb) {
		AO.using('db').model('gestionao2','select * from domaine',cb);
	},	
	getThematiques: function(o,cb) {
		if (o.id_domaine)
		AO.using('db').model('gestionao2','select * from domaine, thematiques where domaine.id_domaine=thematiques.id_domaine and domaine.id_domaine="'+o.id_domaine+'"',cb);
		else
		AO.using('db').model('gestionao2','select * from thematiques',cb);
	},
};

module.exports = AO;
