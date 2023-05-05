# Esto es un diccionario el cual uno ingresa toda la informacion y pide que se imprime y que no se imprime o llegado el caso hacer una modificacion a algun campo en especifico

biblioteca = {
    'Libro1': {
        'autor': 'Autor1',
        'año': 2001,
        'editorial': 'Editorial1'
    },
    'Libro2': {
        'autor': 'Autor2',
        'año': 2005,
        'editorial': 'Editorial2'
    },
    'Libro3': {
        'autor': 'Autor3',
        'año': 2020,
        'editorial': 'Editorial3'
    }
}

# Acceder a la información del libro 1
info_libro1 = biblioteca['Libro1']
print("\n",info_libro1)

# Acceder al autor del libro 2
autor_libro2 = biblioteca['Libro2']['autor']
print("\n",autor_libro2)

# Modificar e imprimir por pantalla
biblioteca['Libro3']['editorial'] = 'Editorial4'
print("\n",biblioteca['Libro3'])
