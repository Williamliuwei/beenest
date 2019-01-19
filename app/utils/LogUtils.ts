/**
 * 日志管理
 */
const isDebug = __DEV__;//日志控制开关

function log(...message: any[]): void {
    if (isDebug) {
        console.log(...message);
    }
}

function debug(...message: any[]): void {
    if (isDebug) {
        console.debug(...message);
    }
}

function info(...message: any[]): void {
    if (isDebug) {
        console.info(...message);
    }
}

function error(...message: any[]): void {
    if (isDebug) {
        console.error(...message);
    }
}

function warn(...message: any[]): void {
    if (isDebug) {
        console.warn(...message);
    }
}

const LogUtils = {
    log, debug, info, error, warn
}

export default LogUtils;
