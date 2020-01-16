/**
 * 时间戳格式化函数,long型转换为标准时间
 * @param  {string} format    格式 yyyy-MM-dd,yyyy-MM-dd HH:mm,yyyy-MM-dd HH:mm:ss,HH:mm,MM-dd
 * @param  {int}    timestamp 要格式化的时间 默认为当前时间long型
 * @return {string}  格式化的时间字符串
 */
export function longToDate(format, timestamp){
	let date = new Date(timestamp);
	let Y = date.getFullYear() + '-';
	let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
	let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	if(format === "yyyy-MM-dd"){
		return Y + M + D;
	} else if(format === "yyyy-MM-dd HH:mm"){
		return (Y + M + D + h + m).substring(0,(Y + M + D + h + m).length - 1);
	} else if(format === "yyyy-MM-dd HH:mm:ss"){
		return Y + M + D + h + m + s;
	} else if(format === "HH:mm"){
		return (m + s).substring(0,(m + s).length - 1);
	} else if(format === "MM-dd"){
		return M + D;
	}
}

/**
 * 获取当前毫秒数
 */
export function longofDate(){
	return new Date().getTime;
}

/**
 * 将国际化时间转为标准时间
 * Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间)
 */
export function formatLocaltime(worldtime,format) {
	let time = new Date(worldtime);
	if(format === "yyyy-MM-dd") { return time.getFullYear() + '-' + p((time.getMonth() + 1)) + '-' + p(time.getDate()) } else if(format === "yyyy-MM-dd HH:mm") { return time.getFullYear() + '-' + p((time.getMonth() + 1)) + '-' + p(time.getDate()) + ' ' + p(time.getHours()) + ':' + p(time.getMinutes()) }
}

/***
 * 将国际化时间转为LONG型时间
 * Thu Mar 07 2019 12:00:00 GMT+0800 (中国标准时间)
 */
export function formatLocaltimeToLong(worldtime){
	return new Date(worldtime).getTime();
}

function p(number) {
	return number < 10 ? '0' + number : number;
}

/**
 * 返回剩余时间,类似朋友圈效果，剩余几天几小时
 * @param minsecond
 * @returns {string}
 */
export function endTimeFormat(minsecond){
	if(minsecond < 0){
		minsecond = 0;
	}
	if(minsecond < 24 * 60 * 60 * 1000){
		let hour = minsecond / (60 * 60 * 1000);
		return hour + "小时" + (minsecond - hour * 60 * 60 * 1000) / (60 * 1000) + "分";
	}else{
		let day = minsecond / (24 * 60 * 60 * 1000);
		let hour = (minsecond - day * 24 * 60 * 60 * 1000) / (60 * 60 * 1000);
		return day + "天" + hour + "小时";
	}
}
