soma = 0
for i in range(1, 7):
    n1 = int(input('Digite o {} numero:'.format(i)))
    if n1 % 2 == 0:
        soma += n1
print('A soma dos pares é {}'.format(soma))
