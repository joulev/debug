"use client";

import {
  Arrow,
  Content,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dropdown-menu";

export default function Page() {
  return (
    <Root>
      <Trigger>Click me</Trigger>
      <Portal>
        <Content>
          <div>Hello world</div>
          <Arrow />
        </Content>
      </Portal>
    </Root>
  );
}
