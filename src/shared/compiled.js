/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

import { Reader, Writer, util, roots } from "protobufjs/minimal";

// Common aliases
var $Reader = Reader, $Writer = Writer, $util = util;

// Exported root namespace
var $root = roots["default"] || (roots["default"] = {});

/**
 * Command enum.
 * @exports Command
 * @enum {number}
 * @property {number} NOOP=0 NOOP value
 * @property {number} STATUS=1 STATUS value
 * @property {number} BLINK=2 BLINK value
 * @property {number} TERMINATION=3 TERMINATION value
 * @property {number} CHARGER_ON=4 CHARGER_ON value
 * @property {number} VERSION=5 VERSION value
 * @property {number} THRUSTER_POSITION=6 THRUSTER_POSITION value
 * @property {number} READ_EVENT_LOG_SIZE=7 READ_EVENT_LOG_SIZE value
 * @property {number} READ_NEXT_EVENT_FROM_LOG=8 READ_NEXT_EVENT_FROM_LOG value
 * @property {number} CLEAR_ERRORS=9 CLEAR_ERRORS value
 * @property {number} RETRACTION_ENABLED=10 RETRACTION_ENABLED value
 * @property {number} JET_MODE_ENABLED=11 JET_MODE_ENABLED value
 */
$root.Command = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NOOP"] = 0;
    values[valuesById[1] = "STATUS"] = 1;
    values[valuesById[2] = "BLINK"] = 2;
    values[valuesById[3] = "TERMINATION"] = 3;
    values[valuesById[4] = "CHARGER_ON"] = 4;
    values[valuesById[5] = "VERSION"] = 5;
    values[valuesById[6] = "THRUSTER_POSITION"] = 6;
    values[valuesById[7] = "READ_EVENT_LOG_SIZE"] = 7;
    values[valuesById[8] = "READ_NEXT_EVENT_FROM_LOG"] = 8;
    values[valuesById[9] = "CLEAR_ERRORS"] = 9;
    values[valuesById[10] = "RETRACTION_ENABLED"] = 10;
    values[valuesById[11] = "JET_MODE_ENABLED"] = 11;
    return values;
})();

$root.Timestamp = (function() {

    /**
     * Properties of a Timestamp.
     * @exports ITimestamp
     * @interface ITimestamp
     * @property {number|Long|null} [seconds] Timestamp seconds
     * @property {number|null} [nanos] Timestamp nanos
     */

    /**
     * Constructs a new Timestamp.
     * @exports Timestamp
     * @classdesc Represents a Timestamp.
     * @implements ITimestamp
     * @constructor
     * @param {ITimestamp=} [properties] Properties to set
     */
    function Timestamp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Timestamp seconds.
     * @member {number|Long} seconds
     * @memberof Timestamp
     * @instance
     */
    Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Timestamp nanos.
     * @member {number} nanos
     * @memberof Timestamp
     * @instance
     */
    Timestamp.prototype.nanos = 0;

    /**
     * Creates a new Timestamp instance using the specified properties.
     * @function create
     * @memberof Timestamp
     * @static
     * @param {ITimestamp=} [properties] Properties to set
     * @returns {Timestamp} Timestamp instance
     */
    Timestamp.create = function create(properties) {
        return new Timestamp(properties);
    };

    /**
     * Encodes the specified Timestamp message. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @function encode
     * @memberof Timestamp
     * @static
     * @param {ITimestamp} message Timestamp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Timestamp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
        if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
        return writer;
    };

    /**
     * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Timestamp
     * @static
     * @param {ITimestamp} message Timestamp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Timestamp message from the specified reader or buffer.
     * @function decode
     * @memberof Timestamp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Timestamp} Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Timestamp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Timestamp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.seconds = reader.int64();
                    break;
                }
            case 2: {
                    message.nanos = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Timestamp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Timestamp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Timestamp} Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Timestamp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Timestamp message.
     * @function verify
     * @memberof Timestamp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Timestamp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.seconds != null && message.hasOwnProperty("seconds"))
            if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                return "seconds: integer|Long expected";
        if (message.nanos != null && message.hasOwnProperty("nanos"))
            if (!$util.isInteger(message.nanos))
                return "nanos: integer expected";
        return null;
    };

    /**
     * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Timestamp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Timestamp} Timestamp
     */
    Timestamp.fromObject = function fromObject(object) {
        if (object instanceof $root.Timestamp)
            return object;
        var message = new $root.Timestamp();
        if (object.seconds != null)
            if ($util.Long)
                (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
            else if (typeof object.seconds === "string")
                message.seconds = parseInt(object.seconds, 10);
            else if (typeof object.seconds === "number")
                message.seconds = object.seconds;
            else if (typeof object.seconds === "object")
                message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
        if (object.nanos != null)
            message.nanos = object.nanos | 0;
        return message;
    };

    /**
     * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Timestamp
     * @static
     * @param {Timestamp} message Timestamp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Timestamp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.seconds = options.longs === String ? "0" : 0;
            object.nanos = 0;
        }
        if (message.seconds != null && message.hasOwnProperty("seconds"))
            if (typeof message.seconds === "number")
                object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
            else
                object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
        if (message.nanos != null && message.hasOwnProperty("nanos"))
            object.nanos = message.nanos;
        return object;
    };

    /**
     * Converts this Timestamp to JSON.
     * @function toJSON
     * @memberof Timestamp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Timestamp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for Timestamp
     * @function getTypeUrl
     * @memberof Timestamp
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Timestamp";
    };

    return Timestamp;
})();

/**
 * SystemState enum.
 * @exports SystemState
 * @enum {number}
 * @property {number} STATE_UNSPECIFIED=0 STATE_UNSPECIFIED value
 * @property {number} STATE_INITIALIZING=1 STATE_INITIALIZING value
 * @property {number} STATE_OPERATIONAL=2 STATE_OPERATIONAL value
 * @property {number} STATE_PRESLEEP=3 STATE_PRESLEEP value
 * @property {number} STATE_SLEEP=4 STATE_SLEEP value
 * @property {number} STATE_ERROR=15 STATE_ERROR value
 */
$root.SystemState = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "STATE_UNSPECIFIED"] = 0;
    values[valuesById[1] = "STATE_INITIALIZING"] = 1;
    values[valuesById[2] = "STATE_OPERATIONAL"] = 2;
    values[valuesById[3] = "STATE_PRESLEEP"] = 3;
    values[valuesById[4] = "STATE_SLEEP"] = 4;
    values[valuesById[15] = "STATE_ERROR"] = 15;
    return values;
})();

/**
 * EventSource enum.
 * @exports EventSource
 * @enum {number}
 * @property {number} SRC_UNSPECIFIED=0 SRC_UNSPECIFIED value
 * @property {number} SRC_ATCCM=1 SRC_ATCCM value
 * @property {number} SRC_MOTOR=2 SRC_MOTOR value
 * @property {number} SRC_CHARGER=3 SRC_CHARGER value
 * @property {number} SRC_ATCCM_1=10 SRC_ATCCM_1 value
 * @property {number} SRC_MOTOR_1=11 SRC_MOTOR_1 value
 * @property {number} SRC_CHARGER_1=12 SRC_CHARGER_1 value
 * @property {number} SRC_ATCCM_2=20 SRC_ATCCM_2 value
 * @property {number} SRC_MOTOR_2=21 SRC_MOTOR_2 value
 * @property {number} SRC_CHARGER_2=22 SRC_CHARGER_2 value
 * @property {number} SRC_ATCCM_3=30 SRC_ATCCM_3 value
 * @property {number} SRC_MOTOR_3=31 SRC_MOTOR_3 value
 * @property {number} SRC_CHARGER_3=32 SRC_CHARGER_3 value
 */
$root.EventSource = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SRC_UNSPECIFIED"] = 0;
    values[valuesById[1] = "SRC_ATCCM"] = 1;
    values[valuesById[2] = "SRC_MOTOR"] = 2;
    values[valuesById[3] = "SRC_CHARGER"] = 3;
    values[valuesById[10] = "SRC_ATCCM_1"] = 10;
    values[valuesById[11] = "SRC_MOTOR_1"] = 11;
    values[valuesById[12] = "SRC_CHARGER_1"] = 12;
    values[valuesById[20] = "SRC_ATCCM_2"] = 20;
    values[valuesById[21] = "SRC_MOTOR_2"] = 21;
    values[valuesById[22] = "SRC_CHARGER_2"] = 22;
    values[valuesById[30] = "SRC_ATCCM_3"] = 30;
    values[valuesById[31] = "SRC_MOTOR_3"] = 31;
    values[valuesById[32] = "SRC_CHARGER_3"] = 32;
    return values;
})();

/**
 * ChargeStatus enum.
 * @exports ChargeStatus
 * @enum {number}
 * @property {number} STOP=0 STOP value
 * @property {number} RESET=1 RESET value
 * @property {number} SOFT_START=2 SOFT_START value
 * @property {number} SEARCH_PHASE=3 SEARCH_PHASE value
 * @property {number} BOOST=4 BOOST value
 * @property {number} ABSORPTION=5 ABSORPTION value
 * @property {number} FLOATING=6 FLOATING value
 * @property {number} EGALISATION=7 EGALISATION value
 * @property {number} DESULFATATION=8 DESULFATATION value
 * @property {number} CONTROL_UI=9 CONTROL_UI value
 * @property {number} UNKNOWN=255 UNKNOWN value
 */
$root.ChargeStatus = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "STOP"] = 0;
    values[valuesById[1] = "RESET"] = 1;
    values[valuesById[2] = "SOFT_START"] = 2;
    values[valuesById[3] = "SEARCH_PHASE"] = 3;
    values[valuesById[4] = "BOOST"] = 4;
    values[valuesById[5] = "ABSORPTION"] = 5;
    values[valuesById[6] = "FLOATING"] = 6;
    values[valuesById[7] = "EGALISATION"] = 7;
    values[valuesById[8] = "DESULFATATION"] = 8;
    values[valuesById[9] = "CONTROL_UI"] = 9;
    values[valuesById[255] = "UNKNOWN"] = 255;
    return values;
})();

/**
 * UiMode enum.
 * @exports UiMode
 * @enum {number}
 * @property {number} DEFAULT=0 DEFAULT value
 * @property {number} MOTOR=1 MOTOR value
 * @property {number} CHARGE_NO_THROTTLE=2 CHARGE_NO_THROTTLE value
 * @property {number} CHARGE_THROTTLE=3 CHARGE_THROTTLE value
 */
$root.UiMode = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "DEFAULT"] = 0;
    values[valuesById[1] = "MOTOR"] = 1;
    values[valuesById[2] = "CHARGE_NO_THROTTLE"] = 2;
    values[valuesById[3] = "CHARGE_THROTTLE"] = 3;
    return values;
})();

