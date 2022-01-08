import React, { useState } from "react";
import atomize from "@quarkly/atomize";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Icon, Box, Image } from "@quarkly/widgets";
import { MdSearch } from "react-icons/md";
import { useHistory } from "react-router-dom";

const renderButton = (textNode, onClickCb, customButtonStyles = {}) => {
  return (
    <Button
      display="flex"
      border-width="1px"
      border-style="solid"
      border-radius="5px"
      border-color="#232e44"
      height="36px"
      justify-content="flex-start"
      align-items="center"
      padding="5px 5px 5px 5px"
      hover-box-shadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important"
      background="#00f68e"
      color="#232e44"
      onClick={() => onClickCb()}
      {...customButtonStyles}
    >
      {textNode()}
    </Button>
  );
};

const AuthActionButton = (props) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  let history = useHistory();

  const renderActionElement = () => {
    if (!isAuthenticated && window.location.pathname !== "/faceted-search") {
      return renderButton(() => "Login", loginWithRedirect);
    }

    if (isAuthenticated) {
      return (
        <Box display="flex" align-items="center">
          {window.location.pathname === "/" &&
            renderButton(
              () => (
                <Icon
                  category="md"
                  icon={MdSearch}
                  size="2rem"
                  color="#0c6aff"
                />
              ),
              () => {
                history.push("/faceted-search");
              },
              { "border-radius": "100%", height: "auto" }
            )}
          <Box margin="0px 0px 0px 1rem" position="relative">
            <Button
              display="flex"
              padding="5px"
              border="1px solid"
              border-radius="5px"
              align-items="center"
              onclick="myFunction()"
              class="dropbtn"
              color="black"
              background="transparent"
              font-size="1rem"
              hover-box-shadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)!important"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <Image
                margin="0px .6rem 0px 0px"
                height="1.5rem"
                src={user.picture}
              />
              <span role="img" aria-label="hey">
                {user.family_name} 👋
              </span>
            </Button>
            {showDropdown && (
              <Box position="absolute" width="100%" top="106%">
                <Button
                  width="100%"
                  height="36px"
                  padding="0"
                  background="#9abcc6"
                  onClick={() =>
                    logout({
                      returnTo: "https://quarkly-template-3.netlify.app/",
                    })
                  }
                >
                  Logout
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      );
    }
  };

  if (!(window.location.pathname !== "/faceted-search") && !isAuthenticated) {
    history.push("/");
  }

  return <div {...props}>{renderActionElement()}</div>;
};

export default atomize(AuthActionButton)({
  name: "AuthActionButton",
});
