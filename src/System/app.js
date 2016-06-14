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

						var uid=Math.uuid();
						var workbook = excelbuilder.createWorkbook(__dirname+require('path').sep+'tmp', uid+'.xlsx');
						var sheet1 = workbook.createSheet('ECUREUIL', 1500, 1500);
						var conf={};
						conf.cols = [
						{
							caption: 'Nom',
							type:'string',
							width: 50
						}
						];	
					
						for (var e=0;e<conf.cols.length;e++) {
							sheet1.set(e+1,1,conf.cols[e].caption);
							sheet1.width(e+1, conf.cols[e].width*1);
						};
						for (var i=0;i<tabs.length;i++) {
							var element=tabs[i];
                            console.log(element);
							var k=1;
							var ii=i+2;
							for (var el in element) {
								if (k<1) {
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