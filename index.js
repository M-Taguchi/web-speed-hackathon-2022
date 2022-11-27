/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/foundation/utils/UrlUtils.js":
/*!*************************************************!*\
  !*** ./src/client/foundation/utils/UrlUtils.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.assets = void 0;

/** @type {(path: string) => string} */
const assets = path => `/assets/${path.replace(/^\//, "")}`;

exports.assets = assets;

/***/ }),

/***/ "./src/model/BettingTicket.js":
/*!************************************!*\
  !*** ./src/model/BettingTicket.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BettingTicket = void 0;

var _typeorm = __webpack_require__(/*! typeorm */ "typeorm");

class BettingTicket {
  static schema = new _typeorm.EntitySchema({
    columns: {
      createdAt: {
        createDate: true,
        nullable: false,
        type: "datetime"
      },
      id: {
        generated: "uuid",
        primary: true,
        type: "uuid"
      },
      key: {
        nullable: false,
        type: "simple-json"
      },
      type: {
        nullable: false,
        type: "varchar"
      }
    },
    name: "BettingTicket",
    orderBy: {
      createdAt: "ASC"
    },
    relations: {
      race: {
        target: "Race",
        type: "many-to-one"
      },
      user: {
        target: "User",
        type: "many-to-one"
      }
    },
    target: BettingTicket
  });
  /** @param {Partial<BettingTicket>} [payload] */

  constructor(payload = {}) {
    /** @type {string} */
    this.id = payload.id;
    /** @type {BettingType} */

    this.type = payload.type;
    /** @type {number[]} */

    this.key = payload.key;
    /** @type {string} */

    this.createdAt = payload.createdAt;
    /** @type {import('./User').User} */

    this.user = payload.user;
    /** @type {import('./Race').Race} */

    this.race = payload.race;
  }

}

exports.BettingTicket = BettingTicket;

/***/ }),

/***/ "./src/model/OddsItem.js":
/*!*******************************!*\
  !*** ./src/model/OddsItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OddsItem = void 0;

var _typeorm = __webpack_require__(/*! typeorm */ "typeorm");

class OddsItem {
  static schema = new _typeorm.EntitySchema({
    columns: {
      id: {
        generated: "uuid",
        primary: true,
        type: "uuid"
      },
      key: {
        nullable: false,
        type: "simple-json"
      },
      odds: {
        nullable: false,
        type: "int"
      },
      type: {
        nullable: false,
        type: "varchar"
      }
    },
    name: "OddsItem",
    relations: {
      race: {
        inverseSide: "trifectaOdds",
        target: "Race",
        type: "many-to-one"
      }
    },
    target: OddsItem
  });
  /** @param {Partial<OddsItem>} [payload] */

  constructor(payload = {}) {
    /** @type {string} */
    this.id = payload.id;
    /** @type {BettingType} */

    this.type = payload.type;
    /** @type {number[]} */

    this.key = payload.key;
    /** @type {number} */

    this.odds = payload.odds;
    /** @type {import('./Race').Race} */

    this.race = payload.race;
  }

}

exports.OddsItem = OddsItem;

/***/ }),

/***/ "./src/model/Player.js":
/*!*****************************!*\
  !*** ./src/model/Player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Player = void 0;

var _typeorm = __webpack_require__(/*! typeorm */ "typeorm");

class Player {
  static schema = new _typeorm.EntitySchema({
    columns: {
      id: {
        generated: "uuid",
        primary: true,
        type: "uuid"
      },
      image: {
        nullable: false,
        type: "text"
      },
      name: {
        nullable: false,
        type: "varchar"
      },
      shortName: {
        nullable: false,
        type: "varchar"
      }
    },
    name: "Player",
    target: Player
  });
  /** @param {Partial<Player>} [payload] */

  constructor(payload = {}) {
    /** @type {string} */
    this.id = payload.id;
    /** @type {string} */

    this.name = payload.name;
    /** @type {string} */

    this.shortName = payload.shortName;
    /** @type {string} */

    this.image = payload.image;
  }

}

exports.Player = Player;

/***/ }),

/***/ "./src/model/Race.js":
/*!***************************!*\
  !*** ./src/model/Race.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Race = void 0;

var _typeorm = __webpack_require__(/*! typeorm */ "typeorm");

class Race {
  static schema = new _typeorm.EntitySchema({
    columns: {
      closeAt: {
        nullable: false,
        type: "datetime"
      },
      id: {
        generated: "uuid",
        primary: true,
        type: "uuid"
      },
      image: {
        nullable: false,
        type: "varchar"
      },
      name: {
        nullable: false,
        type: "varchar"
      },
      startAt: {
        nullable: false,
        type: "datetime"
      }
    },
    indices: [{
      columns: ["startAt"],
      unique: false
    }, {
      columns: ["closeAt"],
      unique: false
    }],
    name: "Race",
    orderBy: {
      startAt: "ASC"
    },
    relations: {
      entries: {
        inverseSide: "race",
        target: "RaceEntry",
        type: "one-to-many"
      },
      trifectaOdds: {
        inverseSide: "race",
        target: "OddsItem",
        type: "one-to-many"
      }
    },
    target: Race
  });
  /** @param {Partial<Race>} [payload] */

  constructor(payload = {}) {
    /** @type {string} */
    this.id = payload.id;
    /** @type {string} */

    this.name = payload.name;
    /** @type {string} */

    this.image = payload.image;
    /** @type {string} */

    this.startAt = payload.startAt;
    /** @type {string} */

    this.closeAt = payload.closeAt;
    /** @type {import('./RaceEntry').RaceEntry[]} */

    this.entries = payload.entries;
    /** @type {import('./OddsItem').OddsItem[]} */

    this.trifectaOdds = payload.trifectaOdds;
  }

}

exports.Race = Race;

/***/ }),

/***/ "./src/model/RaceEntry.js":
/*!********************************!*\
  !*** ./src/model/RaceEntry.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RaceEntry = void 0;

var _typeorm = __webpack_require__(/*! typeorm */ "typeorm");

class RaceEntry {
  static schema = new _typeorm.EntitySchema({
    columns: {
      comment: {
        allowNull: false,
        type: "varchar"
      },
      first: {
        allowNull: false,
        type: "integer"
      },
      firstRate: {
        allowNull: false,
        type: "float"
      },
      id: {
        generated: "uuid",
        primary: true,
        type: "uuid"
      },
      number: {
        nullable: false,
        type: "int"
      },
      others: {
        allowNull: false,
        type: "integer"
      },
      paperWin: {
        allowNull: false,
        type: "integer"
      },
      predictionMark: {
        allowNull: false,
        type: "varchar"
      },
      rockWin: {
        allowNull: false,
        type: "integer"
      },
      scissorsWin: {
        allowNull: false,
        type: "integer"
      },
      second: {
        allowNull: false,
        type: "integer"
      },
      third: {
        allowNull: false,
        type: "integer"
      },
      thirdRate: {
        allowNull: false,
        type: "float"
      }
    },
    name: "RaceEntry",
    orderBy: {
      number: "ASC"
    },
    relations: {
      player: {
        target: "Player",
        type: "many-to-one"
      },
      race: {
        inverseSide: "entries",
        target: "Race",
        type: "many-to-one"
      }
    },
    target: RaceEntry
  });
  /** @param {Partial<RaceEntry>} [payload] */

  constructor(payload = {}) {
    /** @type {string} */
    this.id = payload.id;
    /** @type {number} */

    this.number = payload.number;
    /** @type {import('./Player').Player} */

    this.player = payload.player;
    /** @type {import('./Race').Race} */

    this.race = payload.race;
    /** @type {string} */

    this.predictionMark = payload.predictionMark;
    /** @type {number} */

    this.first = payload.first;
    /** @type {number} */

    this.second = payload.second;
    /** @type {number} */

    this.third = payload.third;
    /** @type {number} */

    this.others = payload.others;
    /** @type {number} */

    this.rockWin = payload.rockWin;
    /** @type {number} */

    this.scissorsWin = payload.scissorsWin;
    /** @type {number} */

    this.paperWin = payload.paperWin;
    /** @type {number} */

    this.firstRate = payload.firstRate;
    /** @type {number} */

    this.thirdRate = payload.thirdRate;
    /** @type {string} */

    this.comment = payload.comment;
  }

}

exports.RaceEntry = RaceEntry;

/***/ }),

/***/ "./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.User = void 0;

var _typeorm = __webpack_require__(/*! typeorm */ "typeorm");

class User {
  static schema = new _typeorm.EntitySchema({
    columns: {
      balance: {
        default: 0,
        nullable: false,
        type: "int"
      },
      id: {
        generated: "uuid",
        primary: true,
        type: "uuid"
      },
      payoff: {
        default: 0,
        nullable: false,
        type: "int"
      }
    },
    name: "User",
    target: User
  });
  /** @param {Partial<User>} [payload] */

  constructor(payload = {}) {
    /** @type {string} */
    this.id = payload.id;
    /** @type {number} */

    this.balance = payload.balance;
    /** @type {number} */

    this.payoff = payload.payoff;
  }

}

exports.User = User;

/***/ }),

