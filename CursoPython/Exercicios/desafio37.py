n1 = int(input('Digite um Numero Inteiro:'))
n2 = int(input('Para qual base quer converter: \033[32m 1-Binário \033[33m 2-Octal \033[34m 3-Hexa '))
if n2 == 1:
    print('O valor em Binario é {}'.format(bin(n1)[2:]))
elif n2 == 2:
    print('O Valor em Octal é {}'.format(oct(n1)[2:]))
elif n2 ==3:
    print('O valor em Hexa é {}'.format(hex(n1)[2:]))
else:
    print('Escolha entre 1 e 3')

