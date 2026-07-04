// Data extractor for KML flight logs (see kmlParser.js). Positions are already
// in degrees and metres, and there is no attitude/param data, so most of the
// interface returns empty results. Trajectory altitude is expressed in metres
// relative to the first fix.

const DEG2RAD = Math.PI / 180

// Great-circle bearing (radians, clockwise from north) from point 1 to point 2.
function bearing (lat1, lon1, lat2, lon2) {
    const phi1 = lat1 * DEG2RAD
    const phi2 = lat2 * DEG2RAD
    const dLon = (lon2 - lon1) * DEG2RAD
    const y = Math.sin(dLon) * Math.cos(phi2)
    const x = Math.cos(phi1) * Math.sin(phi2) -
              Math.sin(phi1) * Math.cos(phi2) * Math.cos(dLon)
    return Math.atan2(y, x)
}

export class KmlDataExtractor {
    // KML carries no attitude, so synthesise yaw as the heading between
    // consecutive fixes (roll/pitch = 0). This also gives Home.mapOk a
    // non-empty timeAttitude so the trajectory-only log still renders.
    static extractAttitude (messages, source) {
        const attitudes = {}
        if (!('OSD' in messages) || source !== 'OSD') {
            return attitudes
        }
        const osd = messages.OSD
        const n = osd.time_boot_ms.length
        let lastYaw = 0
        for (let i = 0; i < n; i++) {
            const j = Math.min(i + 1, n - 1)
            let yaw = lastYaw
            if (j !== i &&
                (osd.latitude[i] !== osd.latitude[j] || osd.longitude[i] !== osd.longitude[j])) {
                yaw = bearing(osd.latitude[i], osd.longitude[i], osd.latitude[j], osd.longitude[j])
                lastYaw = yaw
            }
            attitudes[parseInt(osd.time_boot_ms[i])] = [0, 0, yaw]
        }
        return attitudes
    }

    static extractAttitudeQ (messages, source) {
        return []
    }

    static extractAttitudeSources (messages) {
        return { quaternions: [], eulers: 'OSD' in messages ? ['OSD'] : [] }
    }

    static extractEvents (messages) {
        return []
    }

    static extractFlightModes (messages) {
        return [[0, 'Normal']]
    }

    static extractMission (messages) {
        return []
    }

    static extractParams (messages) {
        return undefined
    }

    static extractFences (messages) {
        return []
    }

    static extractDefaultParams (messages) {
        return []
    }

    static extractVehicleType (messages) {
        return 'quadcopter'
    }

    static extractTextMessages (messages) {
        return []
    }

    static extractTrajectorySources (messages) {
        return 'OSD' in messages ? ['OSD'] : []
    }

    static extractTrajectory (messages, source) {
        const ret = {}
        if ('OSD' in messages && source === 'OSD') {
            const trajectory = []
            const timeTrajectory = {}
            let startAltitude = null
            const gpsData = messages.OSD
            for (const i in gpsData.time_boot_ms) {
                if (gpsData.latitude[i] === 0 && gpsData.longitude[i] === 0) {
                    continue
                }
                if (startAltitude === null) {
                    startAltitude = gpsData.altitude[i]
                }
                const t = gpsData.time_boot_ms[i]
                trajectory.push([
                    gpsData.longitude[i],
                    gpsData.latitude[i],
                    gpsData.altitude[i] - startAltitude,
                    t
                ])
                timeTrajectory[t] = [
                    gpsData.longitude[i],
                    gpsData.latitude[i],
                    gpsData.altitude[i],
                    t
                ]
            }
            if (trajectory.length) {
                ret.OSD = { startAltitude, trajectory, timeTrajectory }
            }
        }
        return ret
    }

    static extractNamedValueFloatNames (_messages) {
        return []
    }

    static extractStartTime (messages) {
        return 0
    }
}
