import React from 'react';
import { useInput } from '../../design-system/hooks/useInput';
import { Button } from '../../design-system/components/Button';
import { createDialog, getDifficultyName } from '../../utils/FoundryScripts';

const getDifficultyByDistance = (value: number) => {
  if (value < 2) return 40;
  if (value < 11) return 80;
  if (value < 51) return 120;
  if (value < 151) return 140;
  if (value < 500) return 180;
  if (value < 1000) return 240;

  return 280;
};

export const CalculatePhysicalDistanceDifficultyModal = ({
  dialog,
}: {
  dialog: Dialog;
}) => {
  const { getValue, Input } = useInput();

  const handleSendInfo = () => {
    const value = getValue();

    const difficulty = getDifficultyByDistance(parseFloat(value));
    const difficultyName = getDifficultyName(difficulty);

    createDialog(
      'Resultado',
      `<p style='text-align: center; font-size: 18px'>Para una distancia de <b>${value}</b> metros</br>el control debe ser superior a </br><b style="color: #6e2917">${difficulty} (${difficultyName})</b> </p>`,
    );

    dialog.close();
  };

  return (
    <div>
      <Input
        style={{ marginTop: '20px', marginBottom: '20px' }}
        placeholder="Distancia en metros"
      />
      <div>
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
