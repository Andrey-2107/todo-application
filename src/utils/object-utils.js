export function deepDataCopy(object) {
    return JSON.parse(JSON.stringify(object));
}