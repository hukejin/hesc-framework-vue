/** 通过正则表达式检验一些输入内容是否正确 */
/**
 * 验证手机号码
 * @param str 手机号码
 * @returns {boolean} true 正确的手机号
 */
export function isPoneAvailable(str) {
	let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	return myreg.test(str);
}

/**
 * 替换手机号码
 * @param nunber  手机号码
 * @param hidden 将手机号中间4位用*号代替
 * @returns {*}
 */
export function hidePhoneNum(nunber,hidden) {
	return hidden ? nunber.replace(nunber.substring(3,7),"****") : nunber;
}

/**
 * 检验邮箱地址
 * @param email
 * @returns {boolean}
 */
export function isEmailAvailable(email) {
	let myreg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
	return myreg.test(email);
}
