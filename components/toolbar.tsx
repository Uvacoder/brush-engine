import * as React from "react"
import state from "lib/state"
import styled from "styled-components"
import { Trash, RotateCcw, RotateCw, Settings } from "react-feather"

export default function Toolbar() {
  return (
    <ToolbarContainer onPointerDown={(e) => e.stopPropagation()}>
      <ButtonGroup>
        <IconButton onClick={() => state.send("UNDO")}>
          <RotateCcw />
        </IconButton>
        {/* <IconButton onClick={() => state.send("REDO")}>
          <RotateCw />
        </IconButton> */}
      </ButtonGroup>
      <div>
        <a href="https://twitter.com/steveruizok">@steveruizok</a>
      </div>
      <ButtonGroup>
        <IconButton
          onClick={() =>
            state.send("CHANGED_SETTINGS", {
              showControls: !state.data.settings.showControls,
            })
          }
        >
          <Settings />
        </IconButton>
        <IconButton onClick={() => state.send("ERASED")}>
          <Trash />
        </IconButton>
      </ButtonGroup>
    </ToolbarContainer>
  )
}

const ToolbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-scrim);
  backdrop-filter: blur(30px);
  user-select: none;
`

const ButtonGroup = styled.div`
  padding: 0 4px;
  display: flex;
  align-items: center;
`

const IconButton = styled.button`
  background: transparent;
  display: flex;
  border: none;
  align-items: center;
  font-size: 32px;
  padding: 8px;
  color: var(--color-text);
  cursor: pointer;
  border-radius: 4px;
  outline: none;

  &:disabled {
    opacity: 0.3;
  }

  &:hover {
    background-color: var(--color-hover);
  }
`
