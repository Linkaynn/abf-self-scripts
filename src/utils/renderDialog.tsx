import React, { ElementType } from 'react';
import { createRoot } from 'react-dom/client';

export const renderDialog = ({
  name,
  Element,
  size,
}: {
  name: string;
  Element: ElementType<{ dialog: Dialog }>;
  size?: { width: number; height: number };
}) => {
  const dialogId = Date.now().toString();

  const d = new Dialog(
    {
      title: name,
      content: `<div id="${dialogId}"/>`,
      buttons: {},
      default: '',
      render: () => {
        const container = document.getElementById(dialogId);

        if (!container) return;

        const root = createRoot(container);
        const dialog = d as Dialog;

        root.render(<Element dialog={dialog} />);
      },
      close: () => {},
    },
    {
      resizable: true,
      classes: ['react-dialog'],
      width: size?.width ?? 250,
      height: size?.height ?? 250,
    },
  ).render(true);
};
