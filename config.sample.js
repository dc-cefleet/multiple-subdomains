module.exports = {
	domain_name:'yourdomain',
	sub_domains:[{host:'',port:8000},{host:'project1', port:8001}],
	ssl:{
		key: '/etc/letsencrypt/live/yourdomain/privkey.pem',
		cert:'/etc/letsencrypt/live/yourdomain/cert.pem',
		port:8181
	}
}
