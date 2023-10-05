numeros = []
for c in range(1 , 6):
    numeros.append(int(input(f'Digite o {c} valor: ')))
print(f'numeros:{numeros}')
maior = 0
menor = numeros[0]
for i in range(len(numeros)):
    if maior <= numeros[i-1]:
        maior = numeros[i-1]
    if menor >= numeros[i-1]:
        menor = numeros[i-1]
print(f'Maior: {maior}')
print(f'Menor: {menor}')
