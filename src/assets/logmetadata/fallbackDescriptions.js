/**
 * Fallback descriptions for log messages and fields
 * These are beginner-friendly explanations for users who may not be familiar with drone terminology
 */

export const messageDescriptions = {
    // Attitude and Orientation
    ATT: 'Aircraft orientation (how the vehicle is tilted and pointed)',
    RATE: 'How fast the aircraft is rotating around each axis',
    RCIN: 'Radio controller input - what the pilot is commanding with the sticks',
    RCOU: 'Servo/motor outputs - signals sent to motors and control surfaces',

    // Position and Navigation
    GPS: 'GPS satellite position data - where the vehicle is located',
    GPA: 'GPS accuracy information - how precise the position data is',
    GPS2: 'Secondary GPS data - backup GPS receiver',
    GPA2: 'Secondary GPS accuracy data',
    POS: 'Estimated position combining GPS and other sensors',
    CTUN: 'Control tuning data - throttle and altitude control performance',
    NTUN: 'Navigation tuning - horizontal position and velocity control',
    SRTL: 'Smart RTL (Return To Launch) data',

    // Sensors
    IMU: 'Inertial Measurement Unit - accelerometer and gyroscope raw data',
    IMU2: 'Second IMU sensor data - backup accelerometer/gyroscope',
    IMU3: 'Third IMU sensor data - additional backup sensor',
    ACC: 'Accelerometer data - measures forces/acceleration in 3 axes',
    GYR: 'Gyroscope data - measures rotation rate in 3 axes',
    MAG: 'Magnetometer/compass data - measures magnetic field for heading',
    MAG2: 'Second magnetometer - backup compass',
    MAG3: 'Third magnetometer - additional backup compass',
    BARO: 'Barometer data - measures air pressure to estimate altitude',
    BAR2: 'Second barometer sensor data',
    BAR3: 'Third barometer sensor data',
    ISBD: 'IMU sensor batch data',
    ISBH: 'IMU sensor batch header',
    FTN: 'FFT tuning data for motor noise analysis',
    FTNB: 'FFT tuning band data',

    // Power and Battery
    BAT: 'Battery status - voltage, current, and remaining capacity',
    BAT2: 'Second battery status',
    CURR: 'Current sensor readings - how much power is being used',
    POWR: 'Power module data - system power status',

    // Motors and ESCs
    ESC: 'Electronic Speed Controller data - motor RPM and power',
    ESC1: 'ESC 1 data - front-right motor (quad)',
    ESC2: 'ESC 2 data - back-left motor (quad)',
    ESC3: 'ESC 3 data - front-left motor (quad)',
    ESC4: 'ESC 4 data - back-right motor (quad)',
    MOT: 'Motor outputs - individual motor power levels (0-100%)',
    MOTB: 'Motor battery info - voltage at the motors',

    // Flight Modes and Events
    MODE: 'Flight mode changes - when the vehicle switches between modes',
    EV: 'Events log - important events like arming, takeoff, landing',
    ERR: 'Errors - problems detected by the autopilot',
    MSG: 'Text messages from the autopilot',
    PARM: 'Parameter changes during flight',

    // EKF (Extended Kalman Filter) - State Estimation
    EKF1: 'EKF velocity and position estimates (what the autopilot thinks)',
    EKF2: 'EKF sensor offsets and corrections',
    EKF3: 'EKF sensor innovations (difference between expected and actual)',
    EKF4: 'EKF status flags and health',
    EKF5: 'EKF optical flow and terrain data',
    NKF1: 'Navigation EKF states - velocity and position',
    NKF2: 'Navigation EKF - magnetic field and wind estimates',
    NKF3: 'Navigation EKF - innovations (prediction errors)',
    NKF4: 'Navigation EKF - variances (uncertainty levels)',
    NKF5: 'Navigation EKF - optical flow and range finder',
    NKF6: 'Navigation EKF - output observer data',
    NKF7: 'Navigation EKF - quaternion output',
    NKF8: 'Navigation EKF - wind estimation',
    NKF9: 'Navigation EKF - terrain estimation',
    NKQ: 'EKF quaternion - 3D rotation representation',
    NKQ1: 'EKF quaternion core 1',
    NKQ2: 'EKF quaternion core 2',
    XKF1: 'Extended Kalman Filter - core state estimates (position/velocity)',
    XKF2: 'Extended Kalman Filter - environment estimates (wind/mag)',
    XKF3: 'Extended Kalman Filter - innovations (measurement errors)',
    XKF4: 'Extended Kalman Filter - variances (uncertainty levels)',
    XKF5: 'Extended Kalman Filter - optical flow data',
    XKQ: 'EKF quaternion output (attitude representation)',
    XKQ1: 'EKF quaternion core 1',
    XKQ2: 'EKF quaternion core 2',
    XKFS: 'EKF lane/core status - which estimation lane is active',
    XKT: 'EKF timing information - filter update timing',
    XKV1: 'EKF velocity innovations - GPS velocity errors',
    XKV2: 'EKF velocity variances - velocity uncertainty',
    XKY0: 'EKF yaw estimator 0 - heading estimation',
    XKY1: 'EKF yaw estimator 1 - backup heading estimation',

    // Attitude Control
    PIDR: 'Roll axis PID controller - how roll is being controlled',
    PIDP: 'Pitch axis PID controller - how pitch is being controlled',
    PIDY: 'Yaw axis PID controller - how yaw is being controlled',
    PIDA: 'Altitude PID controller - how height is being controlled',
    PIDS: 'Speed PID controller - how speed is being controlled',
    PIDN: 'North position PID controller',
    PIDE: 'East position PID controller',
    PIVN: 'North velocity PI controller',
    PIVE: 'East velocity PI controller',

    // AHRS - Attitude Heading Reference System
    AHR2: 'Backup attitude/heading estimate',
    AHRS: 'Primary attitude/heading system status',
    AOA: 'Angle of attack',
    SSA: 'Sideslip angle',

    // Vibration and Health
    VIBE: 'Vibration levels - excessive vibration can cause problems',
    PM: 'Performance monitoring - CPU load and timing',
    SCHED: 'Scheduler performance',
    MEM: 'Memory usage',

    // Terrain and Rangefinder
    RFND: 'Rangefinder/Lidar - distance to ground',
    RNG: 'Range finder data',
    TERR: 'Terrain data - ground elevation information',
    DSF: 'Downward-facing sensor data',

    // Camera and Gimbal
    CAM: 'Camera trigger events - when photos were taken',
    TRIG: 'Camera trigger details',
    GMBL: 'Gimbal status - camera stabilizer position',
    GIMO: 'Gimbal output commands',
    GIMC: 'Gimbal controller data',
    GMEP: 'Gimbal encoder position',
    GIM: 'Gimbal angles',

    // Waypoints and Mission
    CMD: 'Mission commands being executed',
    WPNV: 'Waypoint navigation data',
    MISSION: 'Mission progress and status',
    CTRY: 'Camera trigger retry',

    // System
    STAT: 'System status information',
    SYS: 'System parameters and configuration',
    ORGN: 'Origin/home position coordinates',
    RAD: 'Radio/telemetry link status',
    RSSI: 'Radio signal strength',
    STAK: 'System task info',
    VER: 'Firmware version information',

    // Copter-specific
    HELI: 'Helicopter-specific parameters',
    PSCD: 'Position controller D-axis demand',
    PSCE: 'Position controller D-axis error',
    PSCN: 'Position controller north axis',
    PSCO: 'Position controller output',
    PSCZ: 'Position controller Z (vertical) axis',
    RQCTRL: 'Requested control modes',
    SIM: 'Simulation data (SITL)',
    SIMU: 'Simulation data (SITL)',

    // Plane-specific
    ATRP: 'Autotune data - PID tuning progress',
    ARSP: 'Airspeed sensor data',
    TECS: 'Total Energy Control System - speed/height controller',

    // Rover-specific
    STER: 'Steering controller data',
    THST: 'Throttle controller data',

    // Additional common messages
    MAVC: 'MAVLink command processing',
    MAVL: 'MAVLink statistics',
    OF: 'Optical flow sensor - ground velocity from camera',
    OFDM: 'Optical flow debug messages',
    OFCAL: 'Optical flow calibration',
    FLOW: 'Optical flow measurements',
    PRXD: 'Proximity sensor data',
    PRX: 'Proximity sensor - obstacle detection',
    BCON: 'Beacon navigation data',
    BCN: 'Beacon sensor',
    SIDS: 'System ID status',
    SIDD: 'System ID data',
    WINC: 'Winch data',
    RPM1: 'RPM sensor 1 - engine/rotor speed',
    RPM2: 'RPM sensor 2 - second engine/rotor',

    // Replay/Analysis
    RFRH: 'Replay frame header',
    RFRF: 'Replay frame format',
    REV2: 'Replay EKF2 data',
    REV3: 'Replay EKF3 data',
    RSO2: 'Replay sensor offset 2',
    RSO3: 'Replay sensor offset 3',
    RWA2: 'Replay wind adjustment 2',
    RWA3: 'Replay wind adjustment 3',
    REY3: 'Replay yaw 3',
    RISH: 'Replay IMU sample header',
    RISI: 'Replay IMU sample index',

    // Additional sensors
    HEAT: 'Heater status',
    PRES: 'Pressure sensor',
    AIR2: 'Second airspeed sensor',
    AIRT: 'Air temperature',
    ENCN: 'Wheel encoder north',
    ENCE: 'Wheel encoder east',
    ENWB: 'Wheel encoder body frame',
    WENC: 'Wheel encoder',
    WFAN: 'Fan wheel RPM'
}

