import React from "react";
import theme from "theme";
import { Theme, Image, Box, Link, Section, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Auth0Wrapper clientId="6dkBgRApMTcicfpmq88yk8snomv1ssVe" domain="dev-62vd8h96.us.auth0.com">
			<Box width="100vw" height="100vh">
				<Section
					height="100px"
					border-width="0 0 1px 0"
					border-style="solid"
					border-color="#0c6aff"
					background="#c6f5fe"
					display="flex"
					justify-content="space-between"
					width="100%"
					box-shadow="0 0 0 0 #0c6aff"
				>
					<Override
						slot="SectionContent"
						margin="0px 1rem 0px 1rem"
						flex-direction="row"
						align-items="center"
						justify-content="space-between"
						width="100%"
						max-width="none"
					/>
					<Link
						href="/"
						color="#000000"
						width="max-content"
						height="max-content"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						font="600 16px sans-serif"
						border-width="0 0 1px 0"
						border-color="#494949"
						hover-border-style="none"
						active-box-shadow="0 2px 3px 0 transparent"
					>
						<Box width="max-content" cursor="pointer" background="#c6f5fe">
							<Image src="https://softr-prod.imgix.net/applications/d919d2ef-4bb1-4b91-aa55-6040ea8667e1/assets/f7a75f17-313d-4759-992f-e7d351a11836.svg" display="block" />
						</Box>
					</Link>
					<Components.AuthActionButton />
				</Section>
				<Section
					padding="60px 0"
					sm-padding="40px 0"
					min-height="600px"
					sm-min-height="auto"
					background="--color-light url(https://softr-prod.imgix.net/applications/d919d2ef-4bb1-4b91-aa55-6040ea8667e1/assets/4a9df0c2-4a24-462a-8482-b366bdae7ca3.png)"
					display="flex"
					flex-direction="column"
					height="100%"
				>
					<Text
						font="--base"
						text-transform="uppercase"
						letter-spacing="1px"
						max-width="850px"
						color="--grey"
						margin="0px"
					>
						#bookssearch
					</Text>
					<Text
						as="h1"
						margin="8px 0px 32px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Hey 👋 ! Search among thousands of books with multiple filters to accurate your search experience.
					</Text>
				</Section>
			</Box>
		</Components.Auth0Wrapper>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61d4906b2ef8c7001f83ece4"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});