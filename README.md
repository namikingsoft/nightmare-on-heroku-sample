[WIP] Sample of Nightmare on Heroku
========================================

Getting Started
----------------------------------------
```bash
npm install
heroku create
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-multi.git
git push heroku master
heroku open
```

or

```bash
npm install
heroku git:remote --app [existed-heroku-appname] --remote heroku
git push -f heroku master
heroku open
```