/***/ "./src/model/index.js":
/*!****************************!*\
  !*** ./src/model/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "BettingTicket", ({
  enumerable: true,
  get: function () {
    return _BettingTicket.BettingTicket;
  }
}));
Object.defineProperty(exports, "OddsItem", ({
  enumerable: true,
  get: function () {
    return _OddsItem.OddsItem;
  }
}));
Object.defineProperty(exports, "Player", ({
  enumerable: true,
  get: function () {
    return _Player.Player;
  }
}));
Object.defineProperty(exports, "Race", ({
  enumerable: true,
  get: function () {
    return _Race.Race;
  }
}));
Object.defineProperty(exports, "RaceEntry", ({
  enumerable: true,
  get: function () {
    return _RaceEntry.RaceEntry;
  }
}));
Object.defineProperty(exports, "User", ({
  enumerable: true,
  get: function () {
    return _User.User;
  }
}));

var _BettingTicket = __webpack_require__(/*! ./BettingTicket.js */ "./src/model/BettingTicket.js");

var _OddsItem = __webpack_require__(/*! ./OddsItem.js */ "./src/model/OddsItem.js");

var _Player = __webpack_require__(/*! ./Player.js */ "./src/model/Player.js");

var _Race = __webpack_require__(/*! ./Race.js */ "./src/model/Race.js");

var _RaceEntry = __webpack_require__(/*! ./RaceEntry.js */ "./src/model/RaceEntry.js");

var _User = __webpack_require__(/*! ./User.js */ "./src/model/User.js");

/***/ }),

/***/ "./src/server/paths.js":
/*!*****************************!*\
  !*** ./src/server/paths.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.INITIAL_DATABASE_PATH = exports.DATABASE_PATH = void 0;

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const INITIAL_DATABASE_PATH = _path.default.resolve(process.cwd(), "./database/seeds.sqlite");

exports.INITIAL_DATABASE_PATH = INITIAL_DATABASE_PATH;

const DATABASE_PATH = _path.default.resolve(process.cwd(), "./database/database.sqlite");

exports.DATABASE_PATH = DATABASE_PATH;

/***/ }),

/***/ "./src/server/routes/api.js":
/*!**********************************!*\
  !*** ./src/server/routes/api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.apiRoute = void 0;

var _momentTimezone = _interopRequireDefault(__webpack_require__(/*! moment-timezone */ "moment-timezone"));

var _typeorm = __webpack_require__(/*! typeorm */ "typeorm");

var _zenginCode = _interopRequireDefault(__webpack_require__(/*! zengin-code */ "zengin-code"));

var _UrlUtils = __webpack_require__(/*! ../../client/foundation/utils/UrlUtils.js */ "./src/client/foundation/utils/UrlUtils.js");

var _index = __webpack_require__(/*! ../../model/index.js */ "./src/model/index.js");

var _connection = __webpack_require__(/*! ../typeorm/connection.js */ "./src/server/typeorm/connection.js");

var _initialize = __webpack_require__(/*! ../typeorm/initialize.js */ "./src/server/typeorm/initialize.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
const apiRoute = async fastify => {
  fastify.get("/users/me", async (req, res) => {
    res.header("Cache-Control", "no-cache, no-store, no-transform");
    const repo = (await (0, _connection.createConnection)()).getRepository(_index.User);

    if (req.user != null) {
      res.send(req.user);
    } else {
      const user = await repo.save(new _index.User());
      res.send(user);
    }
  });
  fastify.post("/users/me/charge", async (req, res) => {
    res.header("Cache-Control", "no-cache, no-store, no-transform");

    if (req.user == null) {
      throw fastify.httpErrors.unauthorized();
    }

    const {
      amount
    } = req.body;

    if (typeof amount !== "number" || amount <= 0) {
      throw fastify.httpErrors.badRequest();
    }

    const repo = (await (0, _connection.createConnection)()).getRepository(_index.User);
    req.user.balance += amount;
    await repo.save(req.user);
    res.status(204).send();
  });
  fastify.get("/hero", async (_req, res) => {
    const url = (0, _UrlUtils.assets)("/images/hero.webp");
    const hash = Math.random().toFixed(10).substring(2);
    res.send({
      hash,
      url
    });
  });
  fastify.get("/races", async (req, res) => {
    const since = req.query.since != null ? _momentTimezone.default.unix(req.query.since) : undefined;
    const until = req.query.until != null ? _momentTimezone.default.unix(req.query.until) : undefined;

    if (since != null && !since.isValid()) {
      throw fastify.httpErrors.badRequest();
    }

    if (until != null && !until.isValid()) {
      throw fastify.httpErrors.badRequest();
    }

    const repo = (await (0, _connection.createConnection)()).getRepository(_index.Race);
    const where = {};

    if (since != null && until != null) {
      Object.assign(where, {
        startAt: (0, _typeorm.Between)(since.utc().format("YYYY-MM-DD HH:mm:ss"), until.utc().format("YYYY-MM-DD HH:mm:ss"))
      });
    } else if (since != null) {
      Object.assign(where, {
        startAt: (0, _typeorm.MoreThanOrEqual)(since.utc().format("YYYY-MM-DD HH:mm:ss"))
      });
    } else if (until != null) {
      Object.assign(where, {
        startAt: (0, _typeorm.LessThanOrEqual)(since.utc().format("YYYY-MM-DD HH:mm:ss"))
      });
    }

    let races = await repo.find({
      where
    });
    races = races.map(race => {
      return { ...race,
        image: race.image.replace(".jpg", "_s.webp")
      };
    });
    res.send({
      races
    });
  });
  fastify.get("/races/:raceId", async (req, res) => {
    const repo = (await (0, _connection.createConnection)()).getRepository(_index.Race);
    const race = await repo.findOne(req.params.raceId, {
      relations: ["entries", "entries.player", "trifectaOdds"]
    });

    if (race === undefined) {
      throw fastify.httpErrors.notFound();
    }

    race.image = race.image.replace(".jpg", ".webp");
    race.entries = race.entries.map(entry => {
      return { ...entry,
        player: { ...entry.player,
          image: entry.player.image.replace(".jpg", ".webp")
        }
      };
    });
    res.send(race);
  });
  fastify.get("/races/:raceId/betting-tickets", async (req, res) => {
    res.header("Cache-Control", "private, max-age=0");

    if (req.user == null) {
      throw fastify.httpErrors.unauthorized();
    }

    const repo = (await (0, _connection.createConnection)()).getRepository(_index.BettingTicket);
    const bettingTickets = await repo.find({
      where: {
        race: {
          id: req.params.raceId
        },
        user: {
          id: req.user.id
        }
      }
    });
    res.send({
      bettingTickets
    });
  });
  fastify.post("/races/:raceId/betting-tickets", async (req, res) => {
    res.header("Cache-Control", "private, max-age=0");

    if (req.user == null) {
      throw fastify.httpErrors.unauthorized();
    }

    if (req.user.balance < 100) {
      throw fastify.httpErrors.preconditionFailed();
    }

    if (typeof req.body.type !== "string") {
      throw fastify.httpErrors.badRequest();
    }

    if (!Array.isArray(req.body.key) || req.body.key.some(n => typeof n !== "number")) {
      throw fastify.httpErrors.badRequest();
    }

    const bettingTicketRepo = (await (0, _connection.createConnection)()).getRepository(_index.BettingTicket);
    const bettingTicket = await bettingTicketRepo.save(new _index.BettingTicket({
      key: req.body.key,
      race: {
        id: req.params.raceId
      },
      type: req.body.type,
      user: {
        id: req.user.id
      }
    }));
    const userRepo = (await (0, _connection.createConnection)()).getRepository(_index.User);
    req.user.balance -= 100;
    await userRepo.save(req.user);
    res.send(bettingTicket);
  });
  fastify.post("/initialize", async (_req, res) => {
    await (0, _initialize.initialize)();
    res.status(204).send();
  });
  fastify.get("/bank", (_req, res) => {
    const items = Object.entries(_zenginCode.default).map(([_, value]) => {
      const branches = Object.entries(value.branches).map(([_, v]) => {
        return {
          code: v.code,
          name: v.name
        };
      });
      return {
        branches: { ...branches.reduce((acc, obj) => {
            acc[obj.code] = {
              name: obj.name
            };
            return acc;
          }, {})
        },
        code: value.code,
        name: value.name
      };
    });
    res.send(items.reduce((acc, obj) => {
      acc[obj.code] = {
        branches: obj.branches,
        name: obj.name
      };
      return acc;
    }, {}));
  });
};

exports.apiRoute = apiRoute;

/***/ }),

/***/ "./src/server/routes/spa.js":
/*!**********************************!*\
  !*** ./src/server/routes/spa.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.spaRoute = void 0;

var _path = __webpack_require__(/*! path */ "path");

var _fastifyStatic = _interopRequireDefault(__webpack_require__(/*! fastify-static */ "fastify-static"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {import('fastify').FastifyPluginCallback}
 */
const spaRoute = async fastify => {
  fastify.register(_fastifyStatic.default, {
    root: (0, _path.join)(__dirname, "public"),
    wildcard: false
  });
  fastify.get("/favicon.ico", () => {
    throw fastify.httpErrors.notFound();
  });
  fastify.get("*", (_req, reply) => {
    return reply.sendFile("index.html", (0, _path.join)(__dirname, "public"));
  });
};

exports.spaRoute = spaRoute;

/***/ }),

