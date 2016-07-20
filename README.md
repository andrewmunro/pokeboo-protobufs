# pokeboo-protobufs

NPM module that contains protobufs required to communicate with the Pokemon Go servers.
These protobufs are generated from the [POGOProtos project](https://github.com/AeonLucid/POGOProtos) using [protobuf.js](https://www.npmjs.com/package/protobufjs)!

## Installation

    npm i pokeboo-protobufs --save

## Usage

    var protos = require('pokeboo-protobufs');

    ...

    var playerResponse = protos.Networking.Responses.GetPlayerResponse.decode(protoMessage);

For more information see the [available structures](https://github.com/AeonLucid/POGOProtos/tree/master/src/POGOProtos) or read the [protobuf.js documentation](https://github.com/dcodeIO/protobuf.js).

## Development

    npm build - clones the POGOProtos repo and compiles them to index.js
