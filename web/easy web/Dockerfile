FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY style.css .

EXPOSE 3000 

CMD ["nginx", "-g", "daemon off;"]