/***/ "./src/server/typeorm/connection.js":
/*!******************************************!*\
  !*** ./src/server/typeorm/connection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createConnection = createConnection;

var typeorm = _interopRequireWildcard(__webpack_require__(/*! typeorm */ "typeorm"));

var _index = __webpack_require__(/*! ../../model/index.js */ "./src/model/index.js");

var _paths = __webpack_require__(/*! ../paths.js */ "./src/server/paths.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const connectionPromise = typeorm.createConnection({
  database: _paths.DATABASE_PATH,
  entities: [_index.User.schema, _index.OddsItem.schema, _index.Player.schema, _index.RaceEntry.schema, _index.Race.schema, _index.BettingTicket.schema],
  synchronize: false,
  type: "sqlite"
});

async function createConnection() {
  return await connectionPromise;
}

/***/ }),

/***/ "./src/server/typeorm/initialize.js":
/*!******************************************!*\
  !*** ./src/server/typeorm/initialize.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initialize = initialize;

var _promises = _interopRequireDefault(__webpack_require__(/*! fs/promises */ "fs/promises"));

var _paths = __webpack_require__(/*! ../paths.js */ "./src/server/paths.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function initialize() {
  await _promises.default.copyFile(_paths.INITIAL_DATABASE_PATH, _paths.DATABASE_PATH);
}

/***/ }),

/***/ "@fastify/compress":
/*!************************************!*\
  !*** external "@fastify/compress" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@fastify/compress");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("fastify");

/***/ }),

/***/ "fastify-sensible":
/*!***********************************!*\
  !*** external "fastify-sensible" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("fastify-sensible");

/***/ }),

/***/ "fastify-static":
/*!*********************************!*\
  !*** external "fastify-static" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("fastify-static");

/***/ }),

/***/ "moment-timezone":
/*!**********************************!*\
  !*** external "moment-timezone" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("moment-timezone");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "zengin-code":
/*!******************************!*\
  !*** external "zengin-code" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("zengin-code");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/


__webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");

var _fastify = _interopRequireDefault(__webpack_require__(/*! fastify */ "fastify"));

var _fastifySensible = _interopRequireDefault(__webpack_require__(/*! fastify-sensible */ "fastify-sensible"));

var _index = __webpack_require__(/*! ../model/index.js */ "./src/model/index.js");

var _api = __webpack_require__(/*! ./routes/api.js */ "./src/server/routes/api.js");

var _spa = __webpack_require__(/*! ./routes/spa.js */ "./src/server/routes/spa.js");

var _connection = __webpack_require__(/*! ./typeorm/connection.js */ "./src/server/typeorm/connection.js");

var _initialize = __webpack_require__(/*! ./typeorm/initialize.js */ "./src/server/typeorm/initialize.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// const IS_PRODUCTION = process.env.NODE_ENV === "production";
const IS_PRODUCTION = true;
const server = (0, _fastify.default)({
  logger: IS_PRODUCTION ? false : {
    prettyPrint: {
      ignore: "pid,hostname",
      translateTime: "SYS:HH:MM:ss"
    }
  }
});
server.register(Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! @fastify/compress */ "@fastify/compress"))), {
  encodings: ["gzip", "deflate"]
});
server.register(_fastifySensible.default);
server.addHook("onRequest", async (req, res) => {
  const repo = (await (0, _connection.createConnection)()).getRepository(_index.User);
  const userId = req.headers["x-app-userid"];

  if (userId !== undefined) {
    const user = await repo.findOne(userId);

    if (user === undefined) {
      res.unauthorized();
      return;
    }

    req.user = user;
  }
});
server.addHook("onRequest", async (req, res) => {
  res.header("Cache-Control", "public, max-age=31536000");
  res.header("Connection", "close");
});
server.register(_api.apiRoute, {
  prefix: "/api"
});
server.register(_spa.spaRoute);

