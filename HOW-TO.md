# How to develop this project

## How to start React project

I've used `create-vite` command to create the React project.

The command was:

```bash
npx create-vite blog-editor --template react
```

After that, I changed to `blog-editor` directory and installed the depencencies using pnpm. Then, start de project.

```bash
cd blog-editor
pnpm i
pnpm run dev
```

Then I cleared all template contents and moved App component into components directory.

## How to add Tailwind to project

I followed the steps from [Tailwind installation page](https://flowbite.com/docs/getting-started/react/):

1. Installed depencencies of Tailwind:

    ```bash
    pnpm install -D tailwindcss postcss autoprefixer
    ```

1. Created config files of Tailwind with installation command

    ```bash
    npx tailwindcss init -p
    ```

    This command creates two files:

      - postcss.config.js
      - tailwind.config.js

    But it's necessary to adapt to React jsx files.

1. Edit `tailwind.config.js` to add JSX support. I had to change `content: [],` line with the following:

    ```js
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
      ],
    ```

1. And last, add Tailwind directives into `./src/components/App.css` at the beginning file:

    ```postcss
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
