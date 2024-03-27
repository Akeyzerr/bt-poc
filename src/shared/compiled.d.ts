import * as $protobuf from "protobufjs";
import Long = require("long");
/** Command enum. */
export enum Command {
    NOOP = 0,
    STATUS = 1,
    BLINK = 2,
    TERMINATION = 3,
    CHARGER_ON = 4,
    VERSION = 5,
    THRUSTER_POSITION = 6,
    READ_EVENT_LOG_SIZE = 7,
    READ_NEXT_EVENT_FROM_LOG = 8,
    CLEAR_ERRORS = 9,
    RETRACTION_ENABLED = 10,
    JET_MODE_ENABLED = 11
}

/** Represents a Timestamp. */
export class Timestamp implements ITimestamp {

    /**
     * Constructs a new Timestamp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimestamp);

    /** Timestamp seconds. */
    public seconds: (number|Long);

    /** Timestamp nanos. */
    public nanos: number;

    /**
     * Creates a new Timestamp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Timestamp instance
     */
    public static create(properties?: ITimestamp): Timestamp;

    /**
     * Encodes the specified Timestamp message. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @param message Timestamp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @param message Timestamp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Timestamp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Timestamp;

    /**
     * Decodes a Timestamp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Timestamp;

    /**
     * Verifies a Timestamp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Timestamp
     */
    public static fromObject(object: { [k: string]: any }): Timestamp;

    /**
     * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
     * @param message Timestamp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Timestamp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Timestamp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** SystemState enum. */
export enum SystemState {
    STATE_UNSPECIFIED = 0,
    STATE_INITIALIZING = 1,
    STATE_OPERATIONAL = 2,
    STATE_PRESLEEP = 3,
    STATE_SLEEP = 4,
    STATE_ERROR = 15
}

/** EventSource enum. */
export enum EventSource {
    SRC_UNSPECIFIED = 0,
    SRC_ATCCM = 1,
    SRC_MOTOR = 2,
    SRC_CHARGER = 3,
    SRC_ATCCM_1 = 10,
    SRC_MOTOR_1 = 11,
    SRC_CHARGER_1 = 12,
    SRC_ATCCM_2 = 20,
    SRC_MOTOR_2 = 21,
    SRC_CHARGER_2 = 22,
    SRC_ATCCM_3 = 30,
    SRC_MOTOR_3 = 31,
    SRC_CHARGER_3 = 32
}

/** ChargeStatus enum. */
export enum ChargeStatus {
    STOP = 0,
    RESET = 1,
    SOFT_START = 2,
    SEARCH_PHASE = 3,
    BOOST = 4,
    ABSORPTION = 5,
    FLOATING = 6,
    EGALISATION = 7,
    DESULFATATION = 8,
    CONTROL_UI = 9,
    UNKNOWN = 255
}

/** UiMode enum. */
export enum UiMode {
    DEFAULT = 0,
    MOTOR = 1,
    CHARGE_NO_THROTTLE = 2,
    CHARGE_THROTTLE = 3
}

/** Represents a ChargerStatus. */
export class ChargerStatus implements IChargerStatus {

    /**
     * Constructs a new ChargerStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChargerStatus);

    /** ChargerStatus status. */
    public status: ChargeStatus;

    /** ChargerStatus enabled. */
    public enabled: boolean;

    /** ChargerStatus batteryVoltage. */
    public batteryVoltage: number;

    /** ChargerStatus outputCurrent. */
    public outputCurrent: number;

    /** ChargerStatus externalProbeTemperature. */
    public externalProbeTemperature: number;

    /** ChargerStatus id. */
    public id: EventSource;

    /**
     * Creates a new ChargerStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChargerStatus instance
     */
    public static create(properties?: IChargerStatus): ChargerStatus;

    /**
     * Encodes the specified ChargerStatus message. Does not implicitly {@link ChargerStatus.verify|verify} messages.
     * @param message ChargerStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChargerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChargerStatus message, length delimited. Does not implicitly {@link ChargerStatus.verify|verify} messages.
     * @param message ChargerStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChargerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChargerStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChargerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChargerStatus;

    /**
     * Decodes a ChargerStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChargerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChargerStatus;

    /**
     * Verifies a ChargerStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChargerStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChargerStatus
     */
    public static fromObject(object: { [k: string]: any }): ChargerStatus;

    /**
     * Creates a plain object from a ChargerStatus message. Also converts values to other types if specified.
     * @param message ChargerStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChargerStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChargerStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ChargerStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MotorStatus. */
export class MotorStatus implements IMotorStatus {

    /**
     * Constructs a new MotorStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMotorStatus);

    /** MotorStatus rpm. */
    public rpm: number;