const start = async () => {
  try {
    await (0, _initialize.initialize)();
    await server.listen(process.env.PORT || 3000, "0.0.0.0");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxPQUFQLENBQWUsV0FBZixFQUE0QixPQUFPckYsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzlDQSxFQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxlQUFYLEVBQTRCLDBCQUE1QjtBQUNBRCxFQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxZQUFYLEVBQXlCLE9BQXpCO0FBQ0QsQ0FIRDtBQUtBNEUsTUFBTSxDQUFDakIsUUFBUCxDQUFnQmhFLGFBQWhCLEVBQTBCO0FBQUUyRixFQUFBQSxNQUFNLEVBQUU7QUFBVixDQUExQjtBQUNBVixNQUFNLENBQUNqQixRQUFQLENBQWdCRCxhQUFoQjs7QUFFQSxNQUFNNkIsS0FBSyxHQUFHLFlBQVk7QUFDeEIsTUFBSTtBQUNGLFVBQU0sNkJBQU47QUFDQSxVQUFNWCxNQUFNLENBQUNZLE1BQVAsQ0FBY2hHLE9BQU8sQ0FBQ2lHLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUFsQyxFQUF3QyxTQUF4QyxDQUFOO0FBQ0QsR0FIRCxDQUdFLE9BQU9DLEdBQVAsRUFBWTtBQUNaZixJQUFBQSxNQUFNLENBQUNnQixHQUFQLENBQVdDLEtBQVgsQ0FBaUJGLEdBQWpCO0FBQ0FuRyxJQUFBQSxPQUFPLENBQUNzRyxJQUFSLENBQWEsQ0FBYjtBQUNEO0FBQ0YsQ0FSRDs7QUFTQVAsS0FBSyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLXNwZWVkLWhhY2thdGhvbi0yMDIyLy4vc3JjL2NsaWVudC9mb3VuZGF0aW9uL3V0aWxzL1VybFV0aWxzLmpzIiwid2VicGFjazovL3dlYi1zcGVlZC1oYWNrYXRob24tMjAyMi8uL3NyYy9tb2RlbC9CZXR0aW5nVGlja2V0LmpzIiwid2VicGFjazovL3dlYi1zcGVlZC1oYWNrYXRob24tMjAyMi8uL3NyYy9tb2RlbC9PZGRzSXRlbS5qcyIsIndlYnBhY2s6Ly93ZWItc3BlZWQtaGFja2F0aG9uLTIwMjIvLi9zcmMvbW9kZWwvUGxheWVyLmpzIiwid2VicGFjazovL3dlYi1zcGVlZC1oYWNrYXRob24tMjAyMi8uL3NyYy9tb2RlbC9SYWNlLmpzIiwid2VicGFjazovL3dlYi1zcGVlZC1oYWNrYXRob24tMjAyMi8uL3NyYy9tb2RlbC9SYWNlRW50cnkuanMiLCJ3ZWJwYWNrOi8vd2ViLXNwZWVkLWhhY2thdGhvbi0yMDIyLy4vc3JjL21vZGVsL1VzZXIuanMiLCJ3ZWJwYWNrOi8vd2ViLXNwZWVkLWhhY2thdGhvbi0yMDIyLy4vc3JjL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL3dlYi1zcGVlZC1oYWNrYXRob24tMjAyMi8uL3NyYy9zZXJ2ZXIvcGF0aHMuanMiLCJ3ZWJwYWNrOi8vd2ViLXNwZWVkLWhhY2thdGhvbi0yMDIyLy4vc3JjL3NlcnZlci9yb3V0ZXMvYXBpLmpzIiwid2VicGFjazovL3dlYi1zcGVlZC1oYWNrYXRob24tMjAyMi8uL3NyYy9zZXJ2ZXIvcm91dGVzL3NwYS5qcyIsIndlYnBhY2s6Ly93ZWItc3BlZWQtaGFja2F0aG9uLTIwMjIvLi9zcmMvc2VydmVyL3R5cGVvcm0vY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWItc3BlZWQtaGFja2F0aG9uLTIwMjIvLi9zcmMvc2VydmVyL3R5cGVvcm0vaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly93ZWItc3BlZWQtaGFja2F0aG9uLTIwMjIvZXh0ZXJuYWwgY29tbW9uanMgXCJAZmFzdGlmeS9jb21wcmVzc1wiIiwid2VicGFjazovL3dlYi1zcGVlZC1oYWNrYXRob24tMjAyMi9leHRlcm5hbCBjb21tb25qcyBcImZhc3RpZnlcIiIsIndlYnBhY2s6Ly93ZWItc3BlZWQtaGFja2F0aG9uLTIwMjIvZXh0ZXJuYWwgY29tbW9uanMgXCJmYXN0aWZ5LXNlbnNpYmxlXCIiLCJ3ZWJwYWNrOi8vd2ViLXNwZWVkLWhhY2thdGhvbi0yMDIyL2V4dGVybmFsIGNvbW1vbmpzIFwiZmFzdGlmeS1zdGF0aWNcIiIsIndlYnBhY2s6Ly93ZWItc3BlZWQtaGFja2F0aG9uLTIwMjIvZXh0ZXJuYWwgY29tbW9uanMgXCJtb21lbnQtdGltZXpvbmVcIiIsIndlYnBhY2s6Ly93ZWItc3BlZWQtaGFja2F0aG9uLTIwMjIvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIiIsIndlYnBhY2s6Ly93ZWItc3BlZWQtaGFja2F0aG9uLTIwMjIvZXh0ZXJuYWwgY29tbW9uanMgXCJ0eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vd2ViLXNwZWVkLWhhY2thdGhvbi0yMDIyL2V4dGVybmFsIGNvbW1vbmpzIFwiemVuZ2luLWNvZGVcIiIsIndlYnBhY2s6Ly93ZWItc3BlZWQtaGFja2F0aG9uLTIwMjIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzL3Byb21pc2VzXCIiLCJ3ZWJwYWNrOi8vd2ViLXNwZWVkLWhhY2thdGhvbi0yMDIyL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vd2ViLXNwZWVkLWhhY2thdGhvbi0yMDIyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYi1zcGVlZC1oYWNrYXRob24tMjAyMi8uL3NyYy9zZXJ2ZXIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEB0eXBlIHsocGF0aDogc3RyaW5nKSA9PiBzdHJpbmd9ICovXHJcbmV4cG9ydCBjb25zdCBhc3NldHMgPSAocGF0aCkgPT4gYC9hc3NldHMvJHtwYXRoLnJlcGxhY2UoL15cXC8vLCBcIlwiKX1gO1xyXG4iLCJpbXBvcnQgeyBFbnRpdHlTY2hlbWEgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuY2xhc3MgQmV0dGluZ1RpY2tldCB7XHJcbiAgc3RhdGljIHNjaGVtYSA9IG5ldyBFbnRpdHlTY2hlbWEoe1xyXG4gICAgY29sdW1uczoge1xyXG4gICAgICBjcmVhdGVkQXQ6IHtcclxuICAgICAgICBjcmVhdGVEYXRlOiB0cnVlLFxyXG4gICAgICAgIG51bGxhYmxlOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiBcImRhdGV0aW1lXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGlkOiB7XHJcbiAgICAgICAgZ2VuZXJhdGVkOiBcInV1aWRcIixcclxuICAgICAgICBwcmltYXJ5OiB0cnVlLFxyXG4gICAgICAgIHR5cGU6IFwidXVpZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBrZXk6IHtcclxuICAgICAgICBudWxsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogXCJzaW1wbGUtanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlOiB7XHJcbiAgICAgICAgbnVsbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwidmFyY2hhclwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hbWU6IFwiQmV0dGluZ1RpY2tldFwiLFxyXG4gICAgb3JkZXJCeToge1xyXG4gICAgICBjcmVhdGVkQXQ6IFwiQVNDXCIsXHJcbiAgICB9LFxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgIHJhY2U6IHtcclxuICAgICAgICB0YXJnZXQ6IFwiUmFjZVwiLFxyXG4gICAgICAgIHR5cGU6IFwibWFueS10by1vbmVcIixcclxuICAgICAgfSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIHRhcmdldDogXCJVc2VyXCIsXHJcbiAgICAgICAgdHlwZTogXCJtYW55LXRvLW9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRhcmdldDogQmV0dGluZ1RpY2tldCxcclxuICB9KTtcclxuXHJcbiAgLyoqIEBwYXJhbSB7UGFydGlhbDxCZXR0aW5nVGlja2V0Pn0gW3BheWxvYWRdICovXHJcbiAgY29uc3RydWN0b3IocGF5bG9hZCA9IHt9KSB7XHJcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cclxuICAgIHRoaXMuaWQgPSBwYXlsb2FkLmlkO1xyXG4gICAgLyoqIEB0eXBlIHtCZXR0aW5nVHlwZX0gKi9cclxuICAgIHRoaXMudHlwZSA9IHBheWxvYWQudHlwZTtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyW119ICovXHJcbiAgICB0aGlzLmtleSA9IHBheWxvYWQua2V5O1xyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXHJcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IHBheWxvYWQuY3JlYXRlZEF0O1xyXG4gICAgLyoqIEB0eXBlIHtpbXBvcnQoJy4vVXNlcicpLlVzZXJ9ICovXHJcbiAgICB0aGlzLnVzZXIgPSBwYXlsb2FkLnVzZXI7XHJcbiAgICAvKiogQHR5cGUge2ltcG9ydCgnLi9SYWNlJykuUmFjZX0gKi9cclxuICAgIHRoaXMucmFjZSA9IHBheWxvYWQucmFjZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJldHRpbmdUaWNrZXQgfTtcclxuIiwiaW1wb3J0IHsgRW50aXR5U2NoZW1hIH0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcbmNsYXNzIE9kZHNJdGVtIHtcclxuICBzdGF0aWMgc2NoZW1hID0gbmV3IEVudGl0eVNjaGVtYSh7XHJcbiAgICBjb2x1bW5zOiB7XHJcbiAgICAgIGlkOiB7XHJcbiAgICAgICAgZ2VuZXJhdGVkOiBcInV1aWRcIixcclxuICAgICAgICBwcmltYXJ5OiB0cnVlLFxyXG4gICAgICAgIHR5cGU6IFwidXVpZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBrZXk6IHtcclxuICAgICAgICBudWxsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogXCJzaW1wbGUtanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBvZGRzOiB7XHJcbiAgICAgICAgbnVsbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwiaW50XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGU6IHtcclxuICAgICAgICBudWxsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogXCJ2YXJjaGFyXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbmFtZTogXCJPZGRzSXRlbVwiLFxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgIHJhY2U6IHtcclxuICAgICAgICBpbnZlcnNlU2lkZTogXCJ0cmlmZWN0YU9kZHNcIixcclxuICAgICAgICB0YXJnZXQ6IFwiUmFjZVwiLFxyXG4gICAgICAgIHR5cGU6IFwibWFueS10by1vbmVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0YXJnZXQ6IE9kZHNJdGVtLFxyXG4gIH0pO1xyXG5cclxuICAvKiogQHBhcmFtIHtQYXJ0aWFsPE9kZHNJdGVtPn0gW3BheWxvYWRdICovXHJcbiAgY29uc3RydWN0b3IocGF5bG9hZCA9IHt9KSB7XHJcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cclxuICAgIHRoaXMuaWQgPSBwYXlsb2FkLmlkO1xyXG4gICAgLyoqIEB0eXBlIHtCZXR0aW5nVHlwZX0gKi9cclxuICAgIHRoaXMudHlwZSA9IHBheWxvYWQudHlwZTtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyW119ICovXHJcbiAgICB0aGlzLmtleSA9IHBheWxvYWQua2V5O1xyXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXHJcbiAgICB0aGlzLm9kZHMgPSBwYXlsb2FkLm9kZHM7XHJcbiAgICAvKiogQHR5cGUge2ltcG9ydCgnLi9SYWNlJykuUmFjZX0gKi9cclxuICAgIHRoaXMucmFjZSA9IHBheWxvYWQucmFjZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE9kZHNJdGVtIH07XHJcbiIsImltcG9ydCB7IEVudGl0eVNjaGVtYSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIHN0YXRpYyBzY2hlbWEgPSBuZXcgRW50aXR5U2NoZW1hKHtcclxuICAgIGNvbHVtbnM6IHtcclxuICAgICAgaWQ6IHtcclxuICAgICAgICBnZW5lcmF0ZWQ6IFwidXVpZFwiLFxyXG4gICAgICAgIHByaW1hcnk6IHRydWUsXHJcbiAgICAgICAgdHlwZTogXCJ1dWlkXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgbnVsbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgbnVsbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwidmFyY2hhclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaG9ydE5hbWU6IHtcclxuICAgICAgICBudWxsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogXCJ2YXJjaGFyXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbmFtZTogXCJQbGF5ZXJcIixcclxuICAgIHRhcmdldDogUGxheWVyLFxyXG4gIH0pO1xyXG5cclxuICAvKiogQHBhcmFtIHtQYXJ0aWFsPFBsYXllcj59IFtwYXlsb2FkXSAqL1xyXG4gIGNvbnN0cnVjdG9yKHBheWxvYWQgPSB7fSkge1xyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXHJcbiAgICB0aGlzLmlkID0gcGF5bG9hZC5pZDtcclxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xyXG4gICAgdGhpcy5uYW1lID0gcGF5bG9hZC5uYW1lO1xyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXHJcbiAgICB0aGlzLnNob3J0TmFtZSA9IHBheWxvYWQuc2hvcnROYW1lO1xyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXHJcbiAgICB0aGlzLmltYWdlID0gcGF5bG9hZC5pbWFnZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllciB9O1xyXG4iLCJpbXBvcnQgeyBFbnRpdHlTY2hlbWEgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuY2xhc3MgUmFjZSB7XHJcbiAgc3RhdGljIHNjaGVtYSA9IG5ldyBFbnRpdHlTY2hlbWEoe1xyXG4gICAgY29sdW1uczoge1xyXG4gICAgICBjbG9zZUF0OiB7XHJcbiAgICAgICAgbnVsbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcclxuICAgICAgfSxcclxuICAgICAgaWQ6IHtcclxuICAgICAgICBnZW5lcmF0ZWQ6IFwidXVpZFwiLFxyXG4gICAgICAgIHByaW1hcnk6IHRydWUsXHJcbiAgICAgICAgdHlwZTogXCJ1dWlkXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgbnVsbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwidmFyY2hhclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgbnVsbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwidmFyY2hhclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGFydEF0OiB7XHJcbiAgICAgICAgbnVsbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbmRpY2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5zOiBbXCJzdGFydEF0XCJdLFxyXG4gICAgICAgIHVuaXF1ZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb2x1bW5zOiBbXCJjbG9zZUF0XCJdLFxyXG4gICAgICAgIHVuaXF1ZTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgbmFtZTogXCJSYWNlXCIsXHJcbiAgICBvcmRlckJ5OiB7XHJcbiAgICAgIHN0YXJ0QXQ6IFwiQVNDXCIsXHJcbiAgICB9LFxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgIGVudHJpZXM6IHtcclxuICAgICAgICBpbnZlcnNlU2lkZTogXCJyYWNlXCIsXHJcbiAgICAgICAgdGFyZ2V0OiBcIlJhY2VFbnRyeVwiLFxyXG4gICAgICAgIHR5cGU6IFwib25lLXRvLW1hbnlcIixcclxuICAgICAgfSxcclxuICAgICAgdHJpZmVjdGFPZGRzOiB7XHJcbiAgICAgICAgaW52ZXJzZVNpZGU6IFwicmFjZVwiLFxyXG4gICAgICAgIHRhcmdldDogXCJPZGRzSXRlbVwiLFxyXG4gICAgICAgIHR5cGU6IFwib25lLXRvLW1hbnlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0YXJnZXQ6IFJhY2UsXHJcbiAgfSk7XHJcblxyXG4gIC8qKiBAcGFyYW0ge1BhcnRpYWw8UmFjZT59IFtwYXlsb2FkXSAqL1xyXG4gIGNvbnN0cnVjdG9yKHBheWxvYWQgPSB7fSkge1xyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXHJcbiAgICB0aGlzLmlkID0gcGF5bG9hZC5pZDtcclxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xyXG4gICAgdGhpcy5uYW1lID0gcGF5bG9hZC5uYW1lO1xyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXHJcbiAgICB0aGlzLmltYWdlID0gcGF5bG9hZC5pbWFnZTtcclxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xyXG4gICAgdGhpcy5zdGFydEF0ID0gcGF5bG9hZC5zdGFydEF0O1xyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXHJcbiAgICB0aGlzLmNsb3NlQXQgPSBwYXlsb2FkLmNsb3NlQXQ7XHJcbiAgICAvKiogQHR5cGUge2ltcG9ydCgnLi9SYWNlRW50cnknKS5SYWNlRW50cnlbXX0gKi9cclxuICAgIHRoaXMuZW50cmllcyA9IHBheWxvYWQuZW50cmllcztcclxuICAgIC8qKiBAdHlwZSB7aW1wb3J0KCcuL09kZHNJdGVtJykuT2Rkc0l0ZW1bXX0gKi9cclxuICAgIHRoaXMudHJpZmVjdGFPZGRzID0gcGF5bG9hZC50cmlmZWN0YU9kZHM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBSYWNlIH07XHJcbiIsImltcG9ydCB7IEVudGl0eVNjaGVtYSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG5jbGFzcyBSYWNlRW50cnkge1xyXG4gIHN0YXRpYyBzY2hlbWEgPSBuZXcgRW50aXR5U2NoZW1hKHtcclxuICAgIGNvbHVtbnM6IHtcclxuICAgICAgY29tbWVudDoge1xyXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogXCJ2YXJjaGFyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZpcnN0OiB7XHJcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiBcImludGVnZXJcIixcclxuICAgICAgfSxcclxuICAgICAgZmlyc3RSYXRlOiB7XHJcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiBcImZsb2F0XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGlkOiB7XHJcbiAgICAgICAgZ2VuZXJhdGVkOiBcInV1aWRcIixcclxuICAgICAgICBwcmltYXJ5OiB0cnVlLFxyXG4gICAgICAgIHR5cGU6IFwidXVpZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBudW1iZXI6IHtcclxuICAgICAgICBudWxsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogXCJpbnRcIixcclxuICAgICAgfSxcclxuICAgICAgb3RoZXJzOiB7XHJcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiBcImludGVnZXJcIixcclxuICAgICAgfSxcclxuICAgICAgcGFwZXJXaW46IHtcclxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwiaW50ZWdlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwcmVkaWN0aW9uTWFyazoge1xyXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogXCJ2YXJjaGFyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvY2tXaW46IHtcclxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwiaW50ZWdlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzY2lzc29yc1dpbjoge1xyXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogXCJpbnRlZ2VyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZDoge1xyXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogXCJpbnRlZ2VyXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXJkOiB7XHJcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiBcImludGVnZXJcIixcclxuICAgICAgfSxcclxuICAgICAgdGhpcmRSYXRlOiB7XHJcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiBcImZsb2F0XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbmFtZTogXCJSYWNlRW50cnlcIixcclxuICAgIG9yZGVyQnk6IHtcclxuICAgICAgbnVtYmVyOiBcIkFTQ1wiLFxyXG4gICAgfSxcclxuICAgIHJlbGF0aW9uczoge1xyXG4gICAgICBwbGF5ZXI6IHtcclxuICAgICAgICB0YXJnZXQ6IFwiUGxheWVyXCIsXHJcbiAgICAgICAgdHlwZTogXCJtYW55LXRvLW9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICByYWNlOiB7XHJcbiAgICAgICAgaW52ZXJzZVNpZGU6IFwiZW50cmllc1wiLFxyXG4gICAgICAgIHRhcmdldDogXCJSYWNlXCIsXHJcbiAgICAgICAgdHlwZTogXCJtYW55LXRvLW9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRhcmdldDogUmFjZUVudHJ5LFxyXG4gIH0pO1xyXG5cclxuICAvKiogQHBhcmFtIHtQYXJ0aWFsPFJhY2VFbnRyeT59IFtwYXlsb2FkXSAqL1xyXG4gIGNvbnN0cnVjdG9yKHBheWxvYWQgPSB7fSkge1xyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXHJcbiAgICB0aGlzLmlkID0gcGF5bG9hZC5pZDtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xyXG4gICAgdGhpcy5udW1iZXIgPSBwYXlsb2FkLm51bWJlcjtcclxuICAgIC8qKiBAdHlwZSB7aW1wb3J0KCcuL1BsYXllcicpLlBsYXllcn0gKi9cclxuICAgIHRoaXMucGxheWVyID0gcGF5bG9hZC5wbGF5ZXI7XHJcbiAgICAvKiogQHR5cGUge2ltcG9ydCgnLi9SYWNlJykuUmFjZX0gKi9cclxuICAgIHRoaXMucmFjZSA9IHBheWxvYWQucmFjZTtcclxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xyXG4gICAgdGhpcy5wcmVkaWN0aW9uTWFyayA9IHBheWxvYWQucHJlZGljdGlvbk1hcms7XHJcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cclxuICAgIHRoaXMuZmlyc3QgPSBwYXlsb2FkLmZpcnN0O1xyXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXHJcbiAgICB0aGlzLnNlY29uZCA9IHBheWxvYWQuc2Vjb25kO1xyXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXHJcbiAgICB0aGlzLnRoaXJkID0gcGF5bG9hZC50aGlyZDtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xyXG4gICAgdGhpcy5vdGhlcnMgPSBwYXlsb2FkLm90aGVycztcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xyXG4gICAgdGhpcy5yb2NrV2luID0gcGF5bG9hZC5yb2NrV2luO1xyXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXHJcbiAgICB0aGlzLnNjaXNzb3JzV2luID0gcGF5bG9hZC5zY2lzc29yc1dpbjtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xyXG4gICAgdGhpcy5wYXBlcldpbiA9IHBheWxvYWQucGFwZXJXaW47XHJcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cclxuICAgIHRoaXMuZmlyc3RSYXRlID0gcGF5bG9hZC5maXJzdFJhdGU7XHJcbiAgICAvKiogQHR5cGUge251bWJlcn0gKi9cclxuICAgIHRoaXMudGhpcmRSYXRlID0gcGF5bG9hZC50aGlyZFJhdGU7XHJcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cclxuICAgIHRoaXMuY29tbWVudCA9IHBheWxvYWQuY29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFJhY2VFbnRyeSB9O1xyXG4iLCJpbXBvcnQgeyBFbnRpdHlTY2hlbWEgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuY2xhc3MgVXNlciB7XHJcbiAgc3RhdGljIHNjaGVtYSA9IG5ldyBFbnRpdHlTY2hlbWEoe1xyXG4gICAgY29sdW1uczoge1xyXG4gICAgICBiYWxhbmNlOiB7XHJcbiAgICAgICAgZGVmYXVsdDogMCxcclxuICAgICAgICBudWxsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogXCJpbnRcIixcclxuICAgICAgfSxcclxuICAgICAgaWQ6IHtcclxuICAgICAgICBnZW5lcmF0ZWQ6IFwidXVpZFwiLFxyXG4gICAgICAgIHByaW1hcnk6IHRydWUsXHJcbiAgICAgICAgdHlwZTogXCJ1dWlkXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBheW9mZjoge1xyXG4gICAgICAgIGRlZmF1bHQ6IDAsXHJcbiAgICAgICAgbnVsbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6IFwiaW50XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbmFtZTogXCJVc2VyXCIsXHJcbiAgICB0YXJnZXQ6IFVzZXIsXHJcbiAgfSk7XHJcblxyXG4gIC8qKiBAcGFyYW0ge1BhcnRpYWw8VXNlcj59IFtwYXlsb2FkXSAqL1xyXG4gIGNvbnN0cnVjdG9yKHBheWxvYWQgPSB7fSkge1xyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXHJcbiAgICB0aGlzLmlkID0gcGF5bG9hZC5pZDtcclxuICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xyXG4gICAgdGhpcy5iYWxhbmNlID0gcGF5bG9hZC5iYWxhbmNlO1xyXG4gICAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXHJcbiAgICB0aGlzLnBheW9mZiA9IHBheWxvYWQucGF5b2ZmO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVXNlciB9O1xyXG4iLCJpbXBvcnQgeyBCZXR0aW5nVGlja2V0IH0gZnJvbSBcIi4vQmV0dGluZ1RpY2tldC5qc1wiO1xyXG5pbXBvcnQgeyBPZGRzSXRlbSB9IGZyb20gXCIuL09kZHNJdGVtLmpzXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllci5qc1wiO1xyXG5pbXBvcnQgeyBSYWNlIH0gZnJvbSBcIi4vUmFjZS5qc1wiO1xyXG5pbXBvcnQgeyBSYWNlRW50cnkgfSBmcm9tIFwiLi9SYWNlRW50cnkuanNcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL1VzZXIuanNcIjtcclxuXHJcbmV4cG9ydCB7IEJldHRpbmdUaWNrZXQsIE9kZHNJdGVtLCBQbGF5ZXIsIFJhY2UsIFJhY2VFbnRyeSwgVXNlciB9O1xyXG4iLCJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuY29uc3QgSU5JVElBTF9EQVRBQkFTRV9QQVRIID0gcGF0aC5yZXNvbHZlKFxyXG4gIHByb2Nlc3MuY3dkKCksXHJcbiAgXCIuL2RhdGFiYXNlL3NlZWRzLnNxbGl0ZVwiLFxyXG4pO1xyXG5cclxuY29uc3QgREFUQUJBU0VfUEFUSCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcIi4vZGF0YWJhc2UvZGF0YWJhc2Uuc3FsaXRlXCIpO1xyXG5cclxuZXhwb3J0IHsgREFUQUJBU0VfUEFUSCwgSU5JVElBTF9EQVRBQkFTRV9QQVRIIH07XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudC10aW1lem9uZVwiO1xyXG5pbXBvcnQgeyBCZXR3ZWVuLCBMZXNzVGhhbk9yRXF1YWwsIE1vcmVUaGFuT3JFcXVhbCB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCB6ZW5naW5Db2RlIGZyb20gXCJ6ZW5naW4tY29kZVwiO1xyXG5cclxuaW1wb3J0IHsgYXNzZXRzIH0gZnJvbSBcIi4uLy4uL2NsaWVudC9mb3VuZGF0aW9uL3V0aWxzL1VybFV0aWxzLmpzXCI7XHJcbmltcG9ydCB7IEJldHRpbmdUaWNrZXQsIFJhY2UsIFVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWwvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCIuLi90eXBlb3JtL2Nvbm5lY3Rpb24uanNcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gXCIuLi90eXBlb3JtL2luaXRpYWxpemUuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7aW1wb3J0KCdmYXN0aWZ5JykuRmFzdGlmeVBsdWdpbkNhbGxiYWNrfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFwaVJvdXRlID0gYXN5bmMgKGZhc3RpZnkpID0+IHtcclxuICBmYXN0aWZ5LmdldChcIi91c2Vycy9tZVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlcy5oZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwibm8tY2FjaGUsIG5vLXN0b3JlLCBuby10cmFuc2Zvcm1cIik7XHJcbiAgICBjb25zdCByZXBvID0gKGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oKSkuZ2V0UmVwb3NpdG9yeShVc2VyKTtcclxuXHJcbiAgICBpZiAocmVxLnVzZXIgIT0gbnVsbCkge1xyXG4gICAgICByZXMuc2VuZChyZXEudXNlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVwby5zYXZlKG5ldyBVc2VyKCkpO1xyXG4gICAgICByZXMuc2VuZCh1c2VyKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZmFzdGlmeS5wb3N0KFwiL3VzZXJzL21lL2NoYXJnZVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlcy5oZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwibm8tY2FjaGUsIG5vLXN0b3JlLCBuby10cmFuc2Zvcm1cIik7XHJcbiAgICBpZiAocmVxLnVzZXIgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBmYXN0aWZ5Lmh0dHBFcnJvcnMudW5hdXRob3JpemVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBhbW91bnQgfSA9IHJlcS5ib2R5O1xyXG4gICAgaWYgKHR5cGVvZiBhbW91bnQgIT09IFwibnVtYmVyXCIgfHwgYW1vdW50IDw9IDApIHtcclxuICAgICAgdGhyb3cgZmFzdGlmeS5odHRwRXJyb3JzLmJhZFJlcXVlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXBvID0gKGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oKSkuZ2V0UmVwb3NpdG9yeShVc2VyKTtcclxuXHJcbiAgICByZXEudXNlci5iYWxhbmNlICs9IGFtb3VudDtcclxuICAgIGF3YWl0IHJlcG8uc2F2ZShyZXEudXNlcik7XHJcbiAgICByZXMuc3RhdHVzKDIwNCkuc2VuZCgpO1xyXG4gIH0pO1xyXG5cclxuICBmYXN0aWZ5LmdldChcIi9oZXJvXCIsIGFzeW5jIChfcmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHVybCA9IGFzc2V0cyhcIi9pbWFnZXMvaGVyby53ZWJwXCIpO1xyXG4gICAgY29uc3QgaGFzaCA9IE1hdGgucmFuZG9tKCkudG9GaXhlZCgxMCkuc3Vic3RyaW5nKDIpO1xyXG5cclxuICAgIHJlcy5zZW5kKHsgaGFzaCwgdXJsIH0pO1xyXG4gIH0pO1xyXG5cclxuICBmYXN0aWZ5LmdldChcIi9yYWNlc1wiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHNpbmNlID1cclxuICAgICAgcmVxLnF1ZXJ5LnNpbmNlICE9IG51bGwgPyBtb21lbnQudW5peChyZXEucXVlcnkuc2luY2UpIDogdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgdW50aWwgPVxyXG4gICAgICByZXEucXVlcnkudW50aWwgIT0gbnVsbCA/IG1vbWVudC51bml4KHJlcS5xdWVyeS51bnRpbCkgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKHNpbmNlICE9IG51bGwgJiYgIXNpbmNlLmlzVmFsaWQoKSkge1xyXG4gICAgICB0aHJvdyBmYXN0aWZ5Lmh0dHBFcnJvcnMuYmFkUmVxdWVzdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHVudGlsICE9IG51bGwgJiYgIXVudGlsLmlzVmFsaWQoKSkge1xyXG4gICAgICB0aHJvdyBmYXN0aWZ5Lmh0dHBFcnJvcnMuYmFkUmVxdWVzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcG8gPSAoYXdhaXQgY3JlYXRlQ29ubmVjdGlvbigpKS5nZXRSZXBvc2l0b3J5KFJhY2UpO1xyXG5cclxuICAgIGNvbnN0IHdoZXJlID0ge307XHJcbiAgICBpZiAoc2luY2UgIT0gbnVsbCAmJiB1bnRpbCAhPSBudWxsKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24od2hlcmUsIHtcclxuICAgICAgICBzdGFydEF0OiBCZXR3ZWVuKFxyXG4gICAgICAgICAgc2luY2UudXRjKCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKSxcclxuICAgICAgICAgIHVudGlsLnV0YygpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIiksXHJcbiAgICAgICAgKSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHNpbmNlICE9IG51bGwpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih3aGVyZSwge1xyXG4gICAgICAgIHN0YXJ0QXQ6IE1vcmVUaGFuT3JFcXVhbChzaW5jZS51dGMoKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpKSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHVudGlsICE9IG51bGwpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih3aGVyZSwge1xyXG4gICAgICAgIHN0YXJ0QXQ6IExlc3NUaGFuT3JFcXVhbChzaW5jZS51dGMoKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJhY2VzID0gYXdhaXQgcmVwby5maW5kKHtcclxuICAgICAgd2hlcmUsXHJcbiAgICB9KTtcclxuXHJcbiAgICByYWNlcyA9IHJhY2VzLm1hcCgocmFjZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnJhY2UsXHJcbiAgICAgICAgaW1hZ2U6IHJhY2UuaW1hZ2UucmVwbGFjZShcIi5qcGdcIiwgXCJfcy53ZWJwXCIpLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzLnNlbmQoeyByYWNlcyB9KTtcclxuICB9KTtcclxuXHJcbiAgZmFzdGlmeS5nZXQoXCIvcmFjZXMvOnJhY2VJZFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHJlcG8gPSAoYXdhaXQgY3JlYXRlQ29ubmVjdGlvbigpKS5nZXRSZXBvc2l0b3J5KFJhY2UpO1xyXG5cclxuICAgIGNvbnN0IHJhY2UgPSBhd2FpdCByZXBvLmZpbmRPbmUocmVxLnBhcmFtcy5yYWNlSWQsIHtcclxuICAgICAgcmVsYXRpb25zOiBbXCJlbnRyaWVzXCIsIFwiZW50cmllcy5wbGF5ZXJcIiwgXCJ0cmlmZWN0YU9kZHNcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmFjZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IGZhc3RpZnkuaHR0cEVycm9ycy5ub3RGb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhY2UuaW1hZ2UgPSByYWNlLmltYWdlLnJlcGxhY2UoXCIuanBnXCIsIFwiLndlYnBcIik7XHJcblxyXG4gICAgcmFjZS5lbnRyaWVzID0gcmFjZS5lbnRyaWVzLm1hcCgoZW50cnkpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5lbnRyeSxcclxuICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgIC4uLmVudHJ5LnBsYXllcixcclxuICAgICAgICAgIGltYWdlOiBlbnRyeS5wbGF5ZXIuaW1hZ2UucmVwbGFjZShcIi5qcGdcIiwgXCIud2VicFwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzLnNlbmQocmFjZSk7XHJcbiAgfSk7XHJcblxyXG4gIGZhc3RpZnkuZ2V0KFwiL3JhY2VzLzpyYWNlSWQvYmV0dGluZy10aWNrZXRzXCIsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzLmhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJwcml2YXRlLCBtYXgtYWdlPTBcIik7XHJcbiAgICBpZiAocmVxLnVzZXIgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBmYXN0aWZ5Lmh0dHBFcnJvcnMudW5hdXRob3JpemVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVwbyA9IChhd2FpdCBjcmVhdGVDb25uZWN0aW9uKCkpLmdldFJlcG9zaXRvcnkoQmV0dGluZ1RpY2tldCk7XHJcbiAgICBjb25zdCBiZXR0aW5nVGlja2V0cyA9IGF3YWl0IHJlcG8uZmluZCh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgcmFjZToge1xyXG4gICAgICAgICAgaWQ6IHJlcS5wYXJhbXMucmFjZUlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgaWQ6IHJlcS51c2VyLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXMuc2VuZCh7XHJcbiAgICAgIGJldHRpbmdUaWNrZXRzLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGZhc3RpZnkucG9zdChcIi9yYWNlcy86cmFjZUlkL2JldHRpbmctdGlja2V0c1wiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHJlcy5oZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwicHJpdmF0ZSwgbWF4LWFnZT0wXCIpO1xyXG4gICAgaWYgKHJlcS51c2VyID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgZmFzdGlmeS5odHRwRXJyb3JzLnVuYXV0aG9yaXplZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXEudXNlci5iYWxhbmNlIDwgMTAwKSB7XHJcbiAgICAgIHRocm93IGZhc3RpZnkuaHR0cEVycm9ycy5wcmVjb25kaXRpb25GYWlsZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHJlcS5ib2R5LnR5cGUgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgdGhyb3cgZmFzdGlmeS5odHRwRXJyb3JzLmJhZFJlcXVlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICFBcnJheS5pc0FycmF5KHJlcS5ib2R5LmtleSkgfHxcclxuICAgICAgcmVxLmJvZHkua2V5LnNvbWUoKG4pID0+IHR5cGVvZiBuICE9PSBcIm51bWJlclwiKVxyXG4gICAgKSB7XHJcbiAgICAgIHRocm93IGZhc3RpZnkuaHR0cEVycm9ycy5iYWRSZXF1ZXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmV0dGluZ1RpY2tldFJlcG8gPSAoYXdhaXQgY3JlYXRlQ29ubmVjdGlvbigpKS5nZXRSZXBvc2l0b3J5KFxyXG4gICAgICBCZXR0aW5nVGlja2V0LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGJldHRpbmdUaWNrZXQgPSBhd2FpdCBiZXR0aW5nVGlja2V0UmVwby5zYXZlKFxyXG4gICAgICBuZXcgQmV0dGluZ1RpY2tldCh7XHJcbiAgICAgICAga2V5OiByZXEuYm9keS5rZXksXHJcbiAgICAgICAgcmFjZToge1xyXG4gICAgICAgICAgaWQ6IHJlcS5wYXJhbXMucmFjZUlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZTogcmVxLmJvZHkudHlwZSxcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICBpZDogcmVxLnVzZXIuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVzZXJSZXBvID0gKGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oKSkuZ2V0UmVwb3NpdG9yeShVc2VyKTtcclxuICAgIHJlcS51c2VyLmJhbGFuY2UgLT0gMTAwO1xyXG4gICAgYXdhaXQgdXNlclJlcG8uc2F2ZShyZXEudXNlcik7XHJcblxyXG4gICAgcmVzLnNlbmQoYmV0dGluZ1RpY2tldCk7XHJcbiAgfSk7XHJcblxyXG4gIGZhc3RpZnkucG9zdChcIi9pbml0aWFsaXplXCIsIGFzeW5jIChfcmVxLCByZXMpID0+IHtcclxuICAgIGF3YWl0IGluaXRpYWxpemUoKTtcclxuICAgIHJlcy5zdGF0dXMoMjA0KS5zZW5kKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZhc3RpZnkuZ2V0KFwiL2JhbmtcIiwgKF9yZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBPYmplY3QuZW50cmllcyh6ZW5naW5Db2RlKS5tYXAoKFtfLCB2YWx1ZV0pID0+IHtcclxuICAgICAgY29uc3QgYnJhbmNoZXMgPSBPYmplY3QuZW50cmllcyh2YWx1ZS5icmFuY2hlcykubWFwKChbXywgdl0pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY29kZTogdi5jb2RlLFxyXG4gICAgICAgICAgbmFtZTogdi5uYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBicmFuY2hlczoge1xyXG4gICAgICAgICAgLi4uYnJhbmNoZXMucmVkdWNlKChhY2MsIG9iaikgPT4ge1xyXG4gICAgICAgICAgICBhY2Nbb2JqLmNvZGVdID0geyBuYW1lOiBvYmoubmFtZSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgfSwge30pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29kZTogdmFsdWUuY29kZSxcclxuICAgICAgICBuYW1lOiB2YWx1ZS5uYW1lLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzLnNlbmQoXHJcbiAgICAgIGl0ZW1zLnJlZHVjZSgoYWNjLCBvYmopID0+IHtcclxuICAgICAgICBhY2Nbb2JqLmNvZGVdID0geyBicmFuY2hlczogb2JqLmJyYW5jaGVzLCBuYW1lOiBvYmoubmFtZSB9O1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgIH0sIHt9KSxcclxuICAgICk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5cclxuaW1wb3J0IGZhc3RpZnlTdGF0aWMgZnJvbSBcImZhc3RpZnktc3RhdGljXCI7XHJcblxyXG4vKipcclxuICogQHR5cGUge2ltcG9ydCgnZmFzdGlmeScpLkZhc3RpZnlQbHVnaW5DYWxsYmFja31cclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGFSb3V0ZSA9IGFzeW5jIChmYXN0aWZ5KSA9PiB7XHJcbiAgZmFzdGlmeS5yZWdpc3RlcihmYXN0aWZ5U3RhdGljLCB7XHJcbiAgICByb290OiBqb2luKF9fZGlybmFtZSwgXCJwdWJsaWNcIiksXHJcbiAgICB3aWxkY2FyZDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGZhc3RpZnkuZ2V0KFwiL2Zhdmljb24uaWNvXCIsICgpID0+IHtcclxuICAgIHRocm93IGZhc3RpZnkuaHR0cEVycm9ycy5ub3RGb3VuZCgpO1xyXG4gIH0pO1xyXG5cclxuICBmYXN0aWZ5LmdldChcIipcIiwgKF9yZXEsIHJlcGx5KSA9PiB7XHJcbiAgICByZXR1cm4gcmVwbHkuc2VuZEZpbGUoXCJpbmRleC5odG1sXCIsIGpvaW4oX19kaXJuYW1lLCBcInB1YmxpY1wiKSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIHR5cGVvcm0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQmV0dGluZ1RpY2tldCxcclxuICBPZGRzSXRlbSxcclxuICBQbGF5ZXIsXHJcbiAgUmFjZSxcclxuICBSYWNlRW50cnksXHJcbiAgVXNlcixcclxufSBmcm9tIFwiLi4vLi4vbW9kZWwvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgREFUQUJBU0VfUEFUSCB9IGZyb20gXCIuLi9wYXRocy5qc1wiO1xyXG5cclxuY29uc3QgY29ubmVjdGlvblByb21pc2UgPSB0eXBlb3JtLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gIGRhdGFiYXNlOiBEQVRBQkFTRV9QQVRILFxyXG4gIGVudGl0aWVzOiBbXHJcbiAgICBVc2VyLnNjaGVtYSxcclxuICAgIE9kZHNJdGVtLnNjaGVtYSxcclxuICAgIFBsYXllci5zY2hlbWEsXHJcbiAgICBSYWNlRW50cnkuc2NoZW1hLFxyXG4gICAgUmFjZS5zY2hlbWEsXHJcbiAgICBCZXR0aW5nVGlja2V0LnNjaGVtYSxcclxuICBdLFxyXG4gIHN5bmNocm9uaXplOiBmYWxzZSxcclxuICB0eXBlOiBcInNxbGl0ZVwiLFxyXG59KTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3Rpb24oKSB7XHJcbiAgcmV0dXJuIGF3YWl0IGNvbm5lY3Rpb25Qcm9taXNlO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH07XHJcbiIsImltcG9ydCBmcyBmcm9tIFwiZnMvcHJvbWlzZXNcIjtcclxuXHJcbmltcG9ydCB7IERBVEFCQVNFX1BBVEgsIElOSVRJQUxfREFUQUJBU0VfUEFUSCB9IGZyb20gXCIuLi9wYXRocy5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgYXdhaXQgZnMuY29weUZpbGUoSU5JVElBTF9EQVRBQkFTRV9QQVRILCBEQVRBQkFTRV9QQVRIKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmFzdGlmeS9jb21wcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZhc3RpZnktc2Vuc2libGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdGlmeS1zdGF0aWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50LXRpbWV6b25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInplbmdpbi1jb2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzL3Byb21pc2VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xyXG5pbXBvcnQgZmFzdGlmeSBmcm9tIFwiZmFzdGlmeVwiO1xyXG5pbXBvcnQgZmFzdGlmeVNlbnNpYmxlIGZyb20gXCJmYXN0aWZ5LXNlbnNpYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVsL2luZGV4LmpzXCI7XHJcblxyXG5pbXBvcnQgeyBhcGlSb3V0ZSB9IGZyb20gXCIuL3JvdXRlcy9hcGkuanNcIjtcclxuaW1wb3J0IHsgc3BhUm91dGUgfSBmcm9tIFwiLi9yb3V0ZXMvc3BhLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tIFwiLi90eXBlb3JtL2Nvbm5lY3Rpb24uanNcIjtcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gXCIuL3R5cGVvcm0vaW5pdGlhbGl6ZS5qc1wiO1xyXG5cclxuLy8gY29uc3QgSVNfUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuY29uc3QgSVNfUFJPRFVDVElPTiA9IHRydWU7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBmYXN0aWZ5KHtcclxuICBsb2dnZXI6IElTX1BST0RVQ1RJT05cclxuICAgID8gZmFsc2VcclxuICAgIDoge1xyXG4gICAgICAgIHByZXR0eVByaW50OiB7XHJcbiAgICAgICAgICBpZ25vcmU6IFwicGlkLGhvc3RuYW1lXCIsXHJcbiAgICAgICAgICB0cmFuc2xhdGVUaW1lOiBcIlNZUzpISDpNTTpzc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbn0pO1xyXG5zZXJ2ZXIucmVnaXN0ZXIoaW1wb3J0KFwiQGZhc3RpZnkvY29tcHJlc3NcIiksIHtcclxuICBlbmNvZGluZ3M6IFtcImd6aXBcIiwgXCJkZWZsYXRlXCJdLFxyXG59KTtcclxuc2VydmVyLnJlZ2lzdGVyKGZhc3RpZnlTZW5zaWJsZSk7XHJcblxyXG5zZXJ2ZXIuYWRkSG9vayhcIm9uUmVxdWVzdFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCByZXBvID0gKGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oKSkuZ2V0UmVwb3NpdG9yeShVc2VyKTtcclxuXHJcbiAgY29uc3QgdXNlcklkID0gcmVxLmhlYWRlcnNbXCJ4LWFwcC11c2VyaWRcIl07XHJcbiAgaWYgKHVzZXJJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVwby5maW5kT25lKHVzZXJJZCk7XHJcbiAgICBpZiAodXNlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJlcy51bmF1dGhvcml6ZWQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcmVxLnVzZXIgPSB1c2VyO1xyXG4gIH1cclxufSk7XHJcblxyXG5zZXJ2ZXIuYWRkSG9vayhcIm9uUmVxdWVzdFwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICByZXMuaGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcInB1YmxpYywgbWF4LWFnZT0zMTUzNjAwMFwiKTtcclxuICByZXMuaGVhZGVyKFwiQ29ubmVjdGlvblwiLCBcImNsb3NlXCIpO1xyXG59KTtcclxuXHJcbnNlcnZlci5yZWdpc3RlcihhcGlSb3V0ZSwgeyBwcmVmaXg6IFwiL2FwaVwiIH0pO1xyXG5zZXJ2ZXIucmVnaXN0ZXIoc3BhUm91dGUpO1xyXG5cclxuY29uc3Qgc3RhcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGluaXRpYWxpemUoKTtcclxuICAgIGF3YWl0IHNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwLCBcIjAuMC4wLjBcIik7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBzZXJ2ZXIubG9nLmVycm9yKGVycik7XHJcbiAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgfVxyXG59O1xyXG5zdGFydCgpO1xyXG4iXSwibmFtZXMiOlsiYXNzZXRzIiwicGF0aCIsInJlcGxhY2UiLCJCZXR0aW5nVGlja2V0Iiwic2NoZW1hIiwiRW50aXR5U2NoZW1hIiwiY29sdW1ucyIsImNyZWF0ZWRBdCIsImNyZWF0ZURhdGUiLCJudWxsYWJsZSIsInR5cGUiLCJpZCIsImdlbmVyYXRlZCIsInByaW1hcnkiLCJrZXkiLCJuYW1lIiwib3JkZXJCeSIsInJlbGF0aW9ucyIsInJhY2UiLCJ0YXJnZXQiLCJ1c2VyIiwiY29uc3RydWN0b3IiLCJwYXlsb2FkIiwiT2Rkc0l0ZW0iLCJvZGRzIiwiaW52ZXJzZVNpZGUiLCJQbGF5ZXIiLCJpbWFnZSIsInNob3J0TmFtZSIsIlJhY2UiLCJjbG9zZUF0Iiwic3RhcnRBdCIsImluZGljZXMiLCJ1bmlxdWUiLCJlbnRyaWVzIiwidHJpZmVjdGFPZGRzIiwiUmFjZUVudHJ5IiwiY29tbWVudCIsImFsbG93TnVsbCIsImZpcnN0IiwiZmlyc3RSYXRlIiwibnVtYmVyIiwib3RoZXJzIiwicGFwZXJXaW4iLCJwcmVkaWN0aW9uTWFyayIsInJvY2tXaW4iLCJzY2lzc29yc1dpbiIsInNlY29uZCIsInRoaXJkIiwidGhpcmRSYXRlIiwicGxheWVyIiwiVXNlciIsImJhbGFuY2UiLCJkZWZhdWx0IiwicGF5b2ZmIiwiSU5JVElBTF9EQVRBQkFTRV9QQVRIIiwicmVzb2x2ZSIsInByb2Nlc3MiLCJjd2QiLCJEQVRBQkFTRV9QQVRIIiwiYXBpUm91dGUiLCJmYXN0aWZ5IiwiZ2V0IiwicmVxIiwicmVzIiwiaGVhZGVyIiwicmVwbyIsImdldFJlcG9zaXRvcnkiLCJzZW5kIiwic2F2ZSIsInBvc3QiLCJodHRwRXJyb3JzIiwidW5hdXRob3JpemVkIiwiYW1vdW50IiwiYm9keSIsImJhZFJlcXVlc3QiLCJzdGF0dXMiLCJfcmVxIiwidXJsIiwiaGFzaCIsIk1hdGgiLCJyYW5kb20iLCJ0b0ZpeGVkIiwic3Vic3RyaW5nIiwic2luY2UiLCJxdWVyeSIsIm1vbWVudCIsInVuaXgiLCJ1bmRlZmluZWQiLCJ1bnRpbCIsImlzVmFsaWQiLCJ3aGVyZSIsIk9iamVjdCIsImFzc2lnbiIsInV0YyIsImZvcm1hdCIsInJhY2VzIiwiZmluZCIsIm1hcCIsImZpbmRPbmUiLCJwYXJhbXMiLCJyYWNlSWQiLCJub3RGb3VuZCIsImVudHJ5IiwiYmV0dGluZ1RpY2tldHMiLCJwcmVjb25kaXRpb25GYWlsZWQiLCJBcnJheSIsImlzQXJyYXkiLCJzb21lIiwibiIsImJldHRpbmdUaWNrZXRSZXBvIiwiYmV0dGluZ1RpY2tldCIsInVzZXJSZXBvIiwiaXRlbXMiLCJ6ZW5naW5Db2RlIiwiXyIsInZhbHVlIiwiYnJhbmNoZXMiLCJ2IiwiY29kZSIsInJlZHVjZSIsImFjYyIsIm9iaiIsInNwYVJvdXRlIiwicmVnaXN0ZXIiLCJmYXN0aWZ5U3RhdGljIiwicm9vdCIsIl9fZGlybmFtZSIsIndpbGRjYXJkIiwicmVwbHkiLCJzZW5kRmlsZSIsImNvbm5lY3Rpb25Qcm9taXNlIiwidHlwZW9ybSIsImNyZWF0ZUNvbm5lY3Rpb24iLCJkYXRhYmFzZSIsImVudGl0aWVzIiwic3luY2hyb25pemUiLCJpbml0aWFsaXplIiwiZnMiLCJjb3B5RmlsZSIsIklTX1BST0RVQ1RJT04iLCJzZXJ2ZXIiLCJsb2dnZXIiLCJwcmV0dHlQcmludCIsImlnbm9yZSIsInRyYW5zbGF0ZVRpbWUiLCJlbmNvZGluZ3MiLCJmYXN0aWZ5U2Vuc2libGUiLCJhZGRIb29rIiwidXNlcklkIiwiaGVhZGVycyIsInByZWZpeCIsInN0YXJ0IiwibGlzdGVuIiwiZW52IiwiUE9SVCIsImVyciIsImxvZyIsImVycm9yIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=