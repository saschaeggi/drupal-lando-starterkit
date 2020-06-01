# Drupal Lando Starterkit

A Drupal Starterkit with GraphQL, GraphQL Twig, Gin Future UI, Minimal Frontend Setup with Webpack and Vanilla JS/Vue running on Lando (Docker).

## Prerequisites

### Get Lando
Install Lando: https://docs.lando.dev/basics/installation.html

---

## Installation

### Clone repo
Clone the repo
```
git clone git@github.com:saschaeggi/drupal-lando-starterkit.git drupal-lando-starterkit
```

### Build containers
```
cd web
lando start
lando db-import ../db_dump/drupal.sql
lando drush cr
```

### You're ready to go
https://drupal-lando-starterkit.lndo.site/

---

## Commands

### Start containers
```
lando start
```

### Stop containers
```
lando stop
```

#### Poweroff Lando
```
lando poweroff
```

### SSH into container
```
lando ssh
```


### Drush
Make sure you're in the frontend folder (`cd web`)

```
lando drush COMAMND
```

### Composer
Make sure you're in the frontend folder (`cd web`)

```
lando composer COMMAND
```

---

## Drupal

### Frontend
https://drupal-lando-starterkit.lndo.site/

### Drupal Backend Login
https://drupal-lando-starterkit.lndo.site/user

```
username: admin
password: drupal
```

### GraphQL Default API
https://drupal-lando-starterkit.lndo.site/graphql

Authentication via Bearer access token.

#### Get a Bearer Token
```
curl --request POST \
  --url https://drupal-lando-starterkit.lndo.site/oauth/token \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data grant_type=password \
  --data username=api \
  --data password=drupal \
  --data client_id=104a2b89-02fc-4501-aebc-2ec7766cc84f \
  --data 'client_secret=7U9_kQ_@ozhHi!.v-!'
  ```

---

## Frontend Theme

### Run theme (compile / watch)
Install
```
cd web/themes/frontend/
nvm use
npm install
```

Run watcher
```
cd web/themes/frontend/
npm run dev
```

Compile assets
```
cd web/themes/frontend/
npm run prod
```

Scaffold components
```
cd web/themes/frontend/
npm run scaffold
```

---

## Twig debugging
**Create local settings for debugging**
Rename `web/sites/default/default.settings.local.php` to `web/sites/default/settings.local.php`
