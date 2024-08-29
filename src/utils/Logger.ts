// import Config from "react-native-config";
// const formatJSON = (data: any) => {
//     return JSON.stringify(data, null, 2); // 2 spaces for indentation
// };

// export const log = (...args: any[]) => {
//     if (Config.ENABLE_LOG === "true") {
//         const formattedArgs = args.map(arg => typeof arg === 'object' ? formatJSON(arg) : arg);
//         console.log(...formattedArgs);
//     }
// };

// export const logWarn = (...args: any[]) => {
//     if (Config.ENABLE_LOG === "true") {
//         const formattedArgs = args.map(arg => typeof arg === 'object' ? formatJSON(arg) : arg);
//         console.warn(...formattedArgs);
//     }
// };

// export const logError = (...args: any[]) => {
//     if (Config.ENABLE_LOG === "true") {
//         const formattedArgs = args.map(arg => typeof arg === 'object' ? formatJSON(arg) : arg);
//         console.error(...formattedArgs);
//     }
// };