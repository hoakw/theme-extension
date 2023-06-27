import { JupyterFrontEndPlugin,JupyterFrontEnd } from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

const plugin: JupyterFrontEndPlugin<void> = {
  id: '@hoakw/theme-extension:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@hoakw/theme-extension/index.css';

    manager.register({
      name: "Darcula",
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

/**
 * Export the plugin as default.
 */
export default plugin;

