function AdminInfor(initJson){
 	this.adminName = initJson.XM;
 	this.adminGender = initJson.XB;
 	this.adminCollage = initJson.XY;
 	this.adminCardId = initJson.ZJH;
}
function Message(initJson){
	this.adminInfor = new AdminInfor(initJson.baseinfor);
}
