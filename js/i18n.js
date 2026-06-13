/**
 * i18n — Centralized EN/CN translation dictionary
 * Add or modify entries here; the rest of the page stays untouched.
 */
var I18N = {

	// ── dictionary ──────────────────────────────────────────────
	dict: {

		/* ---- nav ---- */
		'nav.home':       { en: 'Home',       cn: '主页' },
		'nav.about':      { en: 'About',      cn: '个人经历' },
		'nav.resume':     { en: 'Resume',     cn: '个人简历' },
		'nav.services':   { en: 'Services',   cn: '服务' },
		'nav.works':      { en: 'Photos',     cn: '照片墙' },
		'nav.blog':       { en: 'Blog',       cn: '博客' },
		'nav.contact':    { en: 'Contact',    cn: '联系我' },

		/* ---- home / profile ---- */
		'home.biography.title':   { en: 'Biography',   cn: '个人简介' },
		'home.biography.text':    {
			en: 'I am currently a researcher at the National Supercomputing Center in Jinan, where my work focuses on high-performance interconnect networks. My research interests span RoCEv2 congestion control, long-distance RDMA transport protocols (LongCC), and digital twin network architectures. I am passionate about bridging theoretical models with real-world system implementations to improve the performance and reliability of large-scale distributed systems.',
			cn: '我目前是济南国家超级计算中心的一名研究员，主要从事高性能互连网络方面的研究工作。我的研究兴趣涵盖 RoCEv2 拥塞控制、长距离 RDMA 传输协议（LongCC）以及数字孪生网络架构。我热衷于将理论模型与实际系统实现相结合，以提升大规模分布式系统的性能和可靠性。'
		},
		'home.interests.title':   { en: 'Interests',    cn: '研究兴趣' },
		'home.interests.1':       { en: 'ECN Parameter Tuning',       cn: 'ECN 参数调优' },
		'home.interests.2':       { en: 'Fluid Model Simulation',     cn: '流体模型仿真' },
		'home.interests.3':       { en: 'Network Automation',         cn: '网络自动化' },
		'home.interests.4':       { en: 'RDMA Congestion Control',    cn: 'RDMA 拥塞控制' },
		'home.interests.5':       { en: 'Digital Twin Networking',    cn: '数字孪生网络' },
		'home.education.title':   { en: 'Education',     cn: '教育背景' },
		'home.education.ms':      { en: 'M.S. in Computer Science',   cn: '计算机科学硕士' },
		'home.education.ms.date': { en: '2022 — Present',              cn: '2022 — 至今' },
		'home.education.bs':      { en: 'B.S. in Software Engineering', cn: '软件工程学士' },
		'home.education.bs.date': { en: '2018 — 2022',                 cn: '2018 — 2022' },

		/* ---- about ---- */
		'about.title':        { en: 'About Me',        cn: '关于我' },
		'about.text':         {
			en: 'Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore mega aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip commodo reprehenderit.',
			cn: '我是一名专注于高性能计算网络的研究人员，致力于 RoCEv2 拥塞控制与数字孪生网络架构的研究。'
		},
		'about.name':         { en: 'Name:',            cn: '姓名：' },
		'about.name.value':   { en: 'Mahira Rashid',    cn: '褚夫明' },
		'about.phone':        { en: 'Phone:',           cn: '电话：' },
		'about.phone.value':  { en: '254 - 2563 - 2154', cn: '——' },
		'about.address':      { en: 'Address:',         cn: '地址：' },
		'about.address.value':{ en: 'San francisco, USA', cn: '中国 · 济南' },
		'about.email':        { en: 'Email:',           cn: '邮箱：' },
		'about.email.value':  { en: 'mahirarashid@gmail.com', cn: 'chufuming@nsccjn.cn' },
		'about.freelance':    { en: 'Freelance:',       cn: '状态：' },
		'about.freelance.value':{ en: 'Available',      cn: '在职' },
		'about.skills':       { en: 'Skills',           cn: '技能' },

		/* ---- resume ---- */
		'resume.title':         { en: 'Resume',          cn: '个人简历' },
		'resume.employment':    { en: 'Employment',      cn: '工作经历' },
		'resume.experience':    { en: 'Experience',      cn: '项目经验' },

		/* ---- services ---- */
		'services.title':       { en: 'Services',        cn: '服务' },

		/* ---- works ---- */
		'works.title':          { en: 'Photo Wall',      cn: '照片墙' },

		/* ---- blog ---- */
		'blog.title':           { en: 'Blog',            cn: '博客' },
		'blog.by':              { en: 'by admin',        cn: '作者' },
		'blog.category':        { en: 'Design',          cn: '设计' },

		/* ---- contact ---- */
		'contact.title':        { en: 'Contact',         cn: '联系我' },
		'contact.keep':         { en: 'Keep In Touch',   cn: '保持联系' },
		'contact.help':         { en: 'How Can I Help?', cn: '有什么可以帮您？' },
		'contact.name':         { en: 'Name',            cn: '姓名' },
		'contact.email':        { en: 'Email',           cn: '邮箱' },
		'contact.subject':      { en: 'Subject',         cn: '主题' },
		'contact.phone':        { en: 'Phone',           cn: '电话' },
		'contact.message':      { en: 'Message',         cn: '留言' },
		'contact.submit':       { en: 'Submit Now',      cn: '立即提交' },

		/* ---- tooltip / misc ---- */
		'misc.email':           { en: 'Email',           cn: '邮箱' },
		'misc.scholar':         { en: 'Google Scholar',  cn: '谷歌学术' },
		'misc.github':          { en: 'GitHub',          cn: 'GitHub' }
	},

	// ── current language ────────────────────────────────────────
	current: 'en',

	// ── translate a single key ──────────────────────────────────
	t: function (key) {
		var entry = this.dict[key];
		if (!entry) return key;
		return entry[this.current] || entry.en || key;
	},

	// ── apply language across the page ──────────────────────────
	apply: function () {
		var self = this;

		// elements marked data-i18n (set textContent)
		document.querySelectorAll('[data-i18n]').forEach(function (el) {
			var key = el.getAttribute('data-i18n');
			el.textContent = self.t(key);
		});

		// elements marked data-i18n-html (set innerHTML to keep inner tags)
		document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
			var key = el.getAttribute('data-i18n-html');
			el.innerHTML = self.t(key);
		});

		// input / textarea placeholders
		document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
			var key = el.getAttribute('data-i18n-placeholder');
			el.setAttribute('placeholder', self.t(key));
		});

		// title attributes
		document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
			var key = el.getAttribute('data-i18n-title');
			el.setAttribute('title', self.t(key));
		});

		// update <html lang>
		document.documentElement.lang = self.current === 'cn' ? 'zh-CN' : 'en';

		// update toggle button text
		var btn = document.getElementById('lang-toggle');
		if (btn) {
			btn.textContent = self.current === 'cn' ? 'EN' : '文/A';
		}

		// save preference
		try { localStorage.setItem('site-lang', self.current); } catch (e) {}
	},

	// ── toggle language ─────────────────────────────────────────
	toggle: function () {
		this.current = this.current === 'en' ? 'cn' : 'en';
		this.apply();
	},

	// ── init on page load ───────────────────────────────────────
	init: function () {
		// read saved preference (default en)
		try {
			var saved = localStorage.getItem('site-lang');
			if (saved === 'cn' || saved === 'en') this.current = saved;
		} catch (e) {}

		this.apply();

		// bind toggle button
		var btn = document.getElementById('lang-toggle');
		if (btn) {
			btn.addEventListener('click', this.toggle.bind(this));
		}
	}
};

// auto-init when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
	I18N.init();
});
