Asset Generator
===============

<a href="https://github.com/paulocoutinhox/asset-generator/actions/workflows/build.yml"><img src="https://github.com/paulocoutinhox/asset-generator/actions/workflows/build.yml/badge.svg"></a>

This is an asset resizer for Android and iOS.

It takes an image in `@3x` or `xxxhdpi` size and resize it:

* Android: mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi
* iOS: @1x, @2x, @3x

## Installation

```
npm install -g https://github.com/paulocoutinhox/asset-generator
```

or for local development:

```
npm pack
npm install asset-generator-1.0.0.tgz
```

## Usage

```
asset-generator <files> --android <target-dir-android> --ios <target-dir-ios>
```

Example:

```
asset-generator *.png --android /my-android-project/app/src/main/res --ios /my-ios-project/app/assets
```

Obs: Android or iOS option is optional, you can use only one.
