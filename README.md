# Fastify starter with Auth


## About:

This repo contains the starter setup that I always spend way too much time setting up and gathering:

- TypeScript
- ESlint and Prettier with Autoformmating in VSCode enabled
  - Thanks to https://github.com/robertcoopercode https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
- Fastify API server
- 

**Live Demo** 
Using [Github Actions](https://github.com/madmaxlax/react-materialui-router-typescript-starter/blob/main/.github/workflows/deploy-to-gh-pages.yml) we deploy to the free static hosting Github Pages
https://madmaxlax.github.io/react-materialui-router-typescript-starter/ 

route to test: 
localhost:8000/foo
send a token as a bearer auth header

## How to use

Download the example [or clone the repo](https://github.com/madmaxlax/ts-fastify-with-auth-starter):

**Set up the JWKS URL environment variable**
you can use a .env file

`AAD_JWKS`

Install it and run:

```sh
yarn install
yarn start
```

This uses Prettier and ESLint, which are two extensions in VScode that help with auto-formatting
 - ESlint https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
 - Prettier https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode


**Note:**
For all packages in package.json, I used `"latest"` as the version. 
You may want to freeze them at their current latest version 


## The idea behind the example

I always spent way too much time with new projects setting up prettier, ESlint, React with Router and Material UI. 
I often used a template like https://github.com/creativetimofficial/material-dashboard-react but then would spend a lot of time scraping out their features to make my own. 



## *optional* Docker Container 

a [Dockerfile](https://github.com/madmaxlax/react-materialui-router-typescript-starter/blob/main/Dockerfile) is included if you optionally want to run this as a container. 
Commands:

 - Build the container, then run it: 
    - feel free to change the name and tag to anything instead of material-ui-starter, but be consistent

```
docker build -t material-ui-starter .
docker run --name material-ui-starter -p 3003:3003 material-ui-starter
```
