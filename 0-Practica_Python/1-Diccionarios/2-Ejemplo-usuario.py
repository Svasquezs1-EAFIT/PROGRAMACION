# Esto es un dicionario el cual le pide al usuario que ingrese el mismo la informacion solicitada por la funcion y se seguira ejecutando hasta que el usuario escriba en el nombre la palabra: "salir", hay se acabara el bucle y imprimira los datos ingresado.

contactos = {}

while True:
    nombre = input("\nIngrese el nombre del contacto (o 'salir' para terminar):\n ")
    if nombre == 'salir':
        break
    telefono = input("\nIngrese el número de teléfono: ")
    correo = input("\nIngrese el correo electrónico: ")
    contactos[nombre] = {'telefono': telefono, 'correo': correo}

print("\nLos contactos ingresados son: \n")
for nombre, informacion in contactos.items():
    print("* ",nombre + " - Teléfono: " + informacion['telefono'] + ", Correo: " + informacion['correo'],"\n")
    
    