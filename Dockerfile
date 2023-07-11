FROM openjdk:20

ENV ENVIROMENT=prod

LABEL maintainer="zeshan.shahid@neuefische.de"

EXPOSE 8080

ADD backend/target/kitchen-storage.jar app.jar

CMD [ "sh", "-c", "java -jar /app.jar" ]
