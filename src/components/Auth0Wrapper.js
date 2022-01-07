import React from 'react';
import atomize from "@quarkly/atomize";
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0Wrapper = ({
	children,
	...props
}) => {
	return <div {...props}>
		          
		<Auth0Provider domain={props.domain} clientId={props.clientId} redirectUri="https://quarkly-template-3.netlify.app/faceted-search">
			            
			{children}
			          
		</Auth0Provider>
		        
	</div>;
};

export default atomize(Auth0Wrapper)({
	name: "Auth0Wrapper",
	description: {
		en: "Auth0Wrapper — Authentication wrapper from Auth0 for the app."
	},
	propInfo: {
		domain: {
			title: "Domain",
			description: {
				en: "Enter the domain from the Auth0 - app"
			},
			control: "input",
			weight: 1
		},
		clientId: {
			title: "Client Id ",
			description: {
				en: "Enter the client Id from the Auth0 - app"
			},
			control: "input",
			weight: 1
		}
	},
	defaultProps: {
		clientId: "6dkBgRApMTcicfpmq88yk8snomv1ssVe",
		domain: "dev-62vd8h96.us.auth0.com"
	}
});