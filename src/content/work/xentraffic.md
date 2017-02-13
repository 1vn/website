+++
	title = "XenTraffic - UofT Hacks 2017"
	slug = "xentraffic"
	preview = "Lightweight web traffic visualization tool, built with React."
+++
<div id="xenTrafficPage">
	<div class="demo">
		&nbsp;
		<a href="http://www.xentraffic.com" target=_blank rel=nofollow>
			<div id="xenTraffic"></div>
		</a>
	</div>
	<div class="desc">
		<div class="title">			
			<h1>XenTraffic</h1>
			<p><strong>Designed by Pedja Ristic and Samuel Yee, built by Ivan Zhang</strong></p>
		</div>
		<div class="article">
			<p>
				For UofT Hacks 2017, my team and I built a visualization which serves primarily as a tool to convey web traffic to non-technical members on your team. We went from ideation to shipping a fully functioning demo without 12 hours.
			</p>
			<p>
				The idea is that anyone on your team should be able to understand your web traffic at a glance, without having to scour through complicated graphs and dashboards. It is intuitive to see a highway full of cars and understand that there is a lot of traffic.
			</p>
			<p>
				Under the hood it is a React component which takes in a level value (1-3). We made no assumptions about your infrastructure, so it's up to you to define what high, medium, and low traffic means for your servers. Simply change the level prop, and the activity on the roads will update visually.
			</p>
			<p>
				The cars spawn in lanes randomly, but it won't spawn in the same lane twice. I also attempted to combat visual latency by deleting references to cars (via deleting array value) after a short amount of time are off the screen to mark the addresses for the javascript garbage collector.
			</p>
			<p>
				You can check out the demo project we set up <a href="https://www.github.com/1vn/xen-traffic-demo" target=_blank>here</a>. In this example we also wrote a mock Go server to give dummy traffic level values.
			</p>
		</div>
	</div>
	<div class="clear"></div>
	<script src="/js/xen.bundle.js" type="text/javascript" charset="utf-8"></script>  
</div>