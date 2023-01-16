import React, { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { Button } from "../ds/Button";

export const WhisperGMModal = ({ dialog }: { dialog: Dialog }) => {
  const { getValue, Input } = useInput();

  const handleSendInfo = () => {
    ChatMessage.create({
      content: getValue(),
      user: game.userId,
      whisper: [window.getGMUser().id!],
    });

    dialog.close();
  };

  return (
    <div>
      <Input />
      <div className="flex gap-2">
        <Button onClick={handleSendInfo}>Enviar</Button>
        <Button onClick={handleSendInfo}>Cerrar</Button>
      </div>
    </div>
  );
};
