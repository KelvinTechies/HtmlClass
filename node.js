const http = require('http')

const fs = require('fs')

const another = fs.readFileSync('./another.html')
const about_new_html = fs.readFileSync('./about-new.html')
const services = fs.readFileSync('./services.html')
const allCss = fs.readFileSync('./another.css')


const server= http.createServer((req,res)=>{

    if (req.url=='/another.html') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(another)
        res.end()
    }

    if (req.url=='/about-new.html') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(about_new_html)
        res.end()
    }

    if (req.url=='/services.html') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(services)
        res.end()
    }

    if (req.url=='/another.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(allCss)
        res.end()
    }

    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Oops page not found</h1>')
        res.end()
    }

    
})

server.listen(7000)
