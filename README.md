# Renteez app frontend
Project for Reactjs app using nextjs, redux, antd, less.

## Librarries
- [React 17x](https://reactjs.org)
- [Nextjs 11x](https://nextjs.org/)
- [Antd 4x](https://ant.design/)
- Less - css module
- Eslint
- Webpack 5

## Getting Started

1. Check if your [Node.js](https://nodejs.org/) version is >= 10.13.
2. Clone the repository.
3. Run `npm install` to install the dependencies.
4. Run `yarn dev` for development.
5. Run `yarn build` and `yarn start` for production.
6. Run `yarn build:staging` and `yarn start:staging` for staging.

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## Environment Variables

By default all environment variables loaded through `.env` are only available in the Node.js environment, meaning they won't be exposed to the browser.

In order to expose a variable to the browser you have to prefix the variable with `NEXT_PUBLIC_.` For example:

```js
PORT=8080

NEXT_PUBLIC_API_URL=http://localhost:$PORT/api
NEXT_PUBLIC_WEB_URL=http://localhost:$PORT
```

##### Default Environment Variables
Allows you to set defaults in `.env` (all environments), `.env.development` (development environment), `and .env.production` (production environment), `and .env.staging` (staging environment).

`.env` always overrides the defaults set.

Reference in the file `.env-example`.

#### Customize Theme
You can edit the Ant Design Less variables in `src/styles/variables.less` file. A set of less variables are defined for each design aspect that can be customized to your needs.


There are some major variables below, all less variables could be found in [Default Variables](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less).

