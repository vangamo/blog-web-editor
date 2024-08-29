import { useState } from "react";

import ModalDialog from "./ModalDialog";

function LoginDialog({ isShown, onSubmit, onCancel }) {
  const [repo, setRepo] = useState("");
  const [token, setToken] = useState("");

  const handleInputRepo = (ev) => {
    setRepo(ev.currentTarget.value);
  };
  const handleInputToken = (ev) => {
    setToken(ev.currentTarget.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    onSubmit(repo, token);
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
            htmlFor="repo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your repo
          </label>
          <input
            type="url"
            name="repo"
            id="repo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
            value={repo}
            onInput={handleInputRepo}
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
            value={token}
            onInput={handleInputToken}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value="remember"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
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
