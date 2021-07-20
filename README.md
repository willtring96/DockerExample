Assuming you have the frontend and backend Dockerfiles configured properly, you can skip straight to Docker Compose.
 
Frontend:
cd into frontend
docker build -t frontend:latest(tag, could be version number)
docker run frontend:latest -p 80:5000 -d
Backend:
cd into backend
docker build -t backend:latest
docker run frontend:latest -p 80:5000 -d
Docker Compose: (instead of running the build and run commands separately for both images, you can just run this)
stay in parent directory
docker compose up -d
 
docker-compose up: This command does the work of the docker-compose build and docker-compose run commands. It builds the images if they are not located locally and starts the containers. If images are already built, it will fork the container directly.
 
The -d is for “detach”, it’s so it doesn’t keep a terminal open while the applications are up and running. It runs in the background.
 
The -p is for port connection. Hosted-port:Image-port
