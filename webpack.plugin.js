module.exports = {
  "output": {
      path: __dirname + "/element-package",
      filename: 'plugin.bundle.js',
  },
  "externals": {
    "rxjs": "rxjs",
    "@angular/core": "ng.core",
    "@angular/common": "ng.common",
    "@angular/common/http": "ng.common.http",
    "@angular/platform-browser": "ng.platformBrowser",
    "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
    "@angular/compiler": "ng.compiler",
    // "@angular/elements": "ng.elements",
    "@angular/cdk": "ng.cdk",
    "@angular/material": "ng.material"
  }
}