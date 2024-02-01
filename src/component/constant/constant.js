export const createAction = (val)=>({
    REQUEST:`${val}_REQUEST`,
    SUCCESS:`${val}_SUCCESS`,
    ERROR:`${val}_ERROR`
})