    /** MotorStatus enabled. */
    public enabled: boolean;

    /** MotorStatus current. */
    public current: number;

    /** MotorStatus controllerTemperature. */
    public controllerTemperature: number;

    /** MotorStatus motorTemperature. */
    public motorTemperature: number;

    /** MotorStatus throttle. */
    public throttle: number;

    /** MotorStatus errorCode. */
    public errorCode: number;

    /** MotorStatus batteryVoltage. */
    public batteryVoltage: number;

    /** MotorStatus id. */
    public id: EventSource;

    /**
     * Creates a new MotorStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MotorStatus instance
     */
    public static create(properties?: IMotorStatus): MotorStatus;

    /**
     * Encodes the specified MotorStatus message. Does not implicitly {@link MotorStatus.verify|verify} messages.
     * @param message MotorStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMotorStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MotorStatus message, length delimited. Does not implicitly {@link MotorStatus.verify|verify} messages.
     * @param message MotorStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMotorStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MotorStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MotorStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MotorStatus;

    /**
     * Decodes a MotorStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MotorStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MotorStatus;

    /**
     * Verifies a MotorStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MotorStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MotorStatus
     */
    public static fromObject(object: { [k: string]: any }): MotorStatus;

    /**
     * Creates a plain object from a MotorStatus message. Also converts values to other types if specified.
     * @param message MotorStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MotorStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MotorStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MotorStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Versions. */
export class Versions implements IVersions {

    /**
     * Constructs a new Versions.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVersions);

    /** Versions softwareVersion. */
    public softwareVersion: string;

    /** Versions bootloaderVersion. */
    public bootloaderVersion: string;

    /**
     * Creates a new Versions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Versions instance
     */
    public static create(properties?: IVersions): Versions;

    /**
     * Encodes the specified Versions message. Does not implicitly {@link Versions.verify|verify} messages.
     * @param message Versions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVersions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Versions message, length delimited. Does not implicitly {@link Versions.verify|verify} messages.
     * @param message Versions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVersions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Versions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Versions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Versions;

    /**
     * Decodes a Versions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Versions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Versions;

    /**
     * Verifies a Versions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Versions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Versions
     */
    public static fromObject(object: { [k: string]: any }): Versions;

    /**
     * Creates a plain object from a Versions message. Also converts values to other types if specified.
     * @param message Versions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Versions, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Versions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Versions
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TelemetryMsg. */
export class TelemetryMsg implements ITelemetryMsg {

    /**
     * Constructs a new TelemetryMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITelemetryMsg);

    /** TelemetryMsg systemState. */
    public systemState: SystemState;

    /** TelemetryMsg motors. */
    public motors: IMotorStatus[];

    /** TelemetryMsg chargers. */
    public chargers: IChargerStatus[];

    /**
     * Creates a new TelemetryMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TelemetryMsg instance
     */
    public static create(properties?: ITelemetryMsg): TelemetryMsg;

    /**
     * Encodes the specified TelemetryMsg message. Does not implicitly {@link TelemetryMsg.verify|verify} messages.
     * @param message TelemetryMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITelemetryMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TelemetryMsg message, length delimited. Does not implicitly {@link TelemetryMsg.verify|verify} messages.
     * @param message TelemetryMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITelemetryMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TelemetryMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TelemetryMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TelemetryMsg;

    /**
     * Decodes a TelemetryMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TelemetryMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TelemetryMsg;

    /**
     * Verifies a TelemetryMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TelemetryMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TelemetryMsg
     */
    public static fromObject(object: { [k: string]: any }): TelemetryMsg;

    /**
     * Creates a plain object from a TelemetryMsg message. Also converts values to other types if specified.
     * @param message TelemetryMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TelemetryMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TelemetryMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TelemetryMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an ErrorMsg. */
export class ErrorMsg implements IErrorMsg {

    /**
     * Constructs a new ErrorMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IErrorMsg);

    /** ErrorMsg source. */
    public source: EventSource;

    /** ErrorMsg code. */
    public code: number;

    /** ErrorMsg text. */
    public text: string;

    /**
     * Creates a new ErrorMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ErrorMsg instance
     */
    public static create(properties?: IErrorMsg): ErrorMsg;

    /**
     * Encodes the specified ErrorMsg message. Does not implicitly {@link ErrorMsg.verify|verify} messages.
     * @param message ErrorMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IErrorMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ErrorMsg message, length delimited. Does not implicitly {@link ErrorMsg.verify|verify} messages.
     * @param message ErrorMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IErrorMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ErrorMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ErrorMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ErrorMsg;

    /**
     * Decodes an ErrorMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ErrorMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ErrorMsg;

    /**
     * Verifies an ErrorMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ErrorMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ErrorMsg
     */
    public static fromObject(object: { [k: string]: any }): ErrorMsg;

