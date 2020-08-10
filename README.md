# Multiple Subdomain Proxy
---
## Use Case
Subdomain Proxy simply creates a proxy server to route subdomains to different ports on the application server. It also routes from http to https.

## Setup
1. Using screen, forever, pm2 or whatever persitant tools you wish, launch all of the apps you wish to be running on the server taking note of ports used to host the app.
2. Clone this repository and rename config.sample.js to config.js.
3. Modify config.js as needed.
4. If you are not running the app as root (which you shouldn't) then setup ip tables to preroute to the correct ports.


`
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
`
#  
`
sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-port 8181
`
