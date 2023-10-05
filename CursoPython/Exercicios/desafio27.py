print('{:=^50}'.format('Primeiro e Ultimo'))
nomes = input('Digite o nome Completo:')
print('Primeiro Nome : {}'.format(nomes.split()[0]))
print('Ultimo Nome : {}'.format(nomes.split()[len(nomes.split())-1]))