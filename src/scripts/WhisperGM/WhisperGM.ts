import { renderDialog } from "../../utils/renderDialog";
import { WhisperGMModal } from "../../react/components/WhisperGMModal/WhisperGMModal";
import { log } from "../../utils/log";

window.whisperGM = () => {
  renderDialog("Whisper to Game Master", WhisperGMModal);
};

log("WhisperGM initialized");
