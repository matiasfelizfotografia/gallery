#!/bin/bash

# Verifica que se proporcionen dos argumentos
if [ $# -ne 2 ]; then
  echo "Uso: $0 <ubicacion_fotos> <ubicacion_json>"
  exit 1
fi

# Obtiene las ubicaciones de las fotos y el archivo JSON
ubicacion_fotos="$1"
ubicacion_json="$2"

# Verifica que la ubicación de las fotos exista
if [ ! -d "$ubicacion_fotos" ]; then
  echo "La ubicación de las fotos no existe."
  exit 1
fi

# Crea un arreglo para almacenar los nombres de las fotos
nombres_fotos=()

# Encuentra todas las fotos en la ubicación de las fotos y agrega sus nombres al arreglo
for foto in "$ubicacion_fotos"/*.{jpg,jpeg,png,gif}; do
  if [ -f "$foto" ]; then
    nombre=$(basename "$foto")
    nombres_fotos+=("$nombre")
  fi
done

# Crea un archivo JSON con los nombres de las fotos
json="{"
for nombre in "${nombres_fotos[@]}"; do
  json+="\"name\":\"$nombre\","
done
# Elimina la última coma del JSON y cierra el objeto
json="${json%,}"
json+="}"

# Guarda el JSON en la ubicación especificada
echo "$json" > "$ubicacion_json"
echo "JSON creado y guardado en $ubicacion_json"

