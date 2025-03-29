import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server avviato sulla porta {PORT}")
    print(f"Apri il browser e vai all'indirizzo: http://localhost:{PORT}")
    httpd.serve_forever() 