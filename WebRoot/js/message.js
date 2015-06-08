function Message(initJson){
				this.pnumber = initJson.number;
				this.pname = initJson.name;
				this.profession = initJson.proName;
				this.gpa = initJson.gpa;
				this.rank = initJson.position;
				this.hasensure = initJson.confirm;
				this.hassignin = initJson.signIn.sign;
				this.first = initJson.signIn.signResult.first;
				this.second = initJson.signIn.signResult.second;
				this.third = initJson.signIn.signResult.third;
				this.phoneNum = initJson.signIn.signResult.phoneNum;
				this.language = initJson.signIn.signResult.language;
	    		this.score = initJson.signIn.signResult.score;
	    		this.apply = initJson.apply;
	        	}