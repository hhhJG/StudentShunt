function StudentSignData(initJson){
	this.testName = initJson.testName;
	this.signTime = initJson.signTime ;
	this.name = initJson.name ;
}
function AdminInfor(name, grade){
 	this.adminName = name;
 	this.adminClass = grade;
}
function Message(initJson){
	this.adminInfor = new AdminInfor(initJson.name,initJson.grade);
	this.classMateSignData = initJson.classMateSignData;
	this.getClassMateSignData = function()
	{
		var tempClassMateSignData = [];
		for (var temp in this.classMateSignData)
		{
			var tempData = new StudentSignData(this.classMateSignData[temp]);			
			tempClassMateSignData.push(tempData);
		}
		return tempClassMateSignData;
	}
}
