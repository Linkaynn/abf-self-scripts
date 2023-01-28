import { renderDialog } from '../../utils/renderDialog';
import { UpdateScriptsModal } from './UpdateScriptsModal';

renderDialog({
  name: 'ABF GC:Scripts Updater',
  Element: UpdateScriptsModal,
  size: {
    height: 270,
    width: 470,
  },
});
