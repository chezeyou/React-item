export default function checkParams(params) {
    let tmpStr = '';
    const tsp = new Date().getTime();
    if (params) {
        for (const item of Object.keys(params)) {
            if (params[item] !== undefined && params[item] !== null) {
                tmpStr += `${item}=${encodeURIComponent(params[item])}&`;
            }
        }
        if (tmpStr.length > 0) {
            tmpStr = `?${tmpStr}tsp=${tsp}`;
        } else {
            tmpStr = `?tsp=${tsp}`;
        }
    } else {
        tmpStr = `?tsp=${tsp}`;
    }
    return tmpStr;
}
