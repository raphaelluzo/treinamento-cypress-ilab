///<reference types="Cypress" />
import { faker } from '@faker-js/faker/locale/pt_BR';
      // Codigo padrao enviado no chat.
      describe('Fluxo Cliente Api', () => {
        const baseUrl = "https://api2.ploomes.com"
        const apiKey =  "567BB78CFD6AC8DDE9B7F7114C7DBFDE9FA0ACCB45294B299FC76A525FACAADB276C40260E0D843B5C9A409930DFCA9852727E9FC7A6FD9868CFA67C88563FAC"
        let payload = {
            body: {
                "Name": faker.name.fullName(),
                "Neighborhood": "Pinheiros",
                "ZipCode": 0,
                "Register": faker.phone.number("###.###.###-##"),
                "OriginId": 0,
                "CompanyId": null,
                "StreetAddressNumber": "XXX",
                "Email": faker.internet.email(),
                "TypeId": 2,
                "Phones": [
                    {
                        "PhoneNumber": faker.phone.number("(21) 9####-####"),
                        "TypeId": 0,
                        "CountryId": 0
                    }
                ],
                "OtherProperties": [
                    {
                        "FieldKey": "{fieldKey}",
                        "StringValue": "texto exemplo"
                    },
                    {
                        "FieldKey": "{fieldKey}",
                        "IntegerValue": 2
                    }
                ]
            }           
        }
        it('Novo Cliente', () => {
            cy.api({
                method: "POST",
                url: baseUrl + "/Contacts",
                headers: {
                    'User-Key' : `${apiKey}`
                },
                ...payload
            }).then(response =>{
                expect(response.status).to.eq(200)
            })
        })
      })
    
    