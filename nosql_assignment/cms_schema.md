Content Management System Schema


Collection User {
		_id 		: Object_Id
		username 	: "String"
		password 	: "String"
		Role_id 	: Object_Id
		Created_on 	: timestamp
		last_login 	: timestamp
		Profile		: {
		    			Name 	: "String"
		    			Age 	: Integer
		    			Address : [{Local_address:{ _id : Object_id()
							Street : "String"
							City : "String"
							State : "String"
							Country : "String"						
			      			  }]
		Phone 		: [Array of numbers]
	}


Collection Role {
		_id 		: Object_Id
		roleType 	: [Type of user i.e admin/superadmin/editor]
		permissions 	: [Array storing diffrent permissions granted to the user]
     	}

 
Collection Page {
		_id 		: Object_Id
		title 		: "String"
		slug 		: "String"
		user_id 	: Object_Id
		contents 	: "String"
		comments 	: [{ comment1:{_id : Object_id(), content : "String" , user_id : Integer},
		      		     comment2:{_id : Object_id(), content : "String" , user_id : Integer}
		   		  }]
     	}


Collection Blog {
		_id 		: Object_Id
		title 		: "String"
		slug 		: "String"
		user_id 	: Object_Id
		contents 	: "String"
		comments 	: [{ comment1:{_id : Object_id(), content : "String" , user_id : Integer}
		      		     comment2:{_id : Object_id(), content : "String" , user_id : Integer}
		   		  }]
     	}