$root.ChargerStatus = (function() {

    /**
     * Properties of a ChargerStatus.
     * @exports IChargerStatus
     * @interface IChargerStatus
     * @property {ChargeStatus|null} [status] ChargerStatus status
     * @property {boolean|null} [enabled] ChargerStatus enabled
     * @property {number|null} [batteryVoltage] ChargerStatus batteryVoltage
     * @property {number|null} [outputCurrent] ChargerStatus outputCurrent
     * @property {number|null} [externalProbeTemperature] ChargerStatus externalProbeTemperature
     * @property {EventSource|null} [id] ChargerStatus id
     */

    /**
     * Constructs a new ChargerStatus.
     * @exports ChargerStatus
     * @classdesc Represents a ChargerStatus.
     * @implements IChargerStatus
     * @constructor
     * @param {IChargerStatus=} [properties] Properties to set
     */
    function ChargerStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChargerStatus status.
     * @member {ChargeStatus} status
     * @memberof ChargerStatus
     * @instance
     */
    ChargerStatus.prototype.status = 0;

    /**
     * ChargerStatus enabled.
     * @member {boolean} enabled
     * @memberof ChargerStatus
     * @instance
     */
    ChargerStatus.prototype.enabled = false;

    /**
     * ChargerStatus batteryVoltage.
     * @member {number} batteryVoltage
     * @memberof ChargerStatus
     * @instance
     */
    ChargerStatus.prototype.batteryVoltage = 0;

    /**
     * ChargerStatus outputCurrent.
     * @member {number} outputCurrent
     * @memberof ChargerStatus
     * @instance
     */
    ChargerStatus.prototype.outputCurrent = 0;

    /**
     * ChargerStatus externalProbeTemperature.
     * @member {number} externalProbeTemperature
     * @memberof ChargerStatus
     * @instance
     */
    ChargerStatus.prototype.externalProbeTemperature = 0;

    /**
     * ChargerStatus id.
     * @member {EventSource} id
     * @memberof ChargerStatus
     * @instance
     */
    ChargerStatus.prototype.id = 0;

    /**
     * Creates a new ChargerStatus instance using the specified properties.
     * @function create
     * @memberof ChargerStatus
     * @static
     * @param {IChargerStatus=} [properties] Properties to set
     * @returns {ChargerStatus} ChargerStatus instance
     */
    ChargerStatus.create = function create(properties) {
        return new ChargerStatus(properties);
    };

    /**
     * Encodes the specified ChargerStatus message. Does not implicitly {@link ChargerStatus.verify|verify} messages.
     * @function encode
     * @memberof ChargerStatus
     * @static
     * @param {IChargerStatus} message ChargerStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChargerStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
        if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.enabled);
        if (message.batteryVoltage != null && Object.hasOwnProperty.call(message, "batteryVoltage"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.batteryVoltage);
        if (message.outputCurrent != null && Object.hasOwnProperty.call(message, "outputCurrent"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.outputCurrent);
        if (message.externalProbeTemperature != null && Object.hasOwnProperty.call(message, "externalProbeTemperature"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.externalProbeTemperature);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.id);
        return writer;
    };

    /**
     * Encodes the specified ChargerStatus message, length delimited. Does not implicitly {@link ChargerStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChargerStatus
     * @static
     * @param {IChargerStatus} message ChargerStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChargerStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChargerStatus message from the specified reader or buffer.
     * @function decode
     * @memberof ChargerStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChargerStatus} ChargerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChargerStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChargerStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.status = reader.int32();
                    break;
                }
            case 2: {
                    message.enabled = reader.bool();
                    break;
                }
            case 3: {
                    message.batteryVoltage = reader.double();
                    break;
                }
            case 4: {
                    message.outputCurrent = reader.double();
                    break;
                }
            case 5: {
                    message.externalProbeTemperature = reader.double();
                    break;
                }
            case 15: {
                    message.id = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChargerStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChargerStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChargerStatus} ChargerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChargerStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChargerStatus message.
     * @function verify
     * @memberof ChargerStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChargerStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            switch (message.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 255:
                break;
            }
        if (message.enabled != null && message.hasOwnProperty("enabled"))
            if (typeof message.enabled !== "boolean")
                return "enabled: boolean expected";
        if (message.batteryVoltage != null && message.hasOwnProperty("batteryVoltage"))
            if (typeof message.batteryVoltage !== "number")
                return "batteryVoltage: number expected";
        if (message.outputCurrent != null && message.hasOwnProperty("outputCurrent"))
            if (typeof message.outputCurrent !== "number")
                return "outputCurrent: number expected";
        if (message.externalProbeTemperature != null && message.hasOwnProperty("externalProbeTemperature"))
            if (typeof message.externalProbeTemperature !== "number")
                return "externalProbeTemperature: number expected";
        if (message.id != null && message.hasOwnProperty("id"))
            switch (message.id) {
            default:
                return "id: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 10:
            case 11:
            case 12:
            case 20:
            case 21:
            case 22:
            case 30:
            case 31:
            case 32:
                break;
            }
        return null;
    };

    /**
     * Creates a ChargerStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChargerStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChargerStatus} ChargerStatus
     */
    ChargerStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.ChargerStatus)
            return object;
        var message = new $root.ChargerStatus();
        switch (object.status) {
        default:
            if (typeof object.status === "number") {
                message.status = object.status;
                break;
            }
            break;
        case "STOP":
        case 0:
            message.status = 0;
            break;
        case "RESET":
        case 1:
            message.status = 1;
            break;
        case "SOFT_START":
        case 2:
            message.status = 2;
            break;
        case "SEARCH_PHASE":
        case 3:
            message.status = 3;
            break;
        case "BOOST":
        case 4:
            message.status = 4;
            break;
        case "ABSORPTION":
        case 5:
            message.status = 5;
            break;
        case "FLOATING":
        case 6:
            message.status = 6;
            break;
        case "EGALISATION":
        case 7:
            message.status = 7;
            break;
        case "DESULFATATION":
        case 8:
            message.status = 8;
            break;
        case "CONTROL_UI":
        case 9:
            message.status = 9;
            break;
        case "UNKNOWN":
        case 255:
            message.status = 255;
            break;
        }
        if (object.enabled != null)
            message.enabled = Boolean(object.enabled);
        if (object.batteryVoltage != null)
            message.batteryVoltage = Number(object.batteryVoltage);
        if (object.outputCurrent != null)
            message.outputCurrent = Number(object.outputCurrent);
        if (object.externalProbeTemperature != null)
            message.externalProbeTemperature = Number(object.externalProbeTemperature);
        switch (object.id) {
        default:
            if (typeof object.id === "number") {
                message.id = object.id;
                break;
            }
            break;
        case "SRC_UNSPECIFIED":
        case 0:
            message.id = 0;
            break;
        case "SRC_ATCCM":
        case 1:
            message.id = 1;
            break;
        case "SRC_MOTOR":
        case 2:
            message.id = 2;
            break;
        case "SRC_CHARGER":
        case 3:
            message.id = 3;
            break;
        case "SRC_ATCCM_1":
        case 10:
            message.id = 10;
            break;
        case "SRC_MOTOR_1":
        case 11:
            message.id = 11;
            break;
        case "SRC_CHARGER_1":
        case 12:
            message.id = 12;
            break;
        case "SRC_ATCCM_2":
        case 20:
            message.id = 20;
            break;
        case "SRC_MOTOR_2":
        case 21:
            message.id = 21;
            break;
        case "SRC_CHARGER_2":
        case 22:
            message.id = 22;
            break;
        case "SRC_ATCCM_3":
        case 30:
            message.id = 30;
            break;
        case "SRC_MOTOR_3":
        case 31:
            message.id = 31;
            break;
        case "SRC_CHARGER_3":
        case 32:
            message.id = 32;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a ChargerStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChargerStatus
     * @static
     * @param {ChargerStatus} message ChargerStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChargerStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.status = options.enums === String ? "STOP" : 0;
            object.enabled = false;
            object.batteryVoltage = 0;
            object.outputCurrent = 0;
            object.externalProbeTemperature = 0;
            object.id = options.enums === String ? "SRC_UNSPECIFIED" : 0;
        }
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = options.enums === String ? $root.ChargeStatus[message.status] === undefined ? message.status : $root.ChargeStatus[message.status] : message.status;
        if (message.enabled != null && message.hasOwnProperty("enabled"))
            object.enabled = message.enabled;
        if (message.batteryVoltage != null && message.hasOwnProperty("batteryVoltage"))
            object.batteryVoltage = options.json && !isFinite(message.batteryVoltage) ? String(message.batteryVoltage) : message.batteryVoltage;
        if (message.outputCurrent != null && message.hasOwnProperty("outputCurrent"))
            object.outputCurrent = options.json && !isFinite(message.outputCurrent) ? String(message.outputCurrent) : message.outputCurrent;
        if (message.externalProbeTemperature != null && message.hasOwnProperty("externalProbeTemperature"))
            object.externalProbeTemperature = options.json && !isFinite(message.externalProbeTemperature) ? String(message.externalProbeTemperature) : message.externalProbeTemperature;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = options.enums === String ? $root.EventSource[message.id] === undefined ? message.id : $root.EventSource[message.id] : message.id;
        return object;
    };

    /**
     * Converts this ChargerStatus to JSON.
     * @function toJSON
     * @memberof ChargerStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChargerStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for ChargerStatus
     * @function getTypeUrl
     * @memberof ChargerStatus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChargerStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChargerStatus";
    };

    return ChargerStatus;
})();

$root.MotorStatus = (function() {

    /**
     * Properties of a MotorStatus.
     * @exports IMotorStatus
     * @interface IMotorStatus
     * @property {number|null} [rpm] MotorStatus rpm
     * @property {boolean|null} [enabled] MotorStatus enabled
     * @property {number|null} [current] MotorStatus current
     * @property {number|null} [controllerTemperature] MotorStatus controllerTemperature
     * @property {number|null} [motorTemperature] MotorStatus motorTemperature
     * @property {number|null} [throttle] MotorStatus throttle
     * @property {number|null} [errorCode] MotorStatus errorCode
     * @property {number|null} [batteryVoltage] MotorStatus batteryVoltage
     * @property {EventSource|null} [id] MotorStatus id
     */

    /**
     * Constructs a new MotorStatus.
     * @exports MotorStatus
     * @classdesc Represents a MotorStatus.
     * @implements IMotorStatus
     * @constructor
     * @param {IMotorStatus=} [properties] Properties to set
     */
    function MotorStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MotorStatus rpm.
     * @member {number} rpm
     * @memberof MotorStatus
     * @instance
     */
    MotorStatus.prototype.rpm = 0;

    /**
     * MotorStatus enabled.
     * @member {boolean} enabled
     * @memberof MotorStatus
     * @instance
     */
    MotorStatus.prototype.enabled = false;

    /**
     * MotorStatus current.
     * @member {number} current
     * @memberof MotorStatus
     * @instance
     */
    MotorStatus.prototype.current = 0;

    /**
     * MotorStatus controllerTemperature.
     * @member {number} controllerTemperature
     * @memberof MotorStatus
     * @instance
     */
    MotorStatus.prototype.controllerTemperature = 0;

    /**
     * MotorStatus motorTemperature.
     * @member {number} motorTemperature
     * @memberof MotorStatus
     * @instance
     */
    MotorStatus.prototype.motorTemperature = 0;

    /**
     * MotorStatus throttle.
     * @member {number} throttle
     * @memberof MotorStatus
     * @instance
     */
    MotorStatus.prototype.throttle = 0;

    /**
     * MotorStatus errorCode.
     * @member {number} errorCode
     * @memberof MotorStatus
     * @instance
     */
    MotorStatus.prototype.errorCode = 0;

    /**
     * MotorStatus batteryVoltage.
     * @member {number} batteryVoltage
     * @memberof MotorStatus
     * @instance
     */
    MotorStatus.prototype.batteryVoltage = 0;

    /**
     * MotorStatus id.
     * @member {EventSource} id
     * @memberof MotorStatus
     * @instance
     */
    MotorStatus.prototype.id = 0;

    /**
     * Creates a new MotorStatus instance using the specified properties.
     * @function create
     * @memberof MotorStatus
     * @static
     * @param {IMotorStatus=} [properties] Properties to set
     * @returns {MotorStatus} MotorStatus instance
     */
    MotorStatus.create = function create(properties) {
        return new MotorStatus(properties);
    };

    /**
     * Encodes the specified MotorStatus message. Does not implicitly {@link MotorStatus.verify|verify} messages.
     * @function encode
     * @memberof MotorStatus
     * @static
     * @param {IMotorStatus} message MotorStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MotorStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rpm != null && Object.hasOwnProperty.call(message, "rpm"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rpm);
        if (message.enabled != null && Object.hasOwnProperty.call(message, "enabled"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.enabled);
        if (message.current != null && Object.hasOwnProperty.call(message, "current"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.current);
        if (message.controllerTemperature != null && Object.hasOwnProperty.call(message, "controllerTemperature"))
            writer.uint32(/* id 4, wireType 1 =*/33).double(message.controllerTemperature);
        if (message.motorTemperature != null && Object.hasOwnProperty.call(message, "motorTemperature"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.motorTemperature);
        if (message.throttle != null && Object.hasOwnProperty.call(message, "throttle"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.throttle);
        if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.errorCode);
        if (message.batteryVoltage != null && Object.hasOwnProperty.call(message, "batteryVoltage"))
            writer.uint32(/* id 8, wireType 1 =*/65).double(message.batteryVoltage);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.id);
        return writer;
    };

    /**
     * Encodes the specified MotorStatus message, length delimited. Does not implicitly {@link MotorStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MotorStatus
     * @static
     * @param {IMotorStatus} message MotorStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MotorStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MotorStatus message from the specified reader or buffer.
     * @function decode
     * @memberof MotorStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MotorStatus} MotorStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MotorStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MotorStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.rpm = reader.int32();
                    break;
                }
            case 2: {
                    message.enabled = reader.bool();
                    break;
                }
            case 3: {
                    message.current = reader.double();
                    break;
                }
            case 4: {
                    message.controllerTemperature = reader.double();
                    break;
                }
            case 5: {
                    message.motorTemperature = reader.double();
                    break;
                }
            case 6: {
                    message.throttle = reader.int32();
                    break;
                }
            case 7: {
                    message.errorCode = reader.uint32();
                    break;
                }
            case 8: {
                    message.batteryVoltage = reader.double();
                    break;
                }
            case 15: {
                    message.id = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MotorStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MotorStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MotorStatus} MotorStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MotorStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MotorStatus message.
     * @function verify
     * @memberof MotorStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MotorStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rpm != null && message.hasOwnProperty("rpm"))
            if (!$util.isInteger(message.rpm))
                return "rpm: integer expected";
        if (message.enabled != null && message.hasOwnProperty("enabled"))
            if (typeof message.enabled !== "boolean")
                return "enabled: boolean expected";
        if (message.current != null && message.hasOwnProperty("current"))
            if (typeof message.current !== "number")
                return "current: number expected";
        if (message.controllerTemperature != null && message.hasOwnProperty("controllerTemperature"))
            if (typeof message.controllerTemperature !== "number")
                return "controllerTemperature: number expected";
        if (message.motorTemperature != null && message.hasOwnProperty("motorTemperature"))
            if (typeof message.motorTemperature !== "number")
                return "motorTemperature: number expected";
        if (message.throttle != null && message.hasOwnProperty("throttle"))
            if (!$util.isInteger(message.throttle))
                return "throttle: integer expected";
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            if (!$util.isInteger(message.errorCode))
                return "errorCode: integer expected";
        if (message.batteryVoltage != null && message.hasOwnProperty("batteryVoltage"))
            if (typeof message.batteryVoltage !== "number")
                return "batteryVoltage: number expected";
        if (message.id != null && message.hasOwnProperty("id"))
            switch (message.id) {
            default:
                return "id: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 10:
            case 11:
            case 12:
            case 20:
            case 21:
            case 22:
            case 30:
            case 31:
            case 32:
                break;
            }
        return null;
    };

    /**
     * Creates a MotorStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MotorStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MotorStatus} MotorStatus
     */
    MotorStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.MotorStatus)
            return object;
        var message = new $root.MotorStatus();
        if (object.rpm != null)
            message.rpm = object.rpm | 0;
        if (object.enabled != null)
            message.enabled = Boolean(object.enabled);
        if (object.current != null)
            message.current = Number(object.current);
        if (object.controllerTemperature != null)
            message.controllerTemperature = Number(object.controllerTemperature);
        if (object.motorTemperature != null)
            message.motorTemperature = Number(object.motorTemperature);
        if (object.throttle != null)
            message.throttle = object.throttle | 0;
        if (object.errorCode != null)
            message.errorCode = object.errorCode >>> 0;
        if (object.batteryVoltage != null)
            message.batteryVoltage = Number(object.batteryVoltage);
        switch (object.id) {
        default:
            if (typeof object.id === "number") {
                message.id = object.id;
                break;
            }
            break;
        case "SRC_UNSPECIFIED":
        case 0:
            message.id = 0;
            break;
        case "SRC_ATCCM":
        case 1:
            message.id = 1;
            break;
        case "SRC_MOTOR":
        case 2:
            message.id = 2;
            break;
        case "SRC_CHARGER":
        case 3:
            message.id = 3;
            break;
        case "SRC_ATCCM_1":
        case 10:
            message.id = 10;
            break;
        case "SRC_MOTOR_1":
        case 11:
            message.id = 11;
            break;
        case "SRC_CHARGER_1":
        case 12:
            message.id = 12;
            break;
        case "SRC_ATCCM_2":
        case 20:
            message.id = 20;
            break;
        case "SRC_MOTOR_2":
        case 21:
            message.id = 21;
            break;
        case "SRC_CHARGER_2":
        case 22:
            message.id = 22;
            break;
        case "SRC_ATCCM_3":
        case 30:
            message.id = 30;
            break;
        case "SRC_MOTOR_3":
        case 31:
            message.id = 31;
            break;
        case "SRC_CHARGER_3":
        case 32:
            message.id = 32;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a MotorStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MotorStatus
     * @static
     * @param {MotorStatus} message MotorStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MotorStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.rpm = 0;
            object.enabled = false;
            object.current = 0;
            object.controllerTemperature = 0;
            object.motorTemperature = 0;
            object.throttle = 0;
            object.errorCode = 0;
            object.batteryVoltage = 0;
            object.id = options.enums === String ? "SRC_UNSPECIFIED" : 0;
        }
        if (message.rpm != null && message.hasOwnProperty("rpm"))
            object.rpm = message.rpm;
        if (message.enabled != null && message.hasOwnProperty("enabled"))
            object.enabled = message.enabled;
        if (message.current != null && message.hasOwnProperty("current"))
            object.current = options.json && !isFinite(message.current) ? String(message.current) : message.current;
        if (message.controllerTemperature != null && message.hasOwnProperty("controllerTemperature"))
            object.controllerTemperature = options.json && !isFinite(message.controllerTemperature) ? String(message.controllerTemperature) : message.controllerTemperature;
        if (message.motorTemperature != null && message.hasOwnProperty("motorTemperature"))
            object.motorTemperature = options.json && !isFinite(message.motorTemperature) ? String(message.motorTemperature) : message.motorTemperature;
        if (message.throttle != null && message.hasOwnProperty("throttle"))
            object.throttle = message.throttle;
        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            object.errorCode = message.errorCode;
        if (message.batteryVoltage != null && message.hasOwnProperty("batteryVoltage"))
            object.batteryVoltage = options.json && !isFinite(message.batteryVoltage) ? String(message.batteryVoltage) : message.batteryVoltage;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = options.enums === String ? $root.EventSource[message.id] === undefined ? message.id : $root.EventSource[message.id] : message.id;
        return object;
    };

    /**
     * Converts this MotorStatus to JSON.
     * @function toJSON
     * @memberof MotorStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MotorStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for MotorStatus
     * @function getTypeUrl
     * @memberof MotorStatus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MotorStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MotorStatus";
    };

    return MotorStatus;
})();

$root.Versions = (function() {

    /**
     * Properties of a Versions.
     * @exports IVersions
     * @interface IVersions
     * @property {string|null} [softwareVersion] Versions softwareVersion
     * @property {string|null} [bootloaderVersion] Versions bootloaderVersion
     */

    /**
     * Constructs a new Versions.
     * @exports Versions
     * @classdesc Represents a Versions.
     * @implements IVersions
     * @constructor
     * @param {IVersions=} [properties] Properties to set
     */
    function Versions(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Versions softwareVersion.
     * @member {string} softwareVersion
     * @memberof Versions
     * @instance
     */
    Versions.prototype.softwareVersion = "";

    /**
     * Versions bootloaderVersion.
     * @member {string} bootloaderVersion
     * @memberof Versions
     * @instance
     */
    Versions.prototype.bootloaderVersion = "";

    /**
     * Creates a new Versions instance using the specified properties.
     * @function create
     * @memberof Versions
     * @static
     * @param {IVersions=} [properties] Properties to set
     * @returns {Versions} Versions instance
     */
    Versions.create = function create(properties) {
        return new Versions(properties);
    };

    /**
     * Encodes the specified Versions message. Does not implicitly {@link Versions.verify|verify} messages.
     * @function encode
     * @memberof Versions
     * @static
     * @param {IVersions} message Versions message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Versions.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.softwareVersion != null && Object.hasOwnProperty.call(message, "softwareVersion"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.softwareVersion);
        if (message.bootloaderVersion != null && Object.hasOwnProperty.call(message, "bootloaderVersion"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.bootloaderVersion);
        return writer;
    };

    /**
     * Encodes the specified Versions message, length delimited. Does not implicitly {@link Versions.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Versions
     * @static
     * @param {IVersions} message Versions message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Versions.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Versions message from the specified reader or buffer.
     * @function decode
     * @memberof Versions
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Versions} Versions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Versions.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Versions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.softwareVersion = reader.string();
                    break;
                }
            case 2: {
                    message.bootloaderVersion = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Versions message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Versions
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Versions} Versions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Versions.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Versions message.
     * @function verify
     * @memberof Versions
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Versions.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.softwareVersion != null && message.hasOwnProperty("softwareVersion"))
            if (!$util.isString(message.softwareVersion))
                return "softwareVersion: string expected";
        if (message.bootloaderVersion != null && message.hasOwnProperty("bootloaderVersion"))
            if (!$util.isString(message.bootloaderVersion))
                return "bootloaderVersion: string expected";
        return null;
    };

    /**
     * Creates a Versions message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Versions
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Versions} Versions
     */
    Versions.fromObject = function fromObject(object) {
        if (object instanceof $root.Versions)
            return object;
        var message = new $root.Versions();
        if (object.softwareVersion != null)
            message.softwareVersion = String(object.softwareVersion);
        if (object.bootloaderVersion != null)
            message.bootloaderVersion = String(object.bootloaderVersion);
        return message;
    };

    /**
     * Creates a plain object from a Versions message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Versions
     * @static
     * @param {Versions} message Versions
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Versions.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.softwareVersion = "";
            object.bootloaderVersion = "";
        }
        if (message.softwareVersion != null && message.hasOwnProperty("softwareVersion"))
            object.softwareVersion = message.softwareVersion;
        if (message.bootloaderVersion != null && message.hasOwnProperty("bootloaderVersion"))
            object.bootloaderVersion = message.bootloaderVersion;
        return object;
    };

    /**
     * Converts this Versions to JSON.
     * @function toJSON
     * @memberof Versions
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Versions.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for Versions
     * @function getTypeUrl
     * @memberof Versions
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Versions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Versions";
    };

    return Versions;
})();

$root.TelemetryMsg = (function() {

    /**
     * Properties of a TelemetryMsg.
     * @exports ITelemetryMsg
     * @interface ITelemetryMsg
     * @property {SystemState|null} [systemState] TelemetryMsg systemState
     * @property {Array.<IMotorStatus>|null} [motors] TelemetryMsg motors
     * @property {Array.<IChargerStatus>|null} [chargers] TelemetryMsg chargers
     */

    /**
     * Constructs a new TelemetryMsg.
     * @exports TelemetryMsg
     * @classdesc Represents a TelemetryMsg.
     * @implements ITelemetryMsg
     * @constructor
     * @param {ITelemetryMsg=} [properties] Properties to set
     */
    function TelemetryMsg(properties) {
        this.motors = [];
        this.chargers = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TelemetryMsg systemState.
     * @member {SystemState} systemState
     * @memberof TelemetryMsg
     * @instance
     */
    TelemetryMsg.prototype.systemState = 0;

    /**
     * TelemetryMsg motors.
     * @member {Array.<IMotorStatus>} motors
     * @memberof TelemetryMsg
     * @instance
     */
    TelemetryMsg.prototype.motors = $util.emptyArray;

    /**
     * TelemetryMsg chargers.
     * @member {Array.<IChargerStatus>} chargers
     * @memberof TelemetryMsg
     * @instance
     */
    TelemetryMsg.prototype.chargers = $util.emptyArray;

    /**
     * Creates a new TelemetryMsg instance using the specified properties.
     * @function create
     * @memberof TelemetryMsg
     * @static
     * @param {ITelemetryMsg=} [properties] Properties to set
     * @returns {TelemetryMsg} TelemetryMsg instance
     */
    TelemetryMsg.create = function create(properties) {
        return new TelemetryMsg(properties);
    };

    /**
     * Encodes the specified TelemetryMsg message. Does not implicitly {@link TelemetryMsg.verify|verify} messages.
     * @function encode
     * @memberof TelemetryMsg
     * @static
     * @param {ITelemetryMsg} message TelemetryMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TelemetryMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.systemState != null && Object.hasOwnProperty.call(message, "systemState"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.systemState);
        if (message.motors != null && message.motors.length)
            for (var i = 0; i < message.motors.length; ++i)
                $root.MotorStatus.encode(message.motors[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.chargers != null && message.chargers.length)
            for (var i = 0; i < message.chargers.length; ++i)
                $root.ChargerStatus.encode(message.chargers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TelemetryMsg message, length delimited. Does not implicitly {@link TelemetryMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TelemetryMsg
     * @static
     * @param {ITelemetryMsg} message TelemetryMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TelemetryMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TelemetryMsg message from the specified reader or buffer.
     * @function decode
     * @memberof TelemetryMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TelemetryMsg} TelemetryMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TelemetryMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TelemetryMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.systemState = reader.int32();
                    break;
                }
            case 2: {
                    if (!(message.motors && message.motors.length))
                        message.motors = [];
                    message.motors.push($root.MotorStatus.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    if (!(message.chargers && message.chargers.length))
                        message.chargers = [];
                    message.chargers.push($root.ChargerStatus.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TelemetryMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TelemetryMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TelemetryMsg} TelemetryMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TelemetryMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TelemetryMsg message.
     * @function verify
     * @memberof TelemetryMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TelemetryMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.systemState != null && message.hasOwnProperty("systemState"))
            switch (message.systemState) {
            default:
                return "systemState: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 15:
                break;
            }
        if (message.motors != null && message.hasOwnProperty("motors")) {
            if (!Array.isArray(message.motors))
                return "motors: array expected";
            for (var i = 0; i < message.motors.length; ++i) {
                var error = $root.MotorStatus.verify(message.motors[i]);
                if (error)
                    return "motors." + error;
            }
        }
        if (message.chargers != null && message.hasOwnProperty("chargers")) {
            if (!Array.isArray(message.chargers))
                return "chargers: array expected";
            for (var i = 0; i < message.chargers.length; ++i) {
                var error = $root.ChargerStatus.verify(message.chargers[i]);
                if (error)
                    return "chargers." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TelemetryMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TelemetryMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TelemetryMsg} TelemetryMsg
     */
    TelemetryMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.TelemetryMsg)
            return object;
        var message = new $root.TelemetryMsg();
        switch (object.systemState) {
        default:
            if (typeof object.systemState === "number") {
                message.systemState = object.systemState;
                break;
            }
            break;
        case "STATE_UNSPECIFIED":
        case 0:
            message.systemState = 0;
            break;
        case "STATE_INITIALIZING":
        case 1:
            message.systemState = 1;
            break;
        case "STATE_OPERATIONAL":
        case 2:
            message.systemState = 2;
            break;
        case "STATE_PRESLEEP":
        case 3:
            message.systemState = 3;
            break;
        case "STATE_SLEEP":
        case 4:
            message.systemState = 4;
            break;
        case "STATE_ERROR":
        case 15:
            message.systemState = 15;
            break;
        }
        if (object.motors) {
            if (!Array.isArray(object.motors))
                throw TypeError(".TelemetryMsg.motors: array expected");
            message.motors = [];
            for (var i = 0; i < object.motors.length; ++i) {
                if (typeof object.motors[i] !== "object")
                    throw TypeError(".TelemetryMsg.motors: object expected");
                message.motors[i] = $root.MotorStatus.fromObject(object.motors[i]);
            }
        }
        if (object.chargers) {
            if (!Array.isArray(object.chargers))
                throw TypeError(".TelemetryMsg.chargers: array expected");
            message.chargers = [];
            for (var i = 0; i < object.chargers.length; ++i) {
                if (typeof object.chargers[i] !== "object")
                    throw TypeError(".TelemetryMsg.chargers: object expected");
                message.chargers[i] = $root.ChargerStatus.fromObject(object.chargers[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TelemetryMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TelemetryMsg
     * @static
     * @param {TelemetryMsg} message TelemetryMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TelemetryMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.motors = [];
            object.chargers = [];
        }
        if (options.defaults)
            object.systemState = options.enums === String ? "STATE_UNSPECIFIED" : 0;
        if (message.systemState != null && message.hasOwnProperty("systemState"))
            object.systemState = options.enums === String ? $root.SystemState[message.systemState] === undefined ? message.systemState : $root.SystemState[message.systemState] : message.systemState;
        if (message.motors && message.motors.length) {
            object.motors = [];
            for (var j = 0; j < message.motors.length; ++j)
                object.motors[j] = $root.MotorStatus.toObject(message.motors[j], options);
        }
        if (message.chargers && message.chargers.length) {
            object.chargers = [];
            for (var j = 0; j < message.chargers.length; ++j)
                object.chargers[j] = $root.ChargerStatus.toObject(message.chargers[j], options);
        }
        return object;
    };

    /**
     * Converts this TelemetryMsg to JSON.
     * @function toJSON
     * @memberof TelemetryMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TelemetryMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for TelemetryMsg
     * @function getTypeUrl
     * @memberof TelemetryMsg
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TelemetryMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TelemetryMsg";
    };

    return TelemetryMsg;
})();

$root.ErrorMsg = (function() {

    /**
     * Properties of an ErrorMsg.
     * @exports IErrorMsg
     * @interface IErrorMsg
     * @property {EventSource|null} [source] ErrorMsg source
     * @property {number|null} [code] ErrorMsg code
     * @property {string|null} [text] ErrorMsg text
     */

    /**
     * Constructs a new ErrorMsg.
     * @exports ErrorMsg
     * @classdesc Represents an ErrorMsg.
     * @implements IErrorMsg
     * @constructor
     * @param {IErrorMsg=} [properties] Properties to set
     */
    function ErrorMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ErrorMsg source.
     * @member {EventSource} source
     * @memberof ErrorMsg
     * @instance
     */
    ErrorMsg.prototype.source = 0;

    /**
     * ErrorMsg code.
     * @member {number} code
     * @memberof ErrorMsg
     * @instance
     */
    ErrorMsg.prototype.code = 0;

    /**
     * ErrorMsg text.
     * @member {string} text
     * @memberof ErrorMsg
     * @instance
     */
    ErrorMsg.prototype.text = "";

    /**
     * Creates a new ErrorMsg instance using the specified properties.
     * @function create
     * @memberof ErrorMsg
     * @static
     * @param {IErrorMsg=} [properties] Properties to set
     * @returns {ErrorMsg} ErrorMsg instance
     */
    ErrorMsg.create = function create(properties) {
        return new ErrorMsg(properties);
    };

    /**
     * Encodes the specified ErrorMsg message. Does not implicitly {@link ErrorMsg.verify|verify} messages.
     * @function encode
     * @memberof ErrorMsg
     * @static
     * @param {IErrorMsg} message ErrorMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ErrorMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.source != null && Object.hasOwnProperty.call(message, "source"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.source);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.code);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified ErrorMsg message, length delimited. Does not implicitly {@link ErrorMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ErrorMsg
     * @static
     * @param {IErrorMsg} message ErrorMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ErrorMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ErrorMsg message from the specified reader or buffer.
     * @function decode
     * @memberof ErrorMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ErrorMsg} ErrorMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ErrorMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ErrorMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.source = reader.int32();
                    break;
                }
            case 2: {
                    message.code = reader.uint32();
                    break;
                }
            case 3: {
                    message.text = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ErrorMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ErrorMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ErrorMsg} ErrorMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ErrorMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ErrorMsg message.
     * @function verify
     * @memberof ErrorMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ErrorMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.source != null && message.hasOwnProperty("source"))
            switch (message.source) {
            default:
                return "source: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 10:
            case 11:
            case 12:
            case 20:
            case 21:
            case 22:
            case 30:
            case 31:
            case 32:
                break;
            }
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates an ErrorMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ErrorMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ErrorMsg} ErrorMsg
     */
    ErrorMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.ErrorMsg)
            return object;
        var message = new $root.ErrorMsg();
        switch (object.source) {
        default:
            if (typeof object.source === "number") {
                message.source = object.source;
                break;
            }
            break;
        case "SRC_UNSPECIFIED":
        case 0:
            message.source = 0;
            break;
        case "SRC_ATCCM":
        case 1:
            message.source = 1;
            break;
        case "SRC_MOTOR":
        case 2:
            message.source = 2;
            break;
        case "SRC_CHARGER":
        case 3:
            message.source = 3;
            break;
        case "SRC_ATCCM_1":
        case 10:
            message.source = 10;
            break;
        case "SRC_MOTOR_1":
        case 11:
            message.source = 11;
            break;
        case "SRC_CHARGER_1":
        case 12:
            message.source = 12;
            break;
        case "SRC_ATCCM_2":
        case 20:
            message.source = 20;
            break;
        case "SRC_MOTOR_2":
        case 21:
            message.source = 21;
            break;
        case "SRC_CHARGER_2":
        case 22:
            message.source = 22;
            break;
        case "SRC_ATCCM_3":
        case 30:
            message.source = 30;
            break;
        case "SRC_MOTOR_3":
        case 31:
            message.source = 31;
            break;
        case "SRC_CHARGER_3":
        case 32:
            message.source = 32;
            break;
        }
        if (object.code != null)
            message.code = object.code >>> 0;
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from an ErrorMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ErrorMsg
     * @static
     * @param {ErrorMsg} message ErrorMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ErrorMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.source = options.enums === String ? "SRC_UNSPECIFIED" : 0;
            object.code = 0;
            object.text = "";
        }
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = options.enums === String ? $root.EventSource[message.source] === undefined ? message.source : $root.EventSource[message.source] : message.source;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this ErrorMsg to JSON.
     * @function toJSON
     * @memberof ErrorMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ErrorMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for ErrorMsg
     * @function getTypeUrl
     * @memberof ErrorMsg
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ErrorMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ErrorMsg";
    };

    return ErrorMsg;
})();

