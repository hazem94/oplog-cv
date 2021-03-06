import { navigate } from "@reach/router";
import { ROUTE_NAMES } from "constants/routeNames";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Flag, Icon, Image, Menu } from "semantic-ui-react";
import WithTrans from "./WithTrans";

const Header = ({ logout }) => {
  const { t, i18n } = useTranslation();

  return (
    <Menu size="mini" borderless stackable>
      <Menu.Item>
        <Image src="/favicon.jpeg" size="mini" />
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => navigate(ROUTE_NAMES.home)}>
          <Icon name="home" />
          {t("Home")}
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => navigate(ROUTE_NAMES.editProfile)}>
          <Icon name="edit" />
          {t("Edit my profile")}
        </Button>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button
            color="red"
            size="mini"
            onClick={() => {
              logout();
            }}
          >
            <Icon name="sign-out"></Icon> <WithTrans keyword="Logout" />
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button.Group siize="mini">
            <Button
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              <Flag name="us" /> En
            </Button>
            <Button.Or />
            <Button onClick={() => i18n.changeLanguage("tr")}>
              <Flag name="tr" /> Tr
            </Button>
          </Button.Group>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};
