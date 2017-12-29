# Firebase Cloud Functions + TypeScript + PureScript + Webpack

A sample configuration showing how to use PureScript in Firebase Cloud
Functions, called from TypeScript. Why would you do that? Well, there are a lot
of libraries for using other Firebase stuff that you can easily throw together,
but I'd still like to write some parts in PureScript. Parsers, for instance, are
a red line for me.

## How to use this

You'll first need to hook this up to a Firebase account. This happens through
the [Firebase CLI](https://firebase.google.com/docs/cli/) which you need to
install first.

```
firebase login
firebase use --add
```

Now download half the internet to for all the node dependencies and then a
somewhat smaller amount for the PureScript deps via `psc-package`.

```
cd functions
yarn
psc-package build
```

That should be enough to deploy this.

```
firebase deploy --only functions
```

This should give you a URL you can curl to check if everything worked out:

```
$ curl -v https://us-central1-carbon-intensity.cloudfunctions.net/helloWorld
Hello from Purescript!
```

## How to develop this

Webpack is configured and can be used from within `functions/`:

```
yarn
yarn run webpack -w
yarn test
```

## License

BSD-3
