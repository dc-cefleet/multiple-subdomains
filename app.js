const https = require('https');
const fs = require('fs');
const httpProxy = require('http-proxy');
const {ssl,sub_domains, domain_name} = require('./config');

const options = {
	key:fs.readFileSync(ssl.key),
	cert:fs.readFileSync(ssl.cert)
}

const proxy = httpProxy.createProxyServer();

const base = sub_domains.find(sub=>sub.host === '');

const router = (req,res)=>{
	let target;
	let domain = req.headers.host;
	let host = domain.split(":")[0];
	let sub_domain = sub_domains.find(sub=>sub.host+'.'+domain_name.toLowerCase() == host.toLowerCase());
	if(sub_domain) return proxy.web(req,res,{target:{host:'localhost', port:sub_domain.port}})
	
	if((host.toLowerCase() == domain_name.toLowerCase()) && base) return proxy.web(req,res, {target:{host:'localhost', port:base.port}})

	res.statusCode = 404;
	res.end();

}

https.createServer(options, router).listen(ssl.port)
