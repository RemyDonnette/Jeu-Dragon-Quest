@echo off
cd /d "C:\Users\DystM\OneDrive\Bureau\Dev\Projets\JeuDQ"

start code .
timeout /t 1 /nobreak

cmd /c "node back/server.js"


cmd /c "npx live-server --open=front/index.html"

pause