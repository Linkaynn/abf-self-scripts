import React, {
  ElementType,
  ReactComponentElement,
  ReactElement,
  ReactNode,
} from "react";
import { createRoot } from "react-dom/client";

export const renderDialog = (
  dialogName: string,
  Element: ElementType<{ dialog: Dialog }>
) => {
  const dialogId = Date.now().toString();

  const d = new Dialog(
    {
      title: dialogName,
      content: `<div id="${dialogId}"/>`,
      buttons: {},
      default: "",
      render: () => {
        const container = document.getElementById(dialogId);

        if (!container) return;

        const root = createRoot(container);
        const dialog = d as Dialog;

        root.render(<Element dialog={dialog} />);
      },
      close: () => {},
    },
    { resizable: true, classes: ["react-dialog"] }
  ).render(true);
};
