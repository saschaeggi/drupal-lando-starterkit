# Drupal Docksal Starterkit

A Drupal Starterkit with GraphQL, GraphQL Twig, Gin Future UI, Minimal Frontend Setup with Webpack and Vanilla JS/Vue running on Docksal (Docker).

## Prerequisites

### Get Docker (for Mac/Windows)
Install Docker Desktop (Mac/Windows): https://www.docker.com/products/docker-desktop

### Install Docksal
Install Docksal: https://docksal.io/

---

## Installation

### Clone repo
Clone the repo into ```~/Projects```
```
git clone git@github.com:saschaeggi/drupal-docksal-starterkit.git drupal-docksal-starterkit
```

### Build containers
```
fin init
```

### You're ready to go
https://drupal-docksal-starterkit.docksal/

---

## Commands

### Start containers
```
fin start [or fin up]
```

### Stop containers
```
fin stop
```

### When using VirtualBox instead of Docker for Mac

#### Start Docksal VM Box
```
fin system start
```

#### Stop Docksal VM Box
```
fin system stop
```

### SSH into containers
#### Default CLI container
```
fin bash
```

#### Specific container
```
fin exec --in=CONTAINERNAME bash
```

### Drush
Make sure you're in the frontend folder (`cd drupal/web`)

```
fin drush COMAMND
```

### Composer
Make sure you're in the frontend folder (`cd drupal/web`)

```
fin composer COMMAND
```

---

## Drupal

### Frontend
https://drupal-docksal-starterkit.docksal/

### Drupal Backend Login
https://drupal-docksal-starterkit.docksal/user

```
username: admin
password: drupal
```

### GraphQL Default API
https://drupal-docksal-starterkit.docksal/graphql

Authentication via Bearer access token.

#### Get a Bearer Token
```
curl --request POST \
  --url https://drupal-docksal-starterkit.docksal/oauth/token \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data grant_type=password \
  --data username=api \
  --data password=drupal \
  --data client_id=104a2b89-02fc-4501-aebc-2ec7766cc84f \
  --data 'client_secret=7U9_kQ_@ozhHi!.v-!'
  ```

### Mailhog
https://mail.drupal-docksal-starterkit.docksal/

### Solr
https://solr.drupal-docksal-starterkit.docksal/

---

## Frontend Theme

### Run theme (compile / watch)
Install
```
cd drupal/web/themes/frontend/
nvm use
npm install
```

Install dependencies in `drupal/web/core` (used for linting, e.g.)
```bash
cd drupal/web/core/
nvm use 10.15.1 # no version specified, let's use the one from `drupal/web/themes/frontend/`
npm install
```

Run watcher
```
cd drupal/web/themes/frontend/
npm run dev
```

Compile assets
```
cd drupal/web/themes/frontend/
npm run prod
```

Scaffold components
```
cd drupal/web/themes/frontend/
npm run scaffold
```

---

## Customization

### Add custom domain for local development
Add the following to your `/etc/hosts`:

```
# Drupal Docksal Starterkit
192.168.64.100 drupal.mydomain.local
::2 drupal.mydomain.local
```

and add your custom domain to the `.docksal/docksal.env`
```
VIRTUAL_HOST=mydomain.local
```

---

## Twig debugging
**Create local settings for debugging**
Rename `drupal/web/sites/default/default.settings.local.php` to `drupal/web/sites/default/settings.local.php`
