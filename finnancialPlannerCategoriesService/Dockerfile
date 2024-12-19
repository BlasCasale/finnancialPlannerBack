# Usar la imagen base que hemos creado
FROM imagefinnancialplanner

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos específicos del microservicio
COPY . .

# Exponer el puerto específico para el microservicio
EXPOSE 3000  
# Cambia el puerto si es necesario para cada microservicio

# Configurar el comando por defecto para evitar el inicio automático del servidor
CMD ["sh", "-c", "echo 'Contenedor listo. Ejecuta tu comando a continuación.' && tail -f /dev/null"]