function WorkInfor(initJson){
	this.name = initJson.name;
	this.colname = initJson.colname;
	this.number = initJson.number;
	this.sex = initJson.sex;
	this.cardid = initJson.cardid;
}

function TestInfor(initJson){
	this.id = initJson.id;
	this.name = initJson.name;
	this.level = initJson.level;
	this.cost = initJson.cost;
}

function ColproInfor(initJson){
	this.id = initJson.id;
	this.colname = initJson.colname;
	this.sort = initJson.sort;
	this.tempname = initJson.tempname;
	this.longname = initJson.longname;
	this.firsttime = initJson.firsttime;
	this.secondtime = initJson.secondtime;
}

function Message(initJson){
	this.workersInfor = initJson.workersinfor;
	this.testInfor = initJson.testinfor;
	this.colproInfor = initJson.colproinfor;
	this.getWorkersInforData = function()
	{
		var worksInforData = [];
		for (var temp in this.workersInfor)
		{
			var tempData = new WorkInfor(this.workersInfor[temp]);			
			worksInforData.push(tempData);
		}
		return worksInforData;
	}
	this.geTestInforData = function()
	{
		var testInforData = [];
		for (var temp in this.testInfor)
		{
			var tempData = new TestInfor(this.testInfor[temp]);
			testInforData.push(tempData);
		}
		return testInforData;
	}
	this.getColproInforData = function()
	{
		var colproInforData = [];
		for (var temp in this.colproInfor)
		{
			var tempData = new ColproInfor(this.colproInfor[temp]);			
			colproInforData.push(tempData);
		}
		return colproInforData;
	}
	this.addTestInfor = function(temp)
	{
		this.testInfor.push(temp);
	}
	this.addWorkersInfor = function(temp)
	{
		this.workersInfor.push(temp);
	}
	this.addColproInfor = function(temp)
	{
		this.colproInfor.push(temp);
	}

}
