// Parser for KML flight logs exported by Airdata / DJI Flight Reader and
// similar tools. These files contain the flight path as a series of
// <Placemark> elements, each holding a <LineString> of "lon,lat,alt"
// coordinate triplets. Unlike the encrypted DJI .txt logs, KML needs no
// keychain / network round-trip, so this parser is fully offline.
//
// KML from Airdata does not carry per-sample timestamps, so time is
// synthesised at a fixed cadence (SAMPLE_DT_MS per point). The Placemark
// <name> ("Between 6.1 and 8.4 Amps", etc.) is decoded into a representative
// battery current so the value can be plotted.

const SAMPLE_DT_MS = 100

const messageTypes = {
    OSD: {
        expressions: ['latitude', 'longitude', 'altitude', 'height', 'current']
    }
}

for (const key of Object.keys(messageTypes)) {
    messageTypes[key].complexFields = messageTypes[key].expressions.map(e => {
        return { name: e, units: '?', multiplier: 1 }
    })
}

// Pull a representative current (amps) out of an Airdata legend label.
function currentFromName (name) {
    if (!name) {
        return null
    }
    const nums = (name.match(/\d+(?:\.\d+)?/g) || []).map(Number)
    if (/less than/i.test(name) && nums.length >= 1) {
        return nums[0] / 2
    }
    if (/more than/i.test(name) && nums.length >= 1) {
        return nums[0] * 1.15
    }
    if (nums.length >= 2) {
        return (nums[0] + nums[1]) / 2
    }
    return nums.length ? nums[0] : null
}

// Extract every <coordinates> block together with the name of the Placemark
// it belongs to, preserving document order.
function extractSegments (text) {
    const segments = []
    const placemarkRe = /<Placemark\b[^>]*>([\s\S]*?)<\/Placemark>/gi
    let m
    while ((m = placemarkRe.exec(text)) !== null) {
        const body = m[1]
        const coordMatch = /<coordinates>([\s\S]*?)<\/coordinates>/i.exec(body)
        if (!coordMatch) {
            continue
        }
        const nameMatch = /<name>([\s\S]*?)<\/name>/i.exec(body)
        segments.push({
            name: nameMatch ? nameMatch[1].trim() : '',
            coordinates: coordMatch[1]
        })
    }
    return segments
}

function parseKml (text) {
    const segments = extractSegments(text)
    const osd = {
        time_boot_ms: [],
        latitude: [],
        longitude: [],
        altitude: [],
        height: [],
        current: []
    }

    let t = 0
    let homeAltitude = null
    let lastKey = null

    for (const seg of segments) {
        const current = currentFromName(seg.name)
        const triplets = seg.coordinates.trim().split(/\s+/)
        for (const triplet of triplets) {
            const parts = triplet.split(',')
            if (parts.length < 2) {
                continue
            }
            const lon = parseFloat(parts[0])
            const lat = parseFloat(parts[1])
            const alt = parts.length > 2 ? parseFloat(parts[2]) : 0
            if (!isFinite(lon) || !isFinite(lat) || !isFinite(alt)) {
                continue
            }
            if (homeAltitude === null) {
                homeAltitude = alt
            }
            // Consecutive Placemarks repeat the shared vertex; skip the dupe.
            const key = lon + ',' + lat + ',' + alt
            if (key === lastKey) {
                continue
            }
            lastKey = key
            osd.time_boot_ms.push(t)
            osd.latitude.push(lat)
            osd.longitude.push(lon)
            osd.altitude.push(alt)
            osd.height.push(alt - homeAltitude)
            osd.current.push(current)
            t += SAMPLE_DT_MS
        }
    }

    return { OSD: osd }
}

class KmlParser {
    loadType () {
        console.warn('KmlParser.loadType() is not implemented')
    }

    processData (data) {
        const text = new TextDecoder('utf-8').decode(new Uint8Array(data))
        const messages = parseKml(text)
        if (!messages.OSD.time_boot_ms.length) {
            self.postMessage({ error: 'No coordinates found in KML file' })
            return
        }
        self.postMessage({ metadata: { startTime: 0 } })
        self.postMessage({ availableMessages: messageTypes })
        self.postMessage({ messages: messages })
        self.postMessage({ messagesDoneLoading: true })
    }
}

export default KmlParser
export { parseKml, currentFromName }
