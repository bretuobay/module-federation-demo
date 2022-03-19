import script from "scriptjs";

const loadEntryPoint = (url) =>
  new Promise((resolve) => {
    script.urlArgs(`t=${new Date().getTime()}`);
    script(url, () => resolve(0));
  });

// Dynamically import a remote module using Webpack's loading mechanism:
// https://webpack.js.org/concepts/module-federation/
const importRemote = async (url, scope, module) => {
  if (!window[scope]) {
    //Get the remote entry point:
    await loadEntryPoint(`${url}/remoteEntry.js`);
    if (!window[scope]) {
      return Promise.reject(new Error(`${scope} could not be located!`));
    }
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");
    // Initialize the container, it may provide shared modules
    await window[scope].init(__webpack_share_scopes__.default);
  }

  const moduleFactory = await window[scope].get(
    module.startsWith("./") ? module : `./${module}`
  );
  return moduleFactory();
};

export default importRemote;