    /**
     * Creates a plain object from an ErrorMsg message. Also converts values to other types if specified.
     * @param message ErrorMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ErrorMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ErrorMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ErrorMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an EventMsg. */
export class EventMsg implements IEventMsg {

    /**
     * Constructs a new EventMsg.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventMsg);

    /** EventMsg timestamp. */
    public timestamp?: (ITimestamp|null);

    /** EventMsg telemetry. */
    public telemetry?: (ITelemetryMsg|null);

    /** EventMsg error. */
    public error?: (IErrorMsg|null);

    /** EventMsg event. */
    public event?: ("telemetry"|"error");

    /**
     * Creates a new EventMsg instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EventMsg instance
     */
    public static create(properties?: IEventMsg): EventMsg;

    /**
     * Encodes the specified EventMsg message. Does not implicitly {@link EventMsg.verify|verify} messages.
     * @param message EventMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEventMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EventMsg message, length delimited. Does not implicitly {@link EventMsg.verify|verify} messages.
     * @param message EventMsg message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEventMsg, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventMsg message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EventMsg;

    /**
     * Decodes an EventMsg message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EventMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EventMsg;

    /**
     * Verifies an EventMsg message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EventMsg message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EventMsg
     */
    public static fromObject(object: { [k: string]: any }): EventMsg;

    /**
     * Creates a plain object from an EventMsg message. Also converts values to other types if specified.
     * @param message EventMsg
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EventMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EventMsg to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EventMsg
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an EventQueueLeftResponse. */
export class EventQueueLeftResponse implements IEventQueueLeftResponse {

    /**
     * Constructs a new EventQueueLeftResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventQueueLeftResponse);

    /** EventQueueLeftResponse eventsLeftInTheQueue. */
    public eventsLeftInTheQueue: number;

    /**
     * Creates a new EventQueueLeftResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EventQueueLeftResponse instance
     */
    public static create(properties?: IEventQueueLeftResponse): EventQueueLeftResponse;

    /**
     * Encodes the specified EventQueueLeftResponse message. Does not implicitly {@link EventQueueLeftResponse.verify|verify} messages.
     * @param message EventQueueLeftResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEventQueueLeftResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EventQueueLeftResponse message, length delimited. Does not implicitly {@link EventQueueLeftResponse.verify|verify} messages.
     * @param message EventQueueLeftResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEventQueueLeftResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventQueueLeftResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventQueueLeftResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EventQueueLeftResponse;

    /**
     * Decodes an EventQueueLeftResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EventQueueLeftResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EventQueueLeftResponse;

    /**
     * Verifies an EventQueueLeftResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EventQueueLeftResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EventQueueLeftResponse
     */
    public static fromObject(object: { [k: string]: any }): EventQueueLeftResponse;

    /**
     * Creates a plain object from an EventQueueLeftResponse message. Also converts values to other types if specified.
     * @param message EventQueueLeftResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EventQueueLeftResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EventQueueLeftResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EventQueueLeftResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RemoteControlCommand. */
export class RemoteControlCommand implements IRemoteControlCommand {

    /**
     * Constructs a new RemoteControlCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRemoteControlCommand);

    /** RemoteControlCommand handle. */
    public handle: number;

    /** RemoteControlCommand fwdButton. */
    public fwdButton: boolean;

    /** RemoteControlCommand bwdButton. */
    public bwdButton: boolean;

    /** RemoteControlCommand errorsDisabled. */
    public errorsDisabled: boolean;

    /**
     * Creates a new RemoteControlCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RemoteControlCommand instance
     */
    public static create(properties?: IRemoteControlCommand): RemoteControlCommand;

    /**
     * Encodes the specified RemoteControlCommand message. Does not implicitly {@link RemoteControlCommand.verify|verify} messages.
     * @param message RemoteControlCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRemoteControlCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RemoteControlCommand message, length delimited. Does not implicitly {@link RemoteControlCommand.verify|verify} messages.
     * @param message RemoteControlCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRemoteControlCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RemoteControlCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RemoteControlCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RemoteControlCommand;

    /**
     * Decodes a RemoteControlCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RemoteControlCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RemoteControlCommand;

    /**
     * Verifies a RemoteControlCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RemoteControlCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RemoteControlCommand
     */
    public static fromObject(object: { [k: string]: any }): RemoteControlCommand;

