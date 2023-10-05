pessoas = list()
dados = list()
while True:
    dados.append(str(input('Digite o nome:')))
    dados.append(int(input('Digite o peso:')))
    pessoas.append(dados[:])
    dados.clear()
    decisao = str(input('Deseja Continuar?[S/N]:')).upper()
    if decisao == 'N':
        break
for p in pessoas:
    if p[1] >= 100:
        print(f'{p[0]} tem {p[1]} Kg')

