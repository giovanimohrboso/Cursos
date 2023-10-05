n1 = int(input('Digite o primeiro Valor:'))
n2 = int(input('Segundo Valor:'))
soma = n1 + n2
subtracao = n1 - n2
multi = n1 * n2
divisao = n1 / n2
expon = n1 ** n2
divisaoint = n1 // n2
restodivisao = n1 % n2
print('A soma é {}, a subtração é {}, a multiplicacao é {}, a divisão é {}'.format(soma,subtracao,multi,divisao),end =' ')
print(', a exponenciacao é {}, a Divisao Inteira é {}, o resto da Divisao é {}'.format(expon,divisaoint,restodivisao))