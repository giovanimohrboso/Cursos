aluno = dict()
aluno['nome'] = str(input('Digite o Nome:'))
aluno['media'] = float(input('Digite a média:'))
if aluno['media'] >= 7.0:
    aluno['situacao'] = 'Aprovado'
else:
    aluno['situacao'] = 'Reprovado'
print(f'O aluno {aluno["nome"]} tirou {aluno["media"]} e esta {aluno["situacao"]}')
