## Gestão de Pedidos

Sistema simples para gestão de pedidos e anotações referente a venda de cosméticos e produtos relacionados, desenvolvido utilizande Node.js, React.js e MongoDB.

## Origem do Projeto

Minha esposa trabalha com revenda de cosméticos e precisava de um sistema simples para gerenciar os pedidos de clientes e para guardar anotações relacionadas. O uso de planilhas não estava ajudando. Fiz rapidamente esse sistema simples para que ela pudesse utilizar, e achei que ficou legal :) como pode ser útil para mais alguém, ou pelo menos para fins de estudo das tecnologias utilizadas, resolvi disponibilizar no Github.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

* Node.js;
* MongoDB;
* mongoose;
* React.js;
* Redux;
* Redux-Saga;
* Bootstrap 4.

## Como Testar

Para rodar o sistema, você precisa do Docker instalado na sua máquina. Siga as intruções do site oficial para realizar a instalação.

Com o Docker instalado, abra o terminal ou prompt de comando, dependendo do S.O. que estiver utilizando, e execute o seguinte comando:

`docker-compose up` 

Para acessar o sistema, utilize a URL `http://localhost:3000/`. Você verá a tela inicial, onde são cadastrados os pedidos, através da categorização por empresa, ano e ciclo:

![Tela inicial](https://raw.githubusercontent.com/evgomes/gestao-de-pedidos/main/images/gestao-pedidos-1.png?token=ADTMTKLBWWAHZO4ZSRPN2ES7VKNB2 "Tela inicial")

O sistema possui ainda outra tela, para anotações textuais simples:

![Tela de anotações](https://raw.githubusercontent.com/evgomes/gestao-de-pedidos/main/images/gestao-pedidos-2.png?token=ADTMTKN7KGENJLSVFTWXKOK7VKNFI "Tela de anotações")

## Limitações

O sistema é bastante simples, possuindo apenas duas telas. Não tenho intenção de aumentar o escopo e funcionalidades. 
Fique a vontade para alterar, estudar ou usar como desejar :)