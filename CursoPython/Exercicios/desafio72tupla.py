numeroporextenso = ('Zero', 'Um', 'Dois', 'Três')
while True:
    n1 = int(input('Digite um numero entre 0 e 3:'))
    if (n1 >= 0) and (n1 <= 3):
        break
    else:
        print('Numero Invalido')
print(f'O Numero é {numeroporextenso[n1]}')
