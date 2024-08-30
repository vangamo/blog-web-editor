import { useState } from "react";

import ModalDialog from "./ModalDialog";

function LoginDialog({ isShown, onSubmit, onCancel }) {

  const [ credentials, setCredentials ] = useState( {
    repoUrl:'',
    commitName: '',
    commitEmail: '',
    token: '',
    remember: false
  } );
  const handleInput = (ev) => {
    const inputIdentifier = ev.currentTarget.id
    const inputValue = ev.currentTarget.value;

    setCredentials(
      {
        ...credentials,
        [inputIdentifier]: inputValue
      }
    )
  };

  const handleChange = (ev) => {
    const inputIdentifier = ev.currentTarget.id
    const inputChecked = ev.currentTarget.checked;

    setCredentials(
      {
        ...credentials,
        [inputIdentifier]: inputChecked
      }
    )
  }


  const handleSubmit = (ev) => {
    ev.preventDefault();

    onSubmit(credentials);
  };

  return (
    <ModalDialog
      isShown={isShown}
      title="Login"
      onSubmit={handleSubmit}
      onCancel={onCancel}
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="repoUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your repo
          </label>
          <input
            type="url"
            name="repoUrl"
            id="repoUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
            value={credentials.repoUrl}
            onInput={handleInput}
          />
        </div>
        <div>
          <label
            htmlFor="commitName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your commits name
          </label>
          <input
            type="text"
            name="commitName"
            id="commitName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
            value={credentials.commitName}
            onInput={handleInput}
          />
        </div>
        <div>
          <label
            htmlFor="commitEmail"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your commits email
          </label>
          <input
            type="email"
            name="commitEmail"
            id="commitEmail"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
            value={credentials.commitEmail}
            onInput={handleInput}
          />
        </div>
        <div>
          <label
            htmlFor="token"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your token
          </label>
          <input
            type="password"
            name="token"
            id="token"
            placeholder="ghp_••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
            value={credentials.token}
            onInput={handleInput}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                value="remember"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                checked={credentials.remember}
                onChange={handleChange}
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <a
            href="https://github.com/settings/tokens"
            target="_blank"
            className="text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost your token?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Connect to your repo
        </button>
      </form>
    </ModalDialog>
  );
}

export default LoginDialog;
