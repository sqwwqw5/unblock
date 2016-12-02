function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
    function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*://*.bilibili.com/*") || shExpMatch(url, "*://bilibili.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://*.soku.com/*") || shExpMatch(url, "*://soku.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://*.youku.com/*") || shExpMatch(url, "*://youku.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://music.163.com/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://m10.music.126.net/*")) return 'SOCKS 222.92.30.22:1080';
	if (shExpMatch(url, "*://*.music.126.net/*") || shExpMatch(url, "*://music.126.net/*")) return 'SOCKS 222.92.30.22:1080';
	return 'DIRECT';
}
