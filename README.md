# Chromeo

### CONTRIBUTING

#### Setup
- [Fork this repo](https://help.github.com/articles/fork-a-repo) and clone it on your system.
- Install all the required dependencies by running `yarn install`.
- Create a new branch out off `master` for your fix/feature by running `git checkout -b new-feature`.
- Build this project by running the following commands
    - `grunt test` - This creates `dist` folder containing files (unminified version) for the chrome-extension and a watcher task.
    - `grunt build` - This creates `dist` folder containing files (minified version) for the chrome-extension and its `.zip` file (only for admin purpose).
- Install in your chrome by loading the generated `dist` folder as an [unpacked extension](http://techapple.net/2015/09/how-to-install-load-unpacked-extension-in-google-chrome-browser-os-chromebooks/).

#### Things to remember
- Do not fix multiple issues in a single commit. Keep them one thing per commit so that they can be picked easily in case only few commits require to be merged.
- Before submitting a patch, rebase your branch on upstream `master` to make life easier for the merger.
- **DO NOT** commit generated build files or folders in your commits. The list has been mentioned in the `.gitignore` file.
- Make sure to disable the original downloaded `Memefy This` extension while testing the local unpacked version.

### License

MIT Licensed

Copyright (c) 2017 AshBardhan, [ashbardhan.github.io](https://ashbardhan.github.io)