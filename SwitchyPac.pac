function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
    function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*://bangumi.bilibili.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://www.bilibili.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://app.bilibili.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://interface.bilibili.com/*")) return 'DIRECT';
	if (shExpMatch(url, "*://music.163.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://*.soku.com/*") || shExpMatch(url, "*://soku.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://*.xunlei.com/*") || shExpMatch(url, "*://xunlei.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://play-ali.youku.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://v.youku.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://api.3g.youku.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://api.youku.com/*")) return 'SOCKS 222.92.30.22:1080';
	return 'DIRECT';
}