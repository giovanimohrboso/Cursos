import random
numero = random.randint(1 , 10)
acertou = False
tentativas = 1
while acertou == False:
    palpite = int(input('Digite um Palpite de 1 a 10:'))
    if palpite == numero:
        print('Acertou com {} tentativa(s)'.format(tentativas))
        acertou = True
    else:
        print('Tente novamente...')
        tentativas += 1
