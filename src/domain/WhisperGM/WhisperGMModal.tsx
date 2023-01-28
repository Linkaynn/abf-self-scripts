import React from "react";
import { useInput } from "../../design-system/hooks/useInput";
import { Button } from "../../design-system/components/Button";
import { getGMUser } from "../../utils/FoundryScripts";

export const WhisperGMModal = ({ dialog }: { dialog: Dialog }) => {
  const { getValue, Input } = useInput();

  const handleSendInfo = () => {
    ChatMessage.create({
      content: getValue(),
      user: game.userId,
      whisper: [getGMUser().id!],
    });

    dialog.close();
  };

  return (
    <div>
      <Input />
      <div className="flex gap-2">
        <Button
          disabled={getValue().trim().length === 0}
          onClick={handleSendInfo}
        >
          Enviar
        </Button>
        <Button onClick={() => dialog.close()}>Cerrar</Button>
      </div>
    </div>
  );
};
