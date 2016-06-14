App = {
	init: function(app,server) {
		app.use('/tmp',server.static(__dirname + require('path').sep+'tmp'));		
		app.post('/',app.UPLOAD.any(),function(req,res,next) {
			App.upload.up(req,res);
		});
		app.get('/docs/*',function(req,res) {
			var ff=req.originalUrl.split('/docs/')[1];
			App.using('db').query('gestionao2','select * from docs where docId="'+ff+'"',function(err,response) {
				if (response.length>0) {
					if (response[0]._blob=="") {
						res.end('Aucun document lié.');
					} else {
                        App.file.reader(response[0],res);
					}
				} else App.upload.reader(ff,res);
            });
        });
		app.post('/export',function(req,res) {
			var excelbuilder=App.using('msexcel-builder');
			if (req.body.kage) {
				var o=req.body.AO;
				if (req.body.name=="AO") {
					App.AO.getXLS(o,function(e,tabs) {
                        console.log(e);
						console.log(tabs);
                        return;
						var uid=Math.uuid();
						var workbook = excelbuilder.createWorkbook(__dirname+require('path').sep+'tmp', uid+'.xlsx');
						var sheet1 = workbook.createSheet('ECUREUIL', 1500, 1500);
						var conf={};
						conf.cols = [
						{
							caption: 'Nom',
							type:'string',
							width: 50
						},
						{
							caption: 'Prénom',
							type:'string',
							width: 50
						},
						{
							caption: 'Catégorie FP',
							type:'string',
							width: 50
						},
						{
							caption: 'Grades',
							type:'string',
							width: 50
						},
						{
							caption: 'Date naissance',
							type:'date',
							width: 30
						},
						{
							caption: 'Téléphone',
							type:'string',
							width: 30
						},
						{
							caption: 'Portable',
							type:'string',
							width: 30
						},
						{
							caption: 'Ville Naissance',
							type:'string',
							width: 50
						},
						{
							caption: 'Département Naissance',
							type:'string',
							width: 50
						},
						{
							caption: 'Pays naissance',
							type:'string',
							width: 50
						},
						{
							caption: 'Adresse',
							type:'string',
							width: 50
						},
						{
							caption: 'Code Postal',
							type:'string',
							width: 50
						},
						{
							caption: 'Ville',
							type:'string',
							width: 50
						},
						{
							caption: 'Etablissement',
							type:'string',
							width: 100
						},
						{
							caption: 'Département',
							type:'string',
							width: 100
						},
						{
							caption: 'Service',
							type:'string',
							width: 100
						}
						];	
					
						for (var e=0;e<conf.cols.length;e++) {
							sheet1.set(e+1,1,conf.cols[e].caption);
							sheet1.width(e+1, conf.cols[e].width*1);
						};
						for (var i=0;i<tabs.length;i++) {
							var element=tabs[i];
							var k=1;
							var ii=i+2;
							for (var el in element) {
								if (k<18) {
									sheet1.set(k, ii, element[el]);								
								};
								k++;
							};
						};			
						workbook.save(function(ok){
							res.end('/tmp/'+uid+'.xlsx');
						});					
					});	
				};
			};
		});		
        
	}
};

module.exports = App;