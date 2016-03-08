
AppelOffre = {
	fetch: function(id,cb) {
		var db = Search.using('db');
		//SELECT * FROM appelsoffres a JOIN departements d ON a.IdDepartement = d.IdDepartement JOIN sources s ON a.IdSource = s.IdSource JOIN consultations c ON a.IdConsultation = c.IdConsultation JOIN domaine o ON a.IdDomaine = o.id_domaine JOIN thematiques t ON a.IdThematique = t.id_thematique JOIN naturesprestations n ON a.IdNaturePrestation = n.IdNaturePrestation WHERE IdAppelOffre = 8901
		db.model("gestionao2",'SELECT * FROM appelsoffres a '+
							  'JOIN departements d ON a.IdDepartement = d.IdDepartement '+
							  'JOIN sources s ON a.IdSource = s.IdSource '+
							  'JOIN consultations c ON a.IdConsultation = c.IdConsultation '+
							  'JOIN domaine o ON a.IdDomaine = o.id_domaine '+
							  'JOIN thematiques t ON a.IdThematique = t.id_thematique '+
							  'JOIN naturesprestations n ON a.IdNaturePrestation = n.IdNaturePrestation '+
							  'WHERE IdAppelOffre = ' + id,cb);
	}
}

module.exports = AppelOffre;