# cURL to RestAssured

Aplicação simples desenvolvida utilizando HTML + CSS + JS para transformar um curl copiado do postman para uma request do rest-assured.
Pode acessar a aplicação neste link: https://maximilianoalves.github.io/curl-to-restassured

## Começando

Para utilizar a ferramenta basta copiar o cURL do Postman e colar na ferramenta, abaixo vai gerar o código Java-RestAssured para você utilizar em sua aplicação.

Ex.: 

- Copie este curl e cole no textarea da aplicação.

```curl
curl --location --request POST 'https://petstore.swagger.io/v2/store/order' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "35",
    "petId": "7",
    "quantity": "2",
    "shipDate": "12-14-2019",
    "complete": "true"
}'
```
O resultado deve ser:

```java
given()
.header("Content-Type", "application/json")
.body("{ "id": "35", "petId": "7", "quantity": "2", "shipDate": "12-14-2019", "complete": "true" }")
.when()
.post('https://petstore.swagger.io/v2/store/order')
```

## Limitações

A aplicação está em WIP, portanto não foram adicionados todos os recursos existentes em um curl e restassured, então pode ocorrer alguns problemas na hora da conversão.

## Contribua

Esse projeto surgiu recentemente para facilitar o dia a dia na criação de automação de serviço, talvez não seja a melhor forma ou o melhor código, por isso eu te convido, vamos ajudar a melhorar?  
 

**Entre em contato por alguma dessas redes sociais:**

[![Twitter](https://badgen.net/badge/Twitter/%40max_dacruz?icon=twitter)](https://twitter.com/max_dacruz)
[![Medium](https://badgen.net/badge/Medium/%40maximilianoalves?icon=medium)](https://medium.com/@maximilianoalves)
[![Linkedin](https://badgen.net/badge/Linkedin/maximilianodacruz?icon=linkedin)](https://www.linkedin.com/in/maximilianodacruz/)
[![Instagram](https://badgen.net/badge/Instagram/max_dacruz?icon=instagram)](https://www.instagram.com/max_dacruz/)
[![Facebook](https://badgen.net/badge/Facebook/maximilianoalvesdacruz?icon=facebook)](https://www.facebook.com/maximilianoalvesdacruz)