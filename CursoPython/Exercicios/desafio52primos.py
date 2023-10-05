n1 = int(input('Digite o ultimo numero:'))
for i in range(1, n1):
    print('O numero {} é divisivel por'.format(i), end=':')
    soma = 0
    for j in range(1, i+1):
        if i % j == 0:
            print('{}'.format(j), end=',')
            soma += 1
    print('', end='\n')
    if soma == 2:
        print('\33[0;31;40m', 'O numero {} é primo'.format(i), '\33[m')

