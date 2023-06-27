module.exports = [
  {
    id: 'theme-extension',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension theme-extension is activated!'
      );
      console.log(app.commands);
    }
  }
];
