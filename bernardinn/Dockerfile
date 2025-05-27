# backend/Docker-compose.yml
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copia o jar gerado (assume que você roda mvn package antes)
COPY target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
