import React from 'react';
import atomize from "@quarkly/atomize";
import { useAuth0 } from '@auth0/auth0-react';
import { Link, Button } from '@quarkly/widgets';
import { MdSearch } from "react-icons/md";

const AuthActionButton = props => {
	const {
		loginWithRedirect,
		isAuthenticated
	} = useAuth0();
	console.log('am i called');

	const renderActionElement = () => {
		console.log('am i called');

		if (!isAuthenticated) {
			return <Button
				display="flex"
				border-width="1px"
				border-style="solid"
				border-radius="5px"
				border-color="#232e44"
				justify-content="flex-start"
				align-items="center"
				padding="5px 5px 5px 5px"
				hover-box-shadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important"
				background="#00f68e"
				color="#232e44"
				onClick={() => loginWithRedirect()}
			>
				        Login
      
			</Button>;
		}

		;
		return <Link
			href="/faceted-search"
			color="#000000"
			width="max-content"
			height="max-content"
			display="flex"
			align-items="center"
			text-decoration-line="initial"
			font="600 16px sans-serif"
		>
			      
			<Button
				display="flex"
				border-width="2px"
				border-style="solid"
				border-radius="100%"
				border-color="#0c6aff"
				justify-content="flex-start"
				align-items="center"
				padding="5px 5px 5px 5px"
				hover-box-shadow="0 2px 0 0 #0c6aff"
				background="transparent"
				focus-box-shadow="inset 0 0 7px 3px --color-primary"
			>
				        
				<Icon category="md" icon={MdSearch} size="3rem" color="#0c6aff" />
				      
			</Button>
			    
		</Link>;
	};

	return <div {...props}>
		{renderActionElement()}
	</div>;
};

export default atomize(AuthActionButton)({
	name: "AuthActionButton"
});