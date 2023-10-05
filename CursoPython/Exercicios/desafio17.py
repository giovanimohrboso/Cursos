import math
print('{:=^50}'.format('HIPOTENUSA'))
co = int(input('Digite o cateto Oposto:'))
ca = int(input('Digite o cateto Adjacente:'))
hipo = math.sqrt(math.pow(co,2)+math.pow(ca,2))
print('A hipotenusa é {}'.format(hipo))