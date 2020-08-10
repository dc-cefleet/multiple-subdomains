module.exports = {
	domain_name:'yourdomain.ext',
	sub_domains:[
		{host:'',port:8000},//This would be the default
		{host:'www', port:8000},//multiple subdomans can go to one port
		{host:'project2',port:3445},
		{host:'project1', port:8001}
	],
	ssl:{
		key: '/location/to/security/key',
		cert:'/location/to/security/cert',
	},
	listen_ports: {
		//This is the port that IP tables pre-routes. 
		//This is needed if you are not running this app as root.
		//If you are running node as root you can and are not pre-routing you can just put 80 and 443 for http and https.
		http:8080,
		https:8181
	}
}
