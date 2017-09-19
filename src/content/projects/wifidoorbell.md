+++
	title = "WiFi Doorbell"
	slug = "wifidoorbell"
	preview = "Notifies when friends connect to local network."
+++
<div id="wifiDoorbellPage">
	<h1>WiFi Doorbell</h1>
	<p>I made this because I was inspired by this <a rel="nofollow" target=_blank href="https://news.ycombinator.com/item?id=13326544"><b>Hacker News comment</b></a>.</p>
	<p>In the process of hacking something like this together I learned how ARP works and some basic Rust.</p>
	<h2>How it Works</h2>
	<p>Whenever someone's device automatically connects to my WiFi network, the program will play a sound letting me know someone is close to my apartment (enough such that their device picks up my network and connects). </p>
	<p>WiFi Doorbell relies on recording changes in the ARP cache to determine new connections to the network.</p>
	<p>We first clear the ARP cache and then ping the network range.</p>
	<iframe src="//giphy.com/embed/3o84TUwPv21czsSmmA" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
	<p>After the range is scanned, the ARP cache is updated with any addresses which respond back to the ping. The doorbell repeats this process, comparing the ARP cache against its state prior to pinging the network range and notifies any new connections via playing a sound file.</p>
	<p>Currently, there are a lot of hard coded attributes such as local network ip, range limit, and the number of concurrent scans to do at once.</p>
	<a class="externalLink" href="https://github.com/1vn/wifi_doorbell">Source Code</a>
</div>