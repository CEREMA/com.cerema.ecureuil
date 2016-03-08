
Search = {
	fetch: function(value,idThematique,cb) {
		var db = Search.using('db');
		db.model("gestionao2",'SELECT Objet,IdAppelOffre FROM appelsoffres WHERE Objet LIKE \'%' + value + '%\' AND idThematique = ' + idThematique + '',cb);		
	},
	accueil: function(id,cb) {

		var where='';

		if(id != null){
			
			for(var i = 0 ; i < id.length ; i++){
				if(where == '')
					where = ' IdAppelOffre != ' + id[i];
				else
					where += ' AND IdAppelOffre != ' + id[i];
			}
			where = ' WHERE' + where;
			console.log(where);
		}
		
		var db = Search.using('db');
		db.model("gestionao2",'SELECT IdAppelOffre,IdSource,Objet,Client,DateParution,DateLimite FROM appelsoffres' + where,cb);		
	}
}

module.exports = Search;
