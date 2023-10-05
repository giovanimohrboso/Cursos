import random
print('{:=^50}'.format('ORDEM DOS TRABALHOS'))
aluno1 = input('Digite o Nome do Primeiro Aluno:')
aluno2 = input('Digite o Nome do Segundo Aluno:')
aluno3 = input('Digite o Nome do Terceiro Aluno:')
aluno4 = input('Digite o Nome do Quarto Aluno:')
sort = random.sample([aluno1,aluno2,aluno3,aluno4],k=4)
print('A ordem dos Alunos será : Primeiro {},Segundo {},Terceiro {},Quarto {}'.format(sort[0],sort[1],sort[2],sort[3]))