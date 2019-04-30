import {
    makePoint,
    getX,
    getY
} from 'hexlet-points';


const getQuadrant = (point) => {
    const x = getX(point)
    const y = getY(point)

    if (x === 0 || y === 0) {
        return null
    }

    return y > 0 ? (x > 0 ? 1 : 2) : (x < 0 ? 3 : 4)

}
const getSymmetricalPoint = (point) => {
    return makePoint(-getX(point), -getY(point))
}

const calculateDistance = (point1, point2) => {
    const x1 = getX(point1)
    const y1 = getY(point1)

    const x2 = getX(point2)
    const y2 = getY(point2)

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}


export {
    getQuadrant,
    getSymmetricalPoint,
    calculateDistance
}