print('Numeros')
n1 = int(input('Digite o numero 1:'))
n2 = int(input('Digite o numero 2:'))
n3 = int(input('Digite o numero 3:'))
if n1>n2:
    if n1>n3:
        print('O maior numero é {}'.format(n1))
    else:
        print('O maior numero é {}'.format(n3))
else:
    if n2>n3:
        print('O maior numero é {}'.format(n2))
    else:
        print('O maior numero é {}'.format(n3))
if n1<n2:
    if n1<n3:
        print('O menor numero é {}'.format(n1))
    else:
        print('O menor numero é {}'.format(n3))
else:
    if n2<n3:
        print('O menor numero é {}'.format(n2))
    else:
        print('O menor numero é {}'.format(n3))