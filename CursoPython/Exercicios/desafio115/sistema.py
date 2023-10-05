from desafio115.lib.interface import *
from desafio115.lib.arquivos import *

nomearquivo = 'cadastro.txt'
if not arquivoExiste(nomearquivo):
    criaArquivo(nomearquivo)

cabecalho('Sistema de Arquivo')
while True:
    opcao = menu(['Consulta', 'Cadastro', 'Sair'])
    if opcao == 1:
        cabecalho('Lista do Arquivo')
        lerArquivo(nomearquivo)
    elif opcao == 2:
        cabecalho('Cadastrar Nova Pessoa')
        nome = str(input('Nome:'))
        idade = int(input('Idade:'))
        cadastrar(nomearquivo,nome,idade)
    elif opcao == 3:
        cabecalho('Até Logo')
        break
    else:
        continue

