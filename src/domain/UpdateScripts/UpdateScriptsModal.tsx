import React from 'react';
import { Button } from '../../design-system/components/Button';
import { getGMUser } from '../../utils/FoundryScripts';
import { Scripts } from '../Scripts';
import { createEvalCommands } from '../../utils/createEvalCommands';

export const UpdateScriptsModal = ({ dialog }: { dialog: Dialog }) => {
  const scriptsForGm = Object.values(Scripts).filter(
    (script) => script.permissions === 'gm' || script.permissions === 'all',
  );

  const scriptsForPlayers = Object.values(Scripts).filter(
    (script) => script.permissions === 'all',
  );

  const allScripts = [...scriptsForGm];

  const createGMScripts = async () => {
    await createEvalCommands(scriptsForGm);

    dialog.close();
  };

  const createPlayerScripts = async () => {
    await createEvalCommands(scriptsForPlayers);

    dialog.close();
  };

  const createAllScripts = async () => {
    await createEvalCommands(allScripts);

    dialog.close();
  };

  return (
    <div>
      <h1>ABF GC:Scripts</h1>
      <p>Welcome! Choose the scripts you want to update.</p>
      <div>
        <Button onClick={createGMScripts}>For GM</Button>
        <Button onClick={createPlayerScripts}>For Players</Button>
        <Button onClick={createAllScripts}>All scripts</Button>
        <Button onClick={() => dialog.close()}>Cerrar</Button>
      </div>
    </div>
  );
};
