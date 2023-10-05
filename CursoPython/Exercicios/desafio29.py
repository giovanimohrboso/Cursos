print('{:=^50}'.format('Multa'))
v1 = int(input('Digite a velocidade : '))
if v1 > 80:
    print('Vc foi multado em {} reais'.format((v1-80)*7))