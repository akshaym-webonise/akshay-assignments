Content Management System Schema


Collection users {
		_id 		: Object_Id
		username 	: "String"
		password 	: "String"
		role_id 	: Object_Id
		created_on 	: timestamp
		last_login 	: timestamp
		profile		: {
		    			Name 	: "String"
		    			Age 	: Integer
		    			Address : [{Local_address:{ _id : Object_id()
							Street : "String"
							City : "String"
							State : "String"
							Country : "String"						
			      			  }]
		phone 		: [Array of numbers]
	}


Collection roles {
		_id 		: Object_Id
		role_type 	: [Type of user i.e admin/superadmin/editor]
		permissions 	: [Array storing diffrent permissions granted to the user]
     	}

 
Collection pages {
		_id 		: Object_Id
		title 		: "String"
		user_id 	: Object_Id
		contents 	: "String"
		comments 	: [{ comment1:{_id : Object_id(), content : "String" , user_id : Integer},
		      		     comment2:{_id : Object_id(), content : "String" , user_id : Integer}
		   		  }]
     	}


Collection blogs {
		_id 		: Object_Id
		title 		: "String"
		user_id 	: Object_Id
		contents 	: "String"
		comments 	: [{ comment1:{_id : Object_id(), content : "String" , user_id : Integer}
		      		     comment2:{_id : Object_id(), content : "String" , user_id : Integer}
		   		  }]
     	}