$root.EventMsg = (function() {

    /**
     * Properties of an EventMsg.
     * @exports IEventMsg
     * @interface IEventMsg
     * @property {ITimestamp|null} [timestamp] EventMsg timestamp
     * @property {ITelemetryMsg|null} [telemetry] EventMsg telemetry
     * @property {IErrorMsg|null} [error] EventMsg error
     */

    /**
     * Constructs a new EventMsg.
     * @exports EventMsg
     * @classdesc Represents an EventMsg.
     * @implements IEventMsg
     * @constructor
     * @param {IEventMsg=} [properties] Properties to set
     */
    function EventMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventMsg timestamp.
     * @member {ITimestamp|null|undefined} timestamp
     * @memberof EventMsg
     * @instance
     */
    EventMsg.prototype.timestamp = null;

    /**
     * EventMsg telemetry.
     * @member {ITelemetryMsg|null|undefined} telemetry
     * @memberof EventMsg
     * @instance
     */
    EventMsg.prototype.telemetry = null;

    /**
     * EventMsg error.
     * @member {IErrorMsg|null|undefined} error
     * @memberof EventMsg
     * @instance
     */
    EventMsg.prototype.error = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * EventMsg event.
     * @member {"telemetry"|"error"|undefined} event
     * @memberof EventMsg
     * @instance
     */
    Object.defineProperty(EventMsg.prototype, "event", {
        get: $util.oneOfGetter($oneOfFields = ["telemetry", "error"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new EventMsg instance using the specified properties.
     * @function create
     * @memberof EventMsg
     * @static
     * @param {IEventMsg=} [properties] Properties to set
     * @returns {EventMsg} EventMsg instance
     */
    EventMsg.create = function create(properties) {
        return new EventMsg(properties);
    };

    /**
     * Encodes the specified EventMsg message. Does not implicitly {@link EventMsg.verify|verify} messages.
     * @function encode
     * @memberof EventMsg
     * @static
     * @param {IEventMsg} message EventMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            $root.Timestamp.encode(message.timestamp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.telemetry != null && Object.hasOwnProperty.call(message, "telemetry"))
            $root.TelemetryMsg.encode(message.telemetry, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            $root.ErrorMsg.encode(message.error, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EventMsg message, length delimited. Does not implicitly {@link EventMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EventMsg
     * @static
     * @param {IEventMsg} message EventMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EventMsg message from the specified reader or buffer.
     * @function decode
     * @memberof EventMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventMsg} EventMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.timestamp = $root.Timestamp.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.telemetry = $root.TelemetryMsg.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.error = $root.ErrorMsg.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EventMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EventMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EventMsg} EventMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EventMsg message.
     * @function verify
     * @memberof EventMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EventMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            var error = $root.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
        if (message.telemetry != null && message.hasOwnProperty("telemetry")) {
            properties.event = 1;
            {
                var error = $root.TelemetryMsg.verify(message.telemetry);
                if (error)
                    return "telemetry." + error;
            }
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                var error = $root.ErrorMsg.verify(message.error);
                if (error)
                    return "error." + error;
            }
        }
        return null;
    };

    /**
     * Creates an EventMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EventMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EventMsg} EventMsg
     */
    EventMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.EventMsg)
            return object;
        var message = new $root.EventMsg();
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".EventMsg.timestamp: object expected");
            message.timestamp = $root.Timestamp.fromObject(object.timestamp);
        }
        if (object.telemetry != null) {
            if (typeof object.telemetry !== "object")
                throw TypeError(".EventMsg.telemetry: object expected");
            message.telemetry = $root.TelemetryMsg.fromObject(object.telemetry);
        }
        if (object.error != null) {
            if (typeof object.error !== "object")
                throw TypeError(".EventMsg.error: object expected");
            message.error = $root.ErrorMsg.fromObject(object.error);
        }
        return message;
    };

    /**
     * Creates a plain object from an EventMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EventMsg
     * @static
     * @param {EventMsg} message EventMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EventMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.timestamp = null;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.Timestamp.toObject(message.timestamp, options);
        if (message.telemetry != null && message.hasOwnProperty("telemetry")) {
            object.telemetry = $root.TelemetryMsg.toObject(message.telemetry, options);
            if (options.oneofs)
                object.event = "telemetry";
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = $root.ErrorMsg.toObject(message.error, options);
            if (options.oneofs)
                object.event = "error";
        }
        return object;
    };

    /**
     * Converts this EventMsg to JSON.
     * @function toJSON
     * @memberof EventMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EventMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for EventMsg
     * @function getTypeUrl
     * @memberof EventMsg
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EventMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EventMsg";
    };

    return EventMsg;
})();

$root.EventQueueLeftResponse = (function() {

    /**
     * Properties of an EventQueueLeftResponse.
     * @exports IEventQueueLeftResponse
     * @interface IEventQueueLeftResponse
     * @property {number|null} [eventsLeftInTheQueue] EventQueueLeftResponse eventsLeftInTheQueue
     */

    /**
     * Constructs a new EventQueueLeftResponse.
     * @exports EventQueueLeftResponse
     * @classdesc Represents an EventQueueLeftResponse.
     * @implements IEventQueueLeftResponse
     * @constructor
     * @param {IEventQueueLeftResponse=} [properties] Properties to set
     */
    function EventQueueLeftResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventQueueLeftResponse eventsLeftInTheQueue.
     * @member {number} eventsLeftInTheQueue
     * @memberof EventQueueLeftResponse
     * @instance
     */
    EventQueueLeftResponse.prototype.eventsLeftInTheQueue = 0;

    /**
     * Creates a new EventQueueLeftResponse instance using the specified properties.
     * @function create
     * @memberof EventQueueLeftResponse
     * @static
     * @param {IEventQueueLeftResponse=} [properties] Properties to set
     * @returns {EventQueueLeftResponse} EventQueueLeftResponse instance
     */
    EventQueueLeftResponse.create = function create(properties) {
        return new EventQueueLeftResponse(properties);
    };

    /**
     * Encodes the specified EventQueueLeftResponse message. Does not implicitly {@link EventQueueLeftResponse.verify|verify} messages.
     * @function encode
     * @memberof EventQueueLeftResponse
     * @static
     * @param {IEventQueueLeftResponse} message EventQueueLeftResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventQueueLeftResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.eventsLeftInTheQueue != null && Object.hasOwnProperty.call(message, "eventsLeftInTheQueue"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.eventsLeftInTheQueue);
        return writer;
    };

    /**
     * Encodes the specified EventQueueLeftResponse message, length delimited. Does not implicitly {@link EventQueueLeftResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EventQueueLeftResponse
     * @static
     * @param {IEventQueueLeftResponse} message EventQueueLeftResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventQueueLeftResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EventQueueLeftResponse message from the specified reader or buffer.
     * @function decode
     * @memberof EventQueueLeftResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventQueueLeftResponse} EventQueueLeftResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventQueueLeftResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventQueueLeftResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.eventsLeftInTheQueue = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EventQueueLeftResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EventQueueLeftResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EventQueueLeftResponse} EventQueueLeftResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventQueueLeftResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EventQueueLeftResponse message.
     * @function verify
     * @memberof EventQueueLeftResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EventQueueLeftResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.eventsLeftInTheQueue != null && message.hasOwnProperty("eventsLeftInTheQueue"))
            if (!$util.isInteger(message.eventsLeftInTheQueue))
                return "eventsLeftInTheQueue: integer expected";
        return null;
    };

    /**
     * Creates an EventQueueLeftResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EventQueueLeftResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EventQueueLeftResponse} EventQueueLeftResponse
     */
    EventQueueLeftResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.EventQueueLeftResponse)
            return object;
        var message = new $root.EventQueueLeftResponse();
        if (object.eventsLeftInTheQueue != null)
            message.eventsLeftInTheQueue = object.eventsLeftInTheQueue >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an EventQueueLeftResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EventQueueLeftResponse
     * @static
     * @param {EventQueueLeftResponse} message EventQueueLeftResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EventQueueLeftResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.eventsLeftInTheQueue = 0;
        if (message.eventsLeftInTheQueue != null && message.hasOwnProperty("eventsLeftInTheQueue"))
            object.eventsLeftInTheQueue = message.eventsLeftInTheQueue;
        return object;
    };

    /**
     * Converts this EventQueueLeftResponse to JSON.
     * @function toJSON
     * @memberof EventQueueLeftResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EventQueueLeftResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for EventQueueLeftResponse
     * @function getTypeUrl
     * @memberof EventQueueLeftResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EventQueueLeftResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EventQueueLeftResponse";
    };

    return EventQueueLeftResponse;
})();

$root.RemoteControlCommand = (function() {

    /**
     * Properties of a RemoteControlCommand.
     * @exports IRemoteControlCommand
     * @interface IRemoteControlCommand
     * @property {number|null} [handle] RemoteControlCommand handle
     * @property {boolean|null} [fwdButton] RemoteControlCommand fwdButton
     * @property {boolean|null} [bwdButton] RemoteControlCommand bwdButton
     * @property {boolean|null} [errorsDisabled] RemoteControlCommand errorsDisabled
     */

    /**
     * Constructs a new RemoteControlCommand.
     * @exports RemoteControlCommand
     * @classdesc Represents a RemoteControlCommand.
     * @implements IRemoteControlCommand
     * @constructor
     * @param {IRemoteControlCommand=} [properties] Properties to set
     */
    function RemoteControlCommand(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RemoteControlCommand handle.
     * @member {number} handle
     * @memberof RemoteControlCommand
     * @instance
     */
    RemoteControlCommand.prototype.handle = 0;

    /**
     * RemoteControlCommand fwdButton.
     * @member {boolean} fwdButton
     * @memberof RemoteControlCommand
     * @instance
     */
    RemoteControlCommand.prototype.fwdButton = false;

    /**
     * RemoteControlCommand bwdButton.
     * @member {boolean} bwdButton
     * @memberof RemoteControlCommand
     * @instance
     */
    RemoteControlCommand.prototype.bwdButton = false;

    /**
     * RemoteControlCommand errorsDisabled.
     * @member {boolean} errorsDisabled
     * @memberof RemoteControlCommand
     * @instance
     */
    RemoteControlCommand.prototype.errorsDisabled = false;

    /**
     * Creates a new RemoteControlCommand instance using the specified properties.
     * @function create
     * @memberof RemoteControlCommand
     * @static
     * @param {IRemoteControlCommand=} [properties] Properties to set
     * @returns {RemoteControlCommand} RemoteControlCommand instance
     */
    RemoteControlCommand.create = function create(properties) {
        return new RemoteControlCommand(properties);
    };

    /**
     * Encodes the specified RemoteControlCommand message. Does not implicitly {@link RemoteControlCommand.verify|verify} messages.
     * @function encode
     * @memberof RemoteControlCommand
     * @static
     * @param {IRemoteControlCommand} message RemoteControlCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoteControlCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.handle != null && Object.hasOwnProperty.call(message, "handle"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.handle);
        if (message.fwdButton != null && Object.hasOwnProperty.call(message, "fwdButton"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fwdButton);
        if (message.bwdButton != null && Object.hasOwnProperty.call(message, "bwdButton"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.bwdButton);
        if (message.errorsDisabled != null && Object.hasOwnProperty.call(message, "errorsDisabled"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.errorsDisabled);
        return writer;
    };

    /**
     * Encodes the specified RemoteControlCommand message, length delimited. Does not implicitly {@link RemoteControlCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RemoteControlCommand
     * @static
     * @param {IRemoteControlCommand} message RemoteControlCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoteControlCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RemoteControlCommand message from the specified reader or buffer.
     * @function decode
     * @memberof RemoteControlCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RemoteControlCommand} RemoteControlCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoteControlCommand.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RemoteControlCommand();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.handle = reader.int32();
                    break;
                }
            case 2: {
                    message.fwdButton = reader.bool();
                    break;
                }
            case 3: {
                    message.bwdButton = reader.bool();
                    break;
                }
            case 4: {
                    message.errorsDisabled = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RemoteControlCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RemoteControlCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RemoteControlCommand} RemoteControlCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoteControlCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RemoteControlCommand message.
     * @function verify
     * @memberof RemoteControlCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RemoteControlCommand.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.handle != null && message.hasOwnProperty("handle"))
            if (!$util.isInteger(message.handle))
                return "handle: integer expected";
        if (message.fwdButton != null && message.hasOwnProperty("fwdButton"))
            if (typeof message.fwdButton !== "boolean")
                return "fwdButton: boolean expected";
        if (message.bwdButton != null && message.hasOwnProperty("bwdButton"))
            if (typeof message.bwdButton !== "boolean")
                return "bwdButton: boolean expected";
        if (message.errorsDisabled != null && message.hasOwnProperty("errorsDisabled"))
            if (typeof message.errorsDisabled !== "boolean")
                return "errorsDisabled: boolean expected";
        return null;
    };

    /**
     * Creates a RemoteControlCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RemoteControlCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RemoteControlCommand} RemoteControlCommand
     */
    RemoteControlCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.RemoteControlCommand)
            return object;
        var message = new $root.RemoteControlCommand();
        if (object.handle != null)
            message.handle = object.handle | 0;
        if (object.fwdButton != null)
            message.fwdButton = Boolean(object.fwdButton);
        if (object.bwdButton != null)
            message.bwdButton = Boolean(object.bwdButton);
        if (object.errorsDisabled != null)
            message.errorsDisabled = Boolean(object.errorsDisabled);
        return message;
    };

    /**
     * Creates a plain object from a RemoteControlCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RemoteControlCommand
     * @static
     * @param {RemoteControlCommand} message RemoteControlCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RemoteControlCommand.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.handle = 0;
            object.fwdButton = false;
            object.bwdButton = false;
            object.errorsDisabled = false;
        }
        if (message.handle != null && message.hasOwnProperty("handle"))
            object.handle = message.handle;
        if (message.fwdButton != null && message.hasOwnProperty("fwdButton"))
            object.fwdButton = message.fwdButton;
        if (message.bwdButton != null && message.hasOwnProperty("bwdButton"))
            object.bwdButton = message.bwdButton;
        if (message.errorsDisabled != null && message.hasOwnProperty("errorsDisabled"))
            object.errorsDisabled = message.errorsDisabled;
        return object;
    };

    /**
     * Converts this RemoteControlCommand to JSON.
     * @function toJSON
     * @memberof RemoteControlCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RemoteControlCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for RemoteControlCommand
     * @function getTypeUrl
     * @memberof RemoteControlCommand
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RemoteControlCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RemoteControlCommand";
    };

    return RemoteControlCommand;
})();

$root.AtccmStatus = (function() {

    /**
     * Properties of an AtccmStatus.
     * @exports IAtccmStatus
     * @interface IAtccmStatus
     * @property {UiMode|null} [mode] AtccmStatus mode
     * @property {boolean|null} [terminationEnabled] AtccmStatus terminationEnabled
     * @property {boolean|null} [chargerEnabled] AtccmStatus chargerEnabled
     * @property {boolean|null} [retractionEnabled] AtccmStatus retractionEnabled
     * @property {boolean|null} [jetModeEnabled] AtccmStatus jetModeEnabled
     * @property {number|null} [thrusterPosition] AtccmStatus thrusterPosition
     * @property {IMotorStatus|null} [motorStatus] AtccmStatus motorStatus
     * @property {IChargerStatus|null} [chargerStatus] AtccmStatus chargerStatus
     * @property {IVersions|null} [versions] AtccmStatus versions
     */

    /**
     * Constructs a new AtccmStatus.
     * @exports AtccmStatus
     * @classdesc Represents an AtccmStatus.
     * @implements IAtccmStatus
     * @constructor
     * @param {IAtccmStatus=} [properties] Properties to set
     */
    function AtccmStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtccmStatus mode.
     * @member {UiMode} mode
     * @memberof AtccmStatus
     * @instance
     */
    AtccmStatus.prototype.mode = 0;

    /**
     * AtccmStatus terminationEnabled.
     * @member {boolean} terminationEnabled
     * @memberof AtccmStatus
     * @instance
     */
    AtccmStatus.prototype.terminationEnabled = false;

    /**
     * AtccmStatus chargerEnabled.
     * @member {boolean} chargerEnabled
     * @memberof AtccmStatus
     * @instance
     */
    AtccmStatus.prototype.chargerEnabled = false;

    /**
     * AtccmStatus retractionEnabled.
     * @member {boolean} retractionEnabled
     * @memberof AtccmStatus
     * @instance
     */
    AtccmStatus.prototype.retractionEnabled = false;

    /**
     * AtccmStatus jetModeEnabled.
     * @member {boolean} jetModeEnabled
     * @memberof AtccmStatus
     * @instance
     */
    AtccmStatus.prototype.jetModeEnabled = false;

    /**
     * AtccmStatus thrusterPosition.
     * @member {number} thrusterPosition
     * @memberof AtccmStatus
     * @instance
     */
    AtccmStatus.prototype.thrusterPosition = 0;

    /**
     * AtccmStatus motorStatus.
     * @member {IMotorStatus|null|undefined} motorStatus
     * @memberof AtccmStatus
     * @instance
     */
    AtccmStatus.prototype.motorStatus = null;

    /**
     * AtccmStatus chargerStatus.
     * @member {IChargerStatus|null|undefined} chargerStatus
     * @memberof AtccmStatus
     * @instance
     */
    AtccmStatus.prototype.chargerStatus = null;

    /**
     * AtccmStatus versions.
     * @member {IVersions|null|undefined} versions
     * @memberof AtccmStatus
     * @instance
     */
    AtccmStatus.prototype.versions = null;

    /**
     * Creates a new AtccmStatus instance using the specified properties.
     * @function create
     * @memberof AtccmStatus
     * @static
     * @param {IAtccmStatus=} [properties] Properties to set
     * @returns {AtccmStatus} AtccmStatus instance
     */
    AtccmStatus.create = function create(properties) {
        return new AtccmStatus(properties);
    };

    /**
     * Encodes the specified AtccmStatus message. Does not implicitly {@link AtccmStatus.verify|verify} messages.
     * @function encode
     * @memberof AtccmStatus
     * @static
     * @param {IAtccmStatus} message AtccmStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtccmStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
        if (message.terminationEnabled != null && Object.hasOwnProperty.call(message, "terminationEnabled"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.terminationEnabled);
        if (message.chargerEnabled != null && Object.hasOwnProperty.call(message, "chargerEnabled"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.chargerEnabled);
        if (message.motorStatus != null && Object.hasOwnProperty.call(message, "motorStatus"))
            $root.MotorStatus.encode(message.motorStatus, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.chargerStatus != null && Object.hasOwnProperty.call(message, "chargerStatus"))
            $root.ChargerStatus.encode(message.chargerStatus, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.versions != null && Object.hasOwnProperty.call(message, "versions"))
            $root.Versions.encode(message.versions, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.thrusterPosition != null && Object.hasOwnProperty.call(message, "thrusterPosition"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.thrusterPosition);
        if (message.retractionEnabled != null && Object.hasOwnProperty.call(message, "retractionEnabled"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.retractionEnabled);
        if (message.jetModeEnabled != null && Object.hasOwnProperty.call(message, "jetModeEnabled"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.jetModeEnabled);
        return writer;
    };

    /**
     * Encodes the specified AtccmStatus message, length delimited. Does not implicitly {@link AtccmStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtccmStatus
     * @static
     * @param {IAtccmStatus} message AtccmStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtccmStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtccmStatus message from the specified reader or buffer.
     * @function decode
     * @memberof AtccmStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtccmStatus} AtccmStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtccmStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtccmStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.mode = reader.int32();
                    break;
                }
            case 2: {
                    message.terminationEnabled = reader.bool();
                    break;
                }
            case 3: {
                    message.chargerEnabled = reader.bool();
                    break;
                }
            case 9: {
                    message.retractionEnabled = reader.bool();
                    break;
                }
            case 10: {
                    message.jetModeEnabled = reader.bool();
                    break;
                }
            case 8: {
                    message.thrusterPosition = reader.uint32();
                    break;
                }
            case 5: {
                    message.motorStatus = $root.MotorStatus.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.chargerStatus = $root.ChargerStatus.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.versions = $root.Versions.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtccmStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtccmStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtccmStatus} AtccmStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtccmStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtccmStatus message.
     * @function verify
     * @memberof AtccmStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtccmStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            switch (message.mode) {
            default:
                return "mode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.terminationEnabled != null && message.hasOwnProperty("terminationEnabled"))
            if (typeof message.terminationEnabled !== "boolean")
                return "terminationEnabled: boolean expected";
        if (message.chargerEnabled != null && message.hasOwnProperty("chargerEnabled"))
            if (typeof message.chargerEnabled !== "boolean")
                return "chargerEnabled: boolean expected";
        if (message.retractionEnabled != null && message.hasOwnProperty("retractionEnabled"))
            if (typeof message.retractionEnabled !== "boolean")
                return "retractionEnabled: boolean expected";
        if (message.jetModeEnabled != null && message.hasOwnProperty("jetModeEnabled"))
            if (typeof message.jetModeEnabled !== "boolean")
                return "jetModeEnabled: boolean expected";
        if (message.thrusterPosition != null && message.hasOwnProperty("thrusterPosition"))
            if (!$util.isInteger(message.thrusterPosition))
                return "thrusterPosition: integer expected";
        if (message.motorStatus != null && message.hasOwnProperty("motorStatus")) {
            var error = $root.MotorStatus.verify(message.motorStatus);
            if (error)
                return "motorStatus." + error;
        }
        if (message.chargerStatus != null && message.hasOwnProperty("chargerStatus")) {
            var error = $root.ChargerStatus.verify(message.chargerStatus);
            if (error)
                return "chargerStatus." + error;
        }
        if (message.versions != null && message.hasOwnProperty("versions")) {
            var error = $root.Versions.verify(message.versions);
            if (error)
                return "versions." + error;
        }
        return null;
    };

    /**
     * Creates an AtccmStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtccmStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtccmStatus} AtccmStatus
     */
    AtccmStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.AtccmStatus)
            return object;
        var message = new $root.AtccmStatus();
        switch (object.mode) {
        default:
            if (typeof object.mode === "number") {
                message.mode = object.mode;
                break;
            }
            break;
        case "DEFAULT":
        case 0:
            message.mode = 0;
            break;
        case "MOTOR":
        case 1:
            message.mode = 1;
            break;
        case "CHARGE_NO_THROTTLE":
        case 2:
            message.mode = 2;
            break;
        case "CHARGE_THROTTLE":
        case 3:
            message.mode = 3;
            break;
        }
        if (object.terminationEnabled != null)
            message.terminationEnabled = Boolean(object.terminationEnabled);
        if (object.chargerEnabled != null)
            message.chargerEnabled = Boolean(object.chargerEnabled);
        if (object.retractionEnabled != null)
            message.retractionEnabled = Boolean(object.retractionEnabled);
        if (object.jetModeEnabled != null)
            message.jetModeEnabled = Boolean(object.jetModeEnabled);
        if (object.thrusterPosition != null)
            message.thrusterPosition = object.thrusterPosition >>> 0;
        if (object.motorStatus != null) {
            if (typeof object.motorStatus !== "object")
                throw TypeError(".AtccmStatus.motorStatus: object expected");
            message.motorStatus = $root.MotorStatus.fromObject(object.motorStatus);
        }
        if (object.chargerStatus != null) {
            if (typeof object.chargerStatus !== "object")
                throw TypeError(".AtccmStatus.chargerStatus: object expected");
            message.chargerStatus = $root.ChargerStatus.fromObject(object.chargerStatus);
        }
        if (object.versions != null) {
            if (typeof object.versions !== "object")
                throw TypeError(".AtccmStatus.versions: object expected");
            message.versions = $root.Versions.fromObject(object.versions);
        }
        return message;
    };

    /**
     * Creates a plain object from an AtccmStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtccmStatus
     * @static
     * @param {AtccmStatus} message AtccmStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtccmStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mode = options.enums === String ? "DEFAULT" : 0;
            object.terminationEnabled = false;
            object.chargerEnabled = false;
            object.motorStatus = null;
            object.chargerStatus = null;
            object.versions = null;
            object.thrusterPosition = 0;
            object.retractionEnabled = false;
            object.jetModeEnabled = false;
        }
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = options.enums === String ? $root.UiMode[message.mode] === undefined ? message.mode : $root.UiMode[message.mode] : message.mode;
        if (message.terminationEnabled != null && message.hasOwnProperty("terminationEnabled"))
            object.terminationEnabled = message.terminationEnabled;
        if (message.chargerEnabled != null && message.hasOwnProperty("chargerEnabled"))
            object.chargerEnabled = message.chargerEnabled;
        if (message.motorStatus != null && message.hasOwnProperty("motorStatus"))
            object.motorStatus = $root.MotorStatus.toObject(message.motorStatus, options);
        if (message.chargerStatus != null && message.hasOwnProperty("chargerStatus"))
            object.chargerStatus = $root.ChargerStatus.toObject(message.chargerStatus, options);
        if (message.versions != null && message.hasOwnProperty("versions"))
            object.versions = $root.Versions.toObject(message.versions, options);
        if (message.thrusterPosition != null && message.hasOwnProperty("thrusterPosition"))
            object.thrusterPosition = message.thrusterPosition;
        if (message.retractionEnabled != null && message.hasOwnProperty("retractionEnabled"))
            object.retractionEnabled = message.retractionEnabled;
        if (message.jetModeEnabled != null && message.hasOwnProperty("jetModeEnabled"))
            object.jetModeEnabled = message.jetModeEnabled;
        return object;
    };

    /**
     * Converts this AtccmStatus to JSON.
     * @function toJSON
     * @memberof AtccmStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtccmStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for AtccmStatus
     * @function getTypeUrl
     * @memberof AtccmStatus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AtccmStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AtccmStatus";
    };

    return AtccmStatus;
})();

$root.Values = (function() {

    /**
     * Properties of a Values.
     * @exports IValues
     * @interface IValues
     * @property {boolean|null} [terminationEnabled] Values terminationEnabled
     * @property {boolean|null} [chargerOn] Values chargerOn
     * @property {number|null} [blinks] Values blinks
     * @property {number|null} [thrusterPosition] Values thrusterPosition
     * @property {boolean|null} [retractionEnabled] Values retractionEnabled
     * @property {boolean|null} [jetModeEnabled] Values jetModeEnabled
     */

    /**
     * Constructs a new Values.
     * @exports Values
     * @classdesc Represents a Values.
     * @implements IValues
     * @constructor
     * @param {IValues=} [properties] Properties to set
     */
    function Values(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Values terminationEnabled.
     * @member {boolean} terminationEnabled
     * @memberof Values
     * @instance
     */
    Values.prototype.terminationEnabled = false;

    /**
     * Values chargerOn.
     * @member {boolean} chargerOn
     * @memberof Values
     * @instance
     */
    Values.prototype.chargerOn = false;

    /**
     * Values blinks.
     * @member {number} blinks
     * @memberof Values
     * @instance
     */
    Values.prototype.blinks = 0;

    /**
     * Values thrusterPosition.
     * @member {number} thrusterPosition
     * @memberof Values
     * @instance
     */
    Values.prototype.thrusterPosition = 0;

    /**
     * Values retractionEnabled.
     * @member {boolean} retractionEnabled
     * @memberof Values
     * @instance
     */
    Values.prototype.retractionEnabled = false;

    /**
     * Values jetModeEnabled.
     * @member {boolean} jetModeEnabled
     * @memberof Values
     * @instance
     */
    Values.prototype.jetModeEnabled = false;

    /**
     * Creates a new Values instance using the specified properties.
     * @function create
     * @memberof Values
     * @static
     * @param {IValues=} [properties] Properties to set
     * @returns {Values} Values instance
     */
    Values.create = function create(properties) {
        return new Values(properties);
    };

    /**
     * Encodes the specified Values message. Does not implicitly {@link Values.verify|verify} messages.
     * @function encode
     * @memberof Values
     * @static
     * @param {IValues} message Values message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Values.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.terminationEnabled != null && Object.hasOwnProperty.call(message, "terminationEnabled"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.terminationEnabled);
        if (message.chargerOn != null && Object.hasOwnProperty.call(message, "chargerOn"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.chargerOn);
        if (message.blinks != null && Object.hasOwnProperty.call(message, "blinks"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.blinks);
        if (message.thrusterPosition != null && Object.hasOwnProperty.call(message, "thrusterPosition"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.thrusterPosition);
        if (message.retractionEnabled != null && Object.hasOwnProperty.call(message, "retractionEnabled"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.retractionEnabled);
        if (message.jetModeEnabled != null && Object.hasOwnProperty.call(message, "jetModeEnabled"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.jetModeEnabled);
        return writer;
    };

    /**
     * Encodes the specified Values message, length delimited. Does not implicitly {@link Values.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Values
     * @static
     * @param {IValues} message Values message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Values.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Values message from the specified reader or buffer.
     * @function decode
     * @memberof Values
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Values} Values
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Values.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Values();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.terminationEnabled = reader.bool();
                    break;
                }
            case 2: {
                    message.chargerOn = reader.bool();
                    break;
                }
            case 3: {
                    message.blinks = reader.uint32();
                    break;
                }
            case 4: {
                    message.thrusterPosition = reader.uint32();
                    break;
                }
            case 5: {
                    message.retractionEnabled = reader.bool();
                    break;
                }
            case 6: {
                    message.jetModeEnabled = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Values message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Values
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Values} Values
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Values.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Values message.
     * @function verify
     * @memberof Values
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Values.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.terminationEnabled != null && message.hasOwnProperty("terminationEnabled"))
            if (typeof message.terminationEnabled !== "boolean")
                return "terminationEnabled: boolean expected";
        if (message.chargerOn != null && message.hasOwnProperty("chargerOn"))
            if (typeof message.chargerOn !== "boolean")
                return "chargerOn: boolean expected";
        if (message.blinks != null && message.hasOwnProperty("blinks"))
            if (!$util.isInteger(message.blinks))
                return "blinks: integer expected";
        if (message.thrusterPosition != null && message.hasOwnProperty("thrusterPosition"))
            if (!$util.isInteger(message.thrusterPosition))
                return "thrusterPosition: integer expected";
        if (message.retractionEnabled != null && message.hasOwnProperty("retractionEnabled"))
            if (typeof message.retractionEnabled !== "boolean")
                return "retractionEnabled: boolean expected";
        if (message.jetModeEnabled != null && message.hasOwnProperty("jetModeEnabled"))
            if (typeof message.jetModeEnabled !== "boolean")
                return "jetModeEnabled: boolean expected";
        return null;
    };

    /**
     * Creates a Values message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Values
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Values} Values
     */
    Values.fromObject = function fromObject(object) {
        if (object instanceof $root.Values)
            return object;
        var message = new $root.Values();
        if (object.terminationEnabled != null)
            message.terminationEnabled = Boolean(object.terminationEnabled);
        if (object.chargerOn != null)
            message.chargerOn = Boolean(object.chargerOn);
        if (object.blinks != null)
            message.blinks = object.blinks >>> 0;
        if (object.thrusterPosition != null)
            message.thrusterPosition = object.thrusterPosition >>> 0;
        if (object.retractionEnabled != null)
            message.retractionEnabled = Boolean(object.retractionEnabled);
        if (object.jetModeEnabled != null)
            message.jetModeEnabled = Boolean(object.jetModeEnabled);
        return message;
    };

    /**
     * Creates a plain object from a Values message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Values
     * @static
     * @param {Values} message Values
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Values.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.terminationEnabled = false;
            object.chargerOn = false;
            object.blinks = 0;
            object.thrusterPosition = 0;
            object.retractionEnabled = false;
            object.jetModeEnabled = false;
        }
        if (message.terminationEnabled != null && message.hasOwnProperty("terminationEnabled"))
            object.terminationEnabled = message.terminationEnabled;
        if (message.chargerOn != null && message.hasOwnProperty("chargerOn"))
            object.chargerOn = message.chargerOn;
        if (message.blinks != null && message.hasOwnProperty("blinks"))
            object.blinks = message.blinks;
        if (message.thrusterPosition != null && message.hasOwnProperty("thrusterPosition"))
            object.thrusterPosition = message.thrusterPosition;
        if (message.retractionEnabled != null && message.hasOwnProperty("retractionEnabled"))
            object.retractionEnabled = message.retractionEnabled;
        if (message.jetModeEnabled != null && message.hasOwnProperty("jetModeEnabled"))
            object.jetModeEnabled = message.jetModeEnabled;
        return object;
    };

    /**
     * Converts this Values to JSON.
     * @function toJSON
     * @memberof Values
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Values.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for Values
     * @function getTypeUrl
     * @memberof Values
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Values.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Values";
    };

    return Values;
})();

$root.AtccmPacket = (function() {

    /**
     * Properties of an AtccmPacket.
     * @exports IAtccmPacket
     * @interface IAtccmPacket
     * @property {number|null} [protocolVersion] AtccmPacket protocolVersion
     * @property {Command|null} [command] AtccmPacket command
     * @property {boolean|null} [write] AtccmPacket write
     * @property {IAtccmStatus|null} [status] AtccmPacket status
     * @property {IValues|null} [values] AtccmPacket values
     */

    /**
     * Constructs a new AtccmPacket.
     * @exports AtccmPacket
     * @classdesc Represents an AtccmPacket.
     * @implements IAtccmPacket
     * @constructor
     * @param {IAtccmPacket=} [properties] Properties to set
     */
    function AtccmPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtccmPacket protocolVersion.
     * @member {number} protocolVersion
     * @memberof AtccmPacket
     * @instance
     */
    AtccmPacket.prototype.protocolVersion = 0;

    /**
     * AtccmPacket command.
     * @member {Command} command
     * @memberof AtccmPacket
     * @instance
     */
    AtccmPacket.prototype.command = 0;

    /**
     * AtccmPacket write.
     * @member {boolean} write
     * @memberof AtccmPacket
     * @instance
     */
    AtccmPacket.prototype.write = false;

    /**
     * AtccmPacket status.
     * @member {IAtccmStatus|null|undefined} status
     * @memberof AtccmPacket
     * @instance
     */
    AtccmPacket.prototype.status = null;

    /**
     * AtccmPacket values.
     * @member {IValues|null|undefined} values
     * @memberof AtccmPacket
     * @instance
     */
    AtccmPacket.prototype.values = null;

    /**
     * Creates a new AtccmPacket instance using the specified properties.
     * @function create
     * @memberof AtccmPacket
     * @static
     * @param {IAtccmPacket=} [properties] Properties to set
     * @returns {AtccmPacket} AtccmPacket instance
     */
    AtccmPacket.create = function create(properties) {
        return new AtccmPacket(properties);
    };

    /**
     * Encodes the specified AtccmPacket message. Does not implicitly {@link AtccmPacket.verify|verify} messages.
     * @function encode
     * @memberof AtccmPacket
     * @static
     * @param {IAtccmPacket} message AtccmPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtccmPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.protocolVersion);
        if (message.command != null && Object.hasOwnProperty.call(message, "command"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.command);
        if (message.write != null && Object.hasOwnProperty.call(message, "write"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.write);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            $root.AtccmStatus.encode(message.status, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.values != null && Object.hasOwnProperty.call(message, "values"))
            $root.Values.encode(message.values, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AtccmPacket message, length delimited. Does not implicitly {@link AtccmPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtccmPacket
     * @static
     * @param {IAtccmPacket} message AtccmPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtccmPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtccmPacket message from the specified reader or buffer.
     * @function decode
     * @memberof AtccmPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtccmPacket} AtccmPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtccmPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtccmPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.protocolVersion = reader.uint32();
                    break;
                }
            case 2: {
                    message.command = reader.int32();
                    break;
                }
            case 3: {
                    message.write = reader.bool();
                    break;
                }
            case 4: {
                    message.status = $root.AtccmStatus.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.values = $root.Values.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtccmPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtccmPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtccmPacket} AtccmPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtccmPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtccmPacket message.
     * @function verify
     * @memberof AtccmPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtccmPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
            if (!$util.isInteger(message.protocolVersion))
                return "protocolVersion: integer expected";
        if (message.command != null && message.hasOwnProperty("command"))
            switch (message.command) {
            default:
                return "command: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                break;
            }
        if (message.write != null && message.hasOwnProperty("write"))
            if (typeof message.write !== "boolean")
                return "write: boolean expected";
        if (message.status != null && message.hasOwnProperty("status")) {
            var error = $root.AtccmStatus.verify(message.status);
            if (error)
                return "status." + error;
        }
        if (message.values != null && message.hasOwnProperty("values")) {
            var error = $root.Values.verify(message.values);
            if (error)
                return "values." + error;
        }
        return null;
    };

    /**
     * Creates an AtccmPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtccmPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtccmPacket} AtccmPacket
     */
    AtccmPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.AtccmPacket)
            return object;
        var message = new $root.AtccmPacket();
        if (object.protocolVersion != null)
            message.protocolVersion = object.protocolVersion >>> 0;
        switch (object.command) {
        default:
            if (typeof object.command === "number") {
                message.command = object.command;
                break;
            }
            break;
        case "NOOP":
        case 0:
            message.command = 0;
            break;
        case "STATUS":
        case 1:
            message.command = 1;
            break;
        case "BLINK":
        case 2:
            message.command = 2;
            break;
        case "TERMINATION":
        case 3:
            message.command = 3;
            break;
        case "CHARGER_ON":
        case 4:
            message.command = 4;
            break;
        case "VERSION":
        case 5:
            message.command = 5;
            break;
        case "THRUSTER_POSITION":
        case 6:
            message.command = 6;
            break;
        case "READ_EVENT_LOG_SIZE":
        case 7:
            message.command = 7;
            break;
        case "READ_NEXT_EVENT_FROM_LOG":
        case 8:
            message.command = 8;
            break;
        case "CLEAR_ERRORS":
        case 9:
            message.command = 9;
            break;
        case "RETRACTION_ENABLED":
        case 10:
            message.command = 10;
            break;
        case "JET_MODE_ENABLED":
        case 11:
            message.command = 11;
            break;
        }
        if (object.write != null)
            message.write = Boolean(object.write);
        if (object.status != null) {
            if (typeof object.status !== "object")
                throw TypeError(".AtccmPacket.status: object expected");
            message.status = $root.AtccmStatus.fromObject(object.status);
        }
        if (object.values != null) {
            if (typeof object.values !== "object")
                throw TypeError(".AtccmPacket.values: object expected");
            message.values = $root.Values.fromObject(object.values);
        }
        return message;
    };

    /**
     * Creates a plain object from an AtccmPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtccmPacket
     * @static
     * @param {AtccmPacket} message AtccmPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtccmPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.protocolVersion = 0;
            object.command = options.enums === String ? "NOOP" : 0;
            object.write = false;
            object.status = null;
            object.values = null;
        }
        if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
            object.protocolVersion = message.protocolVersion;
        if (message.command != null && message.hasOwnProperty("command"))
            object.command = options.enums === String ? $root.Command[message.command] === undefined ? message.command : $root.Command[message.command] : message.command;
        if (message.write != null && message.hasOwnProperty("write"))
            object.write = message.write;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = $root.AtccmStatus.toObject(message.status, options);
        if (message.values != null && message.hasOwnProperty("values"))
            object.values = $root.Values.toObject(message.values, options);
        return object;
    };

    /**
     * Converts this AtccmPacket to JSON.
     * @function toJSON
     * @memberof AtccmPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtccmPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, util.toJSONOptions);
    };

    /**
     * Gets the default type url for AtccmPacket
     * @function getTypeUrl
     * @memberof AtccmPacket
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AtccmPacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AtccmPacket";
    };

    return AtccmPacket;
})();

export default $root;
