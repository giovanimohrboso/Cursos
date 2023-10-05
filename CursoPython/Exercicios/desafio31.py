print('{:=^50}'.format('Viagens'))
distancia = int(input('Digite quantos km a sua viagem:'))
if distancia > 200:
    print('Valor {:.2f}'.format(distancia*0.45))
else:
    print('Valor {:.2f}'.format(distancia*0.5))
