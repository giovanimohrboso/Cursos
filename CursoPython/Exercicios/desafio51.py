n1 = int(input('Informe o primeiro termo:'))
n2 = int(input('Informe a razão:'))
soma = n1
for i in range(0,10):
    print('{} -> '.format(soma),end=' ')
    soma += n2
print('Acabou')
