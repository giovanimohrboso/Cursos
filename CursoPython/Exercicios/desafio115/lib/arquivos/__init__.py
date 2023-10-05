def arquivoExiste(nome):
    try:
        a = open(nome,'rt')
        a.close()
    except:
        return False
    else:
        return True


def criaArquivo(arquivo):
    try:
        a = open(arquivo,'wt+')
        a.close()
    except:
        print(f'Erro ao criar arquivo {arquivo}')
    else:
        return


def lerArquivo(arquivo):
    try:
        a = open(arquivo,'rt')
    except:
        print(f'Erro ao ler Arquivo {arquivo}')
    else:
        for linha in a:
            dados = linha.split(';')
            dados[1] = dados[1].replace('\n','')
            print(f'{dados[0]:<39}{dados[1]:>3}')


def cadastrar(arquivo,nome,idade):
    try:
        a = open(arquivo,'at')
    except:
        print(f'Erro ao abrir o arquivo {arquivo}')
    else:
        a.write(f'{nome};{idade}\n')
    finally:
        a.close()
