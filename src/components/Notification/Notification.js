import { Cell, Spacing, Inline, Text, Column } from "@cornershop/cornponents";

import * as st from "./Notification.styles";

const Notification = ({ content, isDisplayed }) => (
  <st.Locator isDisplayed={isDisplayed}>
    <Cell>
      <Spacing px="gutter" py="small">
        <Inline alignY="center" space="small">
          <Column>
            <Text size="4xl" as="span">
              <span role="img" aria-label="Alert">
                🚨
              </span>
            </Text>
          </Column>
          <Column>
            <Text size="lg" color="black" role={isDisplayed ? "alert" : ""}>
              {content}
            </Text>
          </Column>
        </Inline>
      </Spacing>
    </Cell>
  </st.Locator>
);

export default Notification;
