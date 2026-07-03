// Data extractor for KML flight logs (see kmlParser.js). Positions are already
// in degrees and metres, and there is no attitude/param data, so most of the
// interface returns empty results. Trajectory altitude is expressed in metres
// relative to the first fix.

export class KmlDataExtractor {
    static extractAttitude (messages, source) {
        return {}
    }

    static extractAttitudeSources (messages) {
        return { quaternions: [], eulers: [] }
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
