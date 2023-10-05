import time
import pyautogui

pyautogui.press("win")

pyautogui.write("chrome")
time.sleep(2)
pyautogui.press("enter")
time.sleep(2)
link = "https://dlp.hashtagtreinamentos.com/python/intensivao/login"
pyautogui.write(link)
pyautogui.press("enter")
time.sleep(2)
pyautogui.click(x=838, y=456)
# escrever o seu email
time.sleep(2)
pyautogui.write("pythonimpressionador@gmail.com")
time.sleep(2)
pyautogui.press("tab") # passando pro próximo campo
pyautogui.write("senha")
time.sleep(2)
pyautogui.press("tab")
pyautogui.press("enter")
time.sleep(2)

import pandas
tabela = pandas.read_csv("produtos.csv")

for linha in tabela.index:
    pyautogui.click(x=768, y=316)
    codigo = tabela.loc[linha,"codigo"]
    pyautogui.write(codigo)
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[linha, "marca"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[linha, "tipo"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[linha, "categoria"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[linha, "preco_unitario"]))
    pyautogui.press("tab")
    pyautogui.write(str(tabela.loc[linha, "custo"]))
    pyautogui.press("tab")
    obs = tabela.loc[linha, "obs"]
    if not pandas.isna(obs):
        pyautogui.write(str(tabela.loc[linha, "obs"]))
    pyautogui.press("tab")
    pyautogui.press("enter")
    time.sleep(1)
    pyautogui.scroll(500000)

