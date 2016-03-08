
MyService = {
	genID: function(o,cb) {
		var shortid=MyService.using('shortid');
		cb(shortid.generate());
	}
}

module.exports = MyService;
