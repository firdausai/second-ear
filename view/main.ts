import { ItemView, WorkspaceLeaf } from 'obsidian';

export const VIEW_TYPE = 'main-view';

export class MainView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE;
  }

  getDisplayText() {
    return 'Second Ear';
  }

  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty();
    container.createEl('h4', { text: 'Second Ear' });
  }

  async onClose() {
    
  }
}