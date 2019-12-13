import React from "react"

import { UserInformation } from "../../components/UserProfileComponents";

export default function UserProfile({ user }){
	
	return (
	<div>
		
		<UserInformation email={user.email ? user.email : "whoops"}/>

	</div>
	);
}