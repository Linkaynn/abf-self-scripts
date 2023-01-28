import { Script, Scripts } from '../domain/Scripts';
import { log } from './log';

const getEvalCommand = (scriptName: string): string => `
fetch("https://raw.githubusercontent.com/Linkaynn/abf-self-scripts/public/${scriptName}")
.then(r => r.text())
.then(eval)
.catch(e => {
    console.error(e);
    new Dialog(
      {
        title: "Error",
        content: "<div>An error occurred trying to execute the script.</div>",
        buttons: {},
        default: '',
      },
    ).render(true);
});
`;

const AbfSelfScriptFolderName = 'GC::Scripts';

const createFolderIfNotExists = (): Promise<Folder | undefined> => {
  const existFolder = game.folders!.find(
    (folder) => folder.name === AbfSelfScriptFolderName,
  );

  if (existFolder) {
    return Promise.resolve(existFolder);
  }

  return Folder.create({
    name: AbfSelfScriptFolderName,
    type: 'Macro',
    description:
      'This folder contains all the scripts used by the GC::Scripts module.',
  });
};

export const createEvalCommands = (scripts: Script[]): Promise<void> => {
  return new Promise((resolve) => {
    createFolderIfNotExists().then((folder) => {
      if (!folder) {
        log(
          `Cannot create folder for ${scripts} command. Folder can not be created.`,
        );
        return Promise.resolve(undefined);
      }

      Promise.all(
        scripts.map((script) => {
          const scriptIndex = Object.values(Scripts).findIndex(
            (s) => s.name === script.name,
          );

          const id = `[${scriptIndex.paddedString(2)}]`;

          const name = `${id} ${script.name}`;

          const macro = game.macros!.find(
            (m) => m.name != null && m.name.includes(id),
          );

          if (macro) {
            macro.update({
              name,
              command: getEvalCommand(script.script),
              img: script.icon,
            });

            log(`Macro ${name} updated`);

            return macro;
          } else {
            const macro = Macro.create({
              type: 'script',
              name,
              command: getEvalCommand(script.script),
              img: script.icon,
              folder: folder.id,
            });

            log(`Macro ${name} created`);

            return macro;
          }
        }),
      ).then(() => {
        resolve();
      });
    });
  });
};
