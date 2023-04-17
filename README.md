# How to run this project

## Build the Docker image for the current folder and tag it with `dockerized-react-weather-app`
docker build . -t dockerized-react-weather-app

## Run the image in detached mode and map port 3000 inside the container with 3000 on current host
docker run -p 3000:3000 -d dockerized-react-weather-app