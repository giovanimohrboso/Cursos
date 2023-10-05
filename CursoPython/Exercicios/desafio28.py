import random
print('{:=^50}'.format('Adivinhe o numero'))
n1 = random.randint(1,5)
numero = int(input('Digite um numero entre 1 e 5: '))
if n1 == numero:
    print('Parabens vc acertou!!!')
else:
    print('Não foi desta Vez, o numero sorteado foi {}'.format(n1))