    /**
     * Creates a plain object from a RemoteControlCommand message. Also converts values to other types if specified.
     * @param message RemoteControlCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RemoteControlCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RemoteControlCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RemoteControlCommand
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AtccmStatus. */
export class AtccmStatus implements IAtccmStatus {

    /**
     * Constructs a new AtccmStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAtccmStatus);

    /** AtccmStatus mode. */
    public mode: UiMode;

    /** AtccmStatus terminationEnabled. */
    public terminationEnabled: boolean;

    /** AtccmStatus chargerEnabled. */
    public chargerEnabled: boolean;

    /** AtccmStatus retractionEnabled. */
    public retractionEnabled: boolean;

    /** AtccmStatus jetModeEnabled. */
    public jetModeEnabled: boolean;

    /** AtccmStatus thrusterPosition. */
    public thrusterPosition: number;

    /** AtccmStatus motorStatus. */
    public motorStatus?: (IMotorStatus|null);

    /** AtccmStatus chargerStatus. */
    public chargerStatus?: (IChargerStatus|null);

    /** AtccmStatus versions. */
    public versions?: (IVersions|null);

    /**
     * Creates a new AtccmStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AtccmStatus instance
     */
    public static create(properties?: IAtccmStatus): AtccmStatus;

    /**
     * Encodes the specified AtccmStatus message. Does not implicitly {@link AtccmStatus.verify|verify} messages.
     * @param message AtccmStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAtccmStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AtccmStatus message, length delimited. Does not implicitly {@link AtccmStatus.verify|verify} messages.
     * @param message AtccmStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAtccmStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AtccmStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AtccmStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AtccmStatus;

    /**
     * Decodes an AtccmStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AtccmStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AtccmStatus;

    /**
     * Verifies an AtccmStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AtccmStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AtccmStatus
     */
    public static fromObject(object: { [k: string]: any }): AtccmStatus;

    /**
     * Creates a plain object from an AtccmStatus message. Also converts values to other types if specified.
     * @param message AtccmStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AtccmStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AtccmStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AtccmStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Values. */
export class Values implements IValues {

    /**
     * Constructs a new Values.
     * @param [properties] Properties to set
     */
    constructor(properties?: IValues);

    /** Values terminationEnabled. */
    public terminationEnabled: boolean;

    /** Values chargerOn. */
    public chargerOn: boolean;

    /** Values blinks. */
    public blinks: number;

    /** Values thrusterPosition. */
    public thrusterPosition: number;

    /** Values retractionEnabled. */
    public retractionEnabled: boolean;

    /** Values jetModeEnabled. */
    public jetModeEnabled: boolean;

    /**
     * Creates a new Values instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Values instance
     */
    public static create(properties?: IValues): Values;

    /**
     * Encodes the specified Values message. Does not implicitly {@link Values.verify|verify} messages.
     * @param message Values message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IValues, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Values message, length delimited. Does not implicitly {@link Values.verify|verify} messages.
     * @param message Values message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IValues, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Values message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Values
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Values;

    /**
     * Decodes a Values message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Values
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Values;

    /**
     * Verifies a Values message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Values message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Values
     */
    public static fromObject(object: { [k: string]: any }): Values;

    /**
     * Creates a plain object from a Values message. Also converts values to other types if specified.
     * @param message Values
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Values, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Values to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Values
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AtccmPacket. */
export class AtccmPacket implements IAtccmPacket {

    /**
     * Constructs a new AtccmPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAtccmPacket);

    /** AtccmPacket protocolVersion. */
    public protocolVersion: number;

    /** AtccmPacket command. */
    public command: Command;

    /** AtccmPacket write. */
    public write: boolean;

    /** AtccmPacket status. */
    public status?: (IAtccmStatus|null);

    /** AtccmPacket values. */
    public values?: (IValues|null);

    /**
     * Creates a new AtccmPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AtccmPacket instance
     */
    public static create(properties?: IAtccmPacket): AtccmPacket;

    /**
     * Encodes the specified AtccmPacket message. Does not implicitly {@link AtccmPacket.verify|verify} messages.
     * @param message AtccmPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAtccmPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AtccmPacket message, length delimited. Does not implicitly {@link AtccmPacket.verify|verify} messages.
     * @param message AtccmPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAtccmPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AtccmPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AtccmPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AtccmPacket;

    /**
     * Decodes an AtccmPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AtccmPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AtccmPacket;

    /**
     * Verifies an AtccmPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AtccmPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AtccmPacket
     */
    public static fromObject(object: { [k: string]: any }): AtccmPacket;

    /**
     * Creates a plain object from an AtccmPacket message. Also converts values to other types if specified.
     * @param message AtccmPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AtccmPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AtccmPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AtccmPacket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