export const fieldDescriptions = {
    // Common time field
    TimeUS: 'Timestamp in microseconds since boot',

    // Attitude fields
    Roll: 'Roll angle - how much the vehicle is tilted left/right (degrees)',
    Pitch: 'Pitch angle - how much the nose is tilted up/down (degrees)',
    Yaw: 'Yaw angle - compass heading direction (degrees)',
    DesRoll: 'Desired roll - what the autopilot is trying to achieve',
    DesPitch: 'Desired pitch - target nose angle',
    DesYaw: 'Desired yaw - target heading',
    ErrRoll: 'Roll error - difference between desired and actual roll',
    ErrPitch: 'Pitch error - difference between desired and actual pitch',
    ErrYaw: 'Yaw error - difference between desired and actual yaw',

    // Rate fields
    R: 'Roll rate - rotation speed around forward axis (deg/s)',
    P: 'Pitch rate - rotation speed around side axis (deg/s)',
    Y: 'Yaw rate - rotation speed around vertical axis (deg/s)',
    RollRate: 'Roll rotation speed in degrees per second',
    PitchRate: 'Pitch rotation speed in degrees per second',
    YawRate: 'Yaw rotation speed (turn rate)',
    RDes: 'Desired roll rate',
    PDes: 'Desired pitch rate',
    YDes: 'Desired yaw rate',
    ROut: 'Roll rate controller output',
    POut: 'Pitch rate controller output',
    YOut: 'Yaw rate controller output',

    // Position fields
    Lat: 'Latitude - north/south position on Earth',
    Lng: 'Longitude - east/west position on Earth',
    Alt: 'Altitude - height above sea level or home (meters)',
    RelAlt: 'Relative altitude - height above takeoff point',
    RelHomeAlt: 'Height above home position',
    SAlt: 'Sonar/rangefinder altitude',
    TAlt: 'Target altitude',
    DCRt: 'Desired climb rate (m/s)',
    CRt: 'Actual climb rate (m/s)',
    N: 'North position from origin (meters)',
    E: 'East position from origin (meters)',
    D: 'Down position from origin (meters, down is positive)',

    // EKF Position/Velocity fields (very common)
    PN: 'Position North - distance north of origin (meters)',
    PE: 'Position East - distance east of origin (meters)',
    PD: 'Position Down - distance below origin (meters)',
    VN: 'Velocity north (m/s)',
    VE: 'Velocity east (m/s)',
    VD: 'Velocity down (m/s)',

    // Velocity fields
    Spd: 'Speed - how fast the vehicle is moving (m/s)',
    GCrs: 'Ground course - direction of travel over ground',
    VelX: 'Velocity in X direction (north, m/s)',
    VelY: 'Velocity in Y direction (east, m/s)',
    VelZ: 'Velocity in Z direction (down, m/s)',
    VX: 'Velocity X (north)',
    VY: 'Velocity Y (east)',
    VZ: 'Velocity Z (down) - vertical velocity',

    // GPS fields
    NSats: 'Number of GPS satellites being used',
    HDop: 'Horizontal dilution of precision - GPS accuracy (lower is better)',
    VDop: 'Vertical dilution of precision - altitude accuracy',
    Status: 'GPS fix status (3D fix = good)',
    GMS: 'GPS time in milliseconds',
    GWk: 'GPS week number',
    U: 'GPS status/fix type',
    HAcc: 'Horizontal accuracy estimate (meters)',
    VAcc: 'Vertical accuracy estimate (meters)',
    SAcc: 'Speed accuracy estimate (m/s)',
    GPSYaw: 'GPS-derived heading (if dual antenna)',

    // IMU fields
    AccX: 'Acceleration in X axis - forward/back (m/s²)',
    AccY: 'Acceleration in Y axis - left/right (m/s²)',
    AccZ: 'Acceleration in Z axis - up/down, includes gravity (m/s²)',
    GyrX: 'Rotation rate around X axis (deg/s)',
    GyrY: 'Rotation rate around Y axis (deg/s)',
    GyrZ: 'Rotation rate around Z axis (deg/s)',
    AX: 'Accelerometer X reading',
    AY: 'Accelerometer Y reading',
    AZ: 'Accelerometer Z reading',
    GX: 'Gyroscope X reading',
    GY: 'Gyroscope Y reading',
    GZ: 'Gyroscope Z reading',

    // Magnetometer fields
    MagX: 'Magnetic field strength in X direction',
    MagY: 'Magnetic field strength in Y direction',
    MagZ: 'Magnetic field strength in Z direction',
    MOfsX: 'Magnetometer offset correction X',
    MOfsY: 'Magnetometer offset correction Y',
    MOfsZ: 'Magnetometer offset correction Z',
    MX: 'Magnetometer X reading',
    MY: 'Magnetometer Y reading',
    MZ: 'Magnetometer Z reading',
    MN: 'Magnetic field North component',
    ME: 'Magnetic field East component',
    MD: 'Magnetic field Down component',
    OfsX: 'Offset X - calibration correction',
    OfsY: 'Offset Y - calibration correction',
    OfsZ: 'Offset Z - calibration correction',

    // Battery fields
    Volt: 'Battery voltage in volts',
    VoltR: 'Resting battery voltage (compensated for current)',
    Curr: 'Current draw in amps',
    CurrTot: 'Total current used (amp-hours or mAh)',
    EnrgTot: 'Total energy used (watt-hours)',
    Temp: 'Battery/component temperature',
    Res: 'Battery internal resistance',
    RemPct: 'Remaining battery percentage',
    V: 'Voltage',
    A: 'Current (Amperes)',
    mAh: 'Milliamp-hours consumed',
    Wh: 'Watt-hours consumed',

    // RC Input fields
    C1: 'RC Channel 1 - usually Roll stick',
    C2: 'RC Channel 2 - usually Pitch stick',
    C3: 'RC Channel 3 - usually Throttle stick',
    C4: 'RC Channel 4 - usually Yaw stick',
    C5: 'RC Channel 5 - auxiliary switch/dial',
    C6: 'RC Channel 6 - auxiliary switch/dial',
    C7: 'RC Channel 7 - auxiliary switch/dial',
    C8: 'RC Channel 8 - auxiliary switch/dial',
    C9: 'RC Channel 9 - auxiliary',
    C10: 'RC Channel 10 - auxiliary',
    C11: 'RC Channel 11 - auxiliary',
    C12: 'RC Channel 12 - auxiliary',
    C13: 'RC Channel 13 - auxiliary',
    C14: 'RC Channel 14 - auxiliary',

    // RC Output fields
    Ch1: 'Servo/Motor output channel 1 (PWM μs)',
    Ch2: 'Servo/Motor output channel 2 (PWM μs)',
    Ch3: 'Servo/Motor output channel 3 (PWM μs)',
    Ch4: 'Servo/Motor output channel 4 (PWM μs)',
    Ch5: 'Servo output channel 5 (PWM μs)',
    Ch6: 'Servo output channel 6 (PWM μs)',
    Ch7: 'Servo output channel 7 (PWM μs)',
    Ch8: 'Servo output channel 8 (PWM μs)',

    // Control tuning
    ThI: 'Throttle input from pilot',
    ThO: 'Throttle output to motors',
    DAlt: 'Desired altitude (meters)',
    BAlt: 'Barometric altitude (meters)',
    DSAlt: 'Desired sink/climb rate',
    ThH: 'Throttle hover estimate',
    ThU: 'Throttle upper limit',
    ThL: 'Throttle lower limit',

    // Navigation
    DPosX: 'Desired position X (north)',
    DPosY: 'Desired position Y (east)',
    PosX: 'Current position X',
    PosY: 'Current position Y',
    DVelX: 'Desired velocity X (north)',
    DVelY: 'Desired velocity Y (east)',
    DAccX: 'Desired acceleration X',
    DAccY: 'Desired acceleration Y',
    TPN: 'Target position north',
    TPE: 'Target position east',
    TPD: 'Target position down',
    TVN: 'Target velocity north',
    TVE: 'Target velocity east',
    TVD: 'Target velocity down',

    // Vibration
    VibeX: 'Vibration level in X axis - should be below 30',
    VibeY: 'Vibration level in Y axis - should be below 30',
    VibeZ: 'Vibration level in Z axis - should be below 30',
    Clip0: 'Accelerometer 0 clipping count - bad if non-zero',
    Clip1: 'Accelerometer 1 clipping count - bad if non-zero',
    Clip2: 'Accelerometer 2 clipping count - bad if non-zero',

    // Motor/ESC
    RPM: 'Motor rotations per minute',
    RawRPM: 'Raw motor RPM reading',
    Mot1: 'Motor 1 output percentage',
    Mot2: 'Motor 2 output percentage',
    Mot3: 'Motor 3 output percentage',
    Mot4: 'Motor 4 output percentage',
    Mot5: 'Motor 5 output percentage',
    Mot6: 'Motor 6 output percentage',
    Mot7: 'Motor 7 output percentage',
    Mot8: 'Motor 8 output percentage',
    PWM: 'PWM output value (microseconds)',

    // PID terms
    Tar: 'Target/desired value',
    Act: 'Actual/current value',
    Err: 'Error - difference between target and actual',
    FF: 'Feed forward - predictive control input',
    Dmod: 'D-term modifier',
    SRate: 'Slew rate',
    Limit: 'Output limit status',

    // EKF core fields
    C: 'EKF Core number - which estimation lane (0, 1, 2...)',
    Lane: 'EKF lane/core being used',
    Primary: 'Primary EKF core selection',
    Innov: 'Innovation - difference from expected value',
    Var: 'Variance - uncertainty/confidence level',
    SV: 'State variance',
    SP: 'State position',
    SH: 'State health',
    SM: 'State mode',
    SS: 'State status',
    GPS: 'GPS status in EKF',
    Flags: 'Status flags',
    SolnA: 'Solution A status',
    SolnB: 'Solution B status',
    PI: 'Position innovation',
    VI: 'Velocity innovation',
    MI: 'Magnetometer innovation',
    HI: 'Height innovation',
    FIX: 'Fix status',
    FIY: 'Fix innovation Y',

    // EKF Innovations (XKF3, NKF3)
    IVN: 'Innovation velocity north (m/s)',
    IVE: 'Innovation velocity east (m/s)',
    IVD: 'Innovation velocity down (m/s)',
    IPN: 'Innovation position north (m)',
    IPE: 'Innovation position east (m)',
    IPD: 'Innovation position down (m)',
    IMX: 'Innovation magnetometer X',
    IMY: 'Innovation magnetometer Y',
    IMZ: 'Innovation magnetometer Z',
    IYAW: 'Innovation yaw (heading)',
    IVT: 'Innovation velocity total',
    IAS: 'Innovation airspeed',
    IBR: 'Innovation body rate',

    // EKF Variances (XKF4, NKF4)
    SVN: 'State variance velocity north',
    SVE: 'State variance velocity east',
    SVD: 'State variance velocity down',
    SPN: 'State variance position north',
    SPE: 'State variance position east',
    SPD: 'State variance position down',
    SMN: 'State variance mag north',
    SME: 'State variance mag east',
    SMD: 'State variance mag down',
    SVT: 'State variance total velocity',
    SAS: 'State variance airspeed',
    SBR: 'State variance body rate',
    OFN: 'Optical flow innovation N',
    OFE: 'Optical flow innovation E',
    FS: 'Fault status flags',
    TS: 'Timeout status',
    Sol: 'Solution status',

    // EKF Wind (XKF2, NKF2)
    VWN: 'Wind velocity north (m/s)',
    VWE: 'Wind velocity east (m/s)',
    VWD: 'Wind velocity down (m/s)',
    MagN: 'Magnetic field north (mGauss)',
    MagE: 'Magnetic field east (mGauss)',
    MagD: 'Magnetic field down (mGauss)',
    AZbias: 'Accelerometer Z bias',
    GSX: 'Gyro scale X',
    GSY: 'Gyro scale Y',
    GSZ: 'Gyro scale Z',

    // Quaternion fields
    Q1: 'Quaternion component 1 (w)',
    Q2: 'Quaternion component 2 (x)',
    Q3: 'Quaternion component 3 (y)',
    Q4: 'Quaternion component 4 (z)',
    quat1: 'Quaternion component 1 (w)',
    quat2: 'Quaternion component 2 (x)',
    quat3: 'Quaternion component 3 (y)',
    quat4: 'Quaternion component 4 (z)',

    // XKF Lane Status (XKFS)
    NKL: 'Number of EKF lanes',
    PRMI: 'Primary IMU lane',
    PRMN: 'Primary lane number',
    FLT: 'Filter status flags',

    // XKF Timing (XKT)
    TAL: 'Time alignment status',
    TI: 'Time index',
    DT: 'Delta time (microseconds)',
    DTMX: 'Maximum delta time',
    DTMN: 'Minimum delta time',

    // XKF Yaw (XKY)
    YC: 'Yaw composite/combined',
    YCS: 'Yaw composite status',
    YI: 'Yaw innovation',
    YS: 'Yaw status',
    YAE: 'Yaw angle error',
    GPSY: 'GPS yaw measurement',
    EXTY: 'External yaw measurement',

    // Barometer
    Press: 'Barometric pressure (Pascals)',
    SMS: 'Sample time (milliseconds)',
    Offset: 'Barometer offset correction',
    GndTemp: 'Ground temperature',
    Health: 'Sensor health status',

    // Instance/Index
    I: 'Sensor instance number (0, 1, 2...)',
    IMU: 'IMU instance number',

    // Mode fields
    Mode: 'Flight mode number',
    ModeNum: 'Flight mode as number',
    Rsn: 'Reason for mode change',

    // PARM (Parameter) fields
    Name: 'Parameter name',
    Value: 'Parameter value',
    Default: 'Default parameter value',

    // STAT (Status) fields
    isArmed: 'Vehicle armed status (1=armed)',
    Armed: 'Vehicle armed status',
    Safety: 'Safety switch status',
    Crash: 'Crash detected flag',
    Flying: 'Vehicle is flying flag',
    MainLoop: 'Main loop time',

    // CMD (Command) fields
    CTot: 'Total mission commands',
    CNum: 'Current command number',
    CId: 'Command ID',
    Prm1: 'Command parameter 1',
    Prm2: 'Command parameter 2',
    Prm3: 'Command parameter 3',
    Prm4: 'Command parameter 4',

    // ORGN (Origin)
    Type: 'Origin type (home, EKF, etc)',

    // ERR (Error)
    Subsys: 'Error subsystem code',
    ECode: 'Error code',

    // EV (Event)
    Id: 'Event ID number',

    // PM (Performance Monitor)
    NLon: 'Number of long loops',
    NLoop: 'Number of loops',
    MaxT: 'Maximum loop time',
    Mem: 'Free memory',
    Load: 'CPU load percentage',

    // RAD (Radio)
    RSSI: 'Received signal strength',
    RemRSSI: 'Remote RSSI',
    TxBuf: 'Transmit buffer usage',
    Noise: 'Background noise level',
    RemNoise: 'Remote noise level',
    RxErrors: 'Receive errors',
    Fixed: 'Fixed errors',

    // Rangefinder
    Dist: 'Distance measured (meters)',
    Orient: 'Sensor orientation',
    Rng: 'Range reading (meters)',
    RngMin: 'Minimum range',
    RngMax: 'Maximum range',

    // Optical Flow
    Qual: 'Quality of measurement (0-255)',
    flowX: 'Flow X rate',
    flowY: 'Flow Y rate',
    bodyX: 'Body rate X',
    bodyY: 'Body rate Y',

    // Terrain
    CHeight: 'Current terrain height',
    Spacing: 'Terrain grid spacing',
    TerrH: 'Terrain altitude',
    Pending: 'Terrain requests pending',
    Loaded: 'Terrain data loaded',

    // ESC fields
    ESCRpm: 'ESC reported RPM',
    ESCVolt: 'ESC voltage',
    ESCCurr: 'ESC current draw',
    ESCTemp: 'ESC temperature',

    // AHRS
    AHErr: 'AHRS error RP',
    AHYaw: 'AHRS yaw',
    EKFFlags: 'EKF flags for AHRS'
}

/**
 * Get a description for a message type
 */
export function getMessageDescription (msgType) {
    return messageDescriptions[msgType] || null
}

/**
 * Get a description for a field
 */
export function getFieldDescription (fieldName) {
    return fieldDescriptions[fieldName] || null
}
