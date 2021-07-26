import { Cell, Text, Inline, Spacing, Column } from "@cornershop/cornponents";

import * as st from "./Kitty.styles";

const Kitty = ({ kitty, onToggleFav, isFaved }) => (
  <Cell
    tabIndex="0"
    aria-label={`This is a kitty with this identifier: ${
      kitty.image?.id ?? kitty.id
    }`}
  >
    <st.KittyPhoto
      src={kitty.image?.url ?? kitty.url}
      alt="a very beautiful cat"
    />
    <Spacing p="small">
      <Inline>
        <Column width="fluid">
          <Text>Kitty</Text>
        </Column>
        <Column width="content">
          <Text
            id="fav-container"
            onClick={onToggleFav}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onToggleFav();
              }
            }}
            role="button"
            tabIndex="0"
            aria-label={
              isFaved ? "Remove kitty from favorites" : "Add kitty to favorites"
            }
          >
            <span role="img" aria-label="Star">
              ⭐️
            </span>
          </Text>
        </Column>
      </Inline>
      <Text size="xs" color="black300">
        {kitty.image?.id ?? kitty.id}
      </Text>
    </Spacing>
  </Cell>
);

export default Kitty;
