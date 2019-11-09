# Path to content-type 

## Get started 

The package is available via npm. It has to be installed as a local dependency:

npm install amonad

It consists of three pure functions which can be used to quickly get file extension or corespondent content type from a path.

## API

```typescript
getContentType: path: string) => string | undefined
```

Lookups correct MIME content-type for specified path and return it as a string. If extension can not be identified returns undefined.

```typescript
getContentTypeMaybe: (path: string) => Maybe<string>
```

Works in a very similar way to *getContentType*, but returns Maybe of the string which is None if MIME type can not be identified.

```typescript
getExtension: (path: string) => string | undefined
```

Support function which helps to extract file extension from a path.

## Contribution guidelines

The project is based on *npm* eco-system. Therefore, development process is organized via *npm* scripts.

For installation of dependencies run

    npm install

To build application once

    npm run build

To build an application and watch for changes of files

    npm run build:w

To run tslint one time for CI

    npm run lint

To unit tests in a watching mode are performed by 

    npm run test
    
To execute a test suit single time

    npm run test:once

To execute a test suit single time with coverage report

    npm run test:c

To execute a test suit single time with coverage report submitted to *coveralls*

    npm run test:ci

Everybody is welcome to contribute and submit pull requests. Please communicate your ideas and suggestions via *issues*.