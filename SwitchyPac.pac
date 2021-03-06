function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
    function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*://bangumi.bilibili.com/*")) return 'SOCKS 222.177.143.229:1080';
	if (shExpMatch(url, "*://www.bilibili.com/*")) return 'SOCKS 222.177.143.229:1080';
	if (shExpMatch(url, "*://interface.bilibili.com/*")) return 'DIRECT';
	if (shExpMatch(url, "*://app.bilibili.com/*")) return 'SOCKS 222.177.143.229:1080';
	if (shExpMatch(url, "*://api.letv.com/*")) return 'SOCKS 222.177.143.229:1080';
	if (shExpMatch(url, "*://music.163.com/*")) return 'SOCKS 222.177.143.229:1080';
	if (shExpMatch(url, "*://*/?prot=9&prod=flash&pt=1&file=/tv/Sample1/BackUp_Sample1/svc/*")) return 'SOCKS 222.177.143.229:1080';
	if (shExpMatch(url, "*://*.soku.com/*") || shExpMatch(url, "*://soku.com/*")) return 'SOCKS 222.177.143.229:1080';
	if (shExpMatch(url, "*://*.xunlei.com/*") || shExpMatch(url, "*://xunlei.com/*")) return 'SOCKS 222.177.143.229:1080';
	if (shExpMatch(url, "*://play-ali.youku.com/*")) return 'SOCKS 222.177.143.229:1080';
	if (shExpMatch(url, "*://v.youku.com/*")) return 'SOCKS 222.177.143.229:1080';
	if (shExpMatch(url, "*://*.3g.youku.com/*") || shExpMatch(url, "*://3g.youku.com/*")) return 'SOCKS 222.177.143.229:1080';
	return 'DIRECT';
}