# movieApp

aplicación para consultar las películas, series de TV y más. Todo lo relacionado al streaming, cine, televisión y el mundo del entretenimiento.

## getting started

```bash
# .env.example file copy and rename in .env
cp .env.example .env
# define environment variables in .env file
```

```bash
# install dependencies
# npm
npm install
# yarn
yarn install
```

## run

```bash
# run metro
npx react-native start

# run app android
npx react-native run-android
```

# requirements for generate .apk or .aab

```bash
1. copy password my-upload-key.keystore file

# saving Gradle variables in android/grandle.properties file
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

2. fix View ViewPropsTypes

inside node_modules/react-native/index.js

replace these functions with the below lines

```js
// Deprecated Prop Types
get ColorPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').ColorPropType;
},

get EdgeInsetsPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
},

get PointPropType(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').PointPropType;
},

get ViewPropTypes(): $FlowFixMe {
  console.warn('');
  return require('deprecated-react-native-prop-types').ViewPropTypes;
},
```

open files
./node_modules/react-native-snap-carousel/src/carousel/Carousel.js
./node_modules/react-native-snap-carousel/src/Pagination/Pagination.js
./node_modules/react-native-snap-carousel/src/Pagination/PaginationDot.js
./node_modules/react-native-snap-carousel/src/ParallaxImage/ParallaxImage.js

edit

```js
import { ... ,ViewPropTypes } from 'react-native';
```

to

```js
import { ... } from 'react-native';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
```
