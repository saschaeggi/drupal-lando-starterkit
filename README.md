# Unic headless starterkit

## Prerequisites

### Get Docker (for Mac/Windows)
Install Docker Desktop (Mac/Windows): https://www.docker.com/products/docker-desktop
(Use Version 2.1.0.5 or lower until this issue is fixed: https://github.com/docksal/docksal/issues/482)

### Install Docksal
Install Docksal: https://docksal.io/

---

## Installation

### Clone repo
Clone the repo into ```~/Projects```
```
git clone --recurse-submodules https://git.unic.com/scm/drupal/headless.git headless
```

### Edit your /etc/hosts file
Add the following to your `/etc/hosts`:

```
# Docksal Headless
192.168.64.100 headless.unic.local drupal.headless.unic.local storybook.headless.unic.local mail.headless.unic.local solr.headless.unic.local
::2 headless.unic.local drupal.headless.unic.local storybook.headless.unic.local mail.headless.unic.local solr.headless.unic.local
```

### Build/Install containers
```
fin init
```

---

## Commands

### Start containers
```
fin start
```

### Stop containers
```
fin stop
```

### SSH into containers
#### Default CLI container
```
fin bash
```

#### Specific container
```
fin exec --in=dev bash
```

### Drush
Make sure you're in the frontend folder (`cd drupal/web`)

```
fin drush COMAMND
```

---

## Endpoints

### Frontend
https://headless.unic.local/

### Drupal
https://drupal.headless.unic.local/
```
username: admin
password: drupal
```

### GraphQL Default API
https://drupal.headless.unic.local/graphql

Authentication via Bearer access token.

#### Get a Bearer Token
```
curl --request POST \
  --url http://drupal.headless.unic.local/oauth/token \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data grant_type=password \
  --data username=api \
  --data password=drupal \
  --data client_id=104a2b89-02fc-4501-aebc-2ec7766cc84f \
  --data 'client_secret=7U9_kQ_@ozhHi!.v-!'
  ```

### Storybook
https://storybook.headless.unic.local/

### Mailhog
https://mail.headless.unic.local/

### Solr
https://solr.headless.unic.local/

---

## Building assets

### Build Frontend
```
fin frontend
```

### Build Storybook
```
fin storybook
```
---

## Local Frontend enviroment

Make sure you're in the frontend folder (`cd frontend`)

### If `node_modules` aren't installed yet
```
nvm install && nvm use
```

### Run frontend
Run's the watcher on `https://localhost:3333`
```
npm run nuxt
```

### Build frontend
```
npm run build
```

### Build static frontend
```
npm run generate
```

### Storybook
Run's the watcher on `https://localhost:6006`
```
npm run storybook
```

### Static Storybook Build
```
npm run build-storybook
```