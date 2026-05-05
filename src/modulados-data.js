const moduladosBase = "./modulados";

function buildImages(folder, files) {
    return files.map((file) => `${moduladosBase}/${folder}/${file}`);
}

window.BND_MODULADOS = {
    categories: [
        { id: "todos", label: "Todos" },
        { id: "aereo", label: "Aéreo" },
        { id: "balcao", label: "Balcão" },
        { id: "banheiro", label: "Banheiro" },
        { id: "complemento", label: "Complementos" },
        { id: "cozinha", label: "Cozinha" },
        { id: "painel", label: "Painel" },
        { id: "rack", label: "Rack" },
        { id: "roupeiro", label: "Roupeiro" }
    ],
    products: [
        {
            id: "aereocomexaustor-branco",
            category: "aereo",
            name: "Aéreo com Exaustor",
            color: "Branco",
            price: "R$ 798,00",
            credit: "R$ 84,99",
            images: buildImages("aereocomexaustor/Branco", [
                "aereocomexaustor1.webp",
                "aereocomexaustor2.webp",
                "aereocomexaustor3.webp",
                "aereocomexaustor4.webp",
                "aereocomexaustor5.webp"
            ])
        },
        {
            id: "aereocomexaustor-cinza",
            category: "aereo",
            name: "Aéreo com Exaustor",
            color: "Cinza Cobalto",
            price: "R$ 917,90",
            credit: "R$ 101,90",
            images: buildImages("aereocomexaustor/Cinza", [
                "aereocomexaustorcinza1.webp",
                "aereocomexaustorcinza2.webp",
                "aereocomexaustorcinza3.webp",
                "aereocomexaustorcinza4.webp",
                "aereocomexaustorcinza5.webp"
            ])
        },
        {
            id: "aereocomexaustor-preto",
            category: "aereo",
            name: "Aéreo com Exaustor",
            color: "Preto",
            price: "R$ 917,90",
            credit: "R$ 101,90",
            images: buildImages("aereocomexaustor/Preto", [
                "aereocomexaustorpreto4.webp",
                "aereocomexaustorpreto2.webp",
                "aereocomexaustorpreto3.webp",
                "aereocomexaustorpreto1.webp",
                "aereocomexaustorpreto5.webp"
            ])
        },
        {
            id: "aereocommicro-branco",
            category: "aereo",
            name: "Aéreo com Micro",
            color: "Branco",
            price: "R$ 918,00",
            credit: "R$ 103,98",
            images: buildImages("aereocommicro/Branco", [
                "aereocommicro2.webp",
                "aereocommicro1.webp",
                "aereocommicro3.webp",
                "aereocommicro4.webp",
                "aereocommicro5.webp"
            ])
        },
        {
            id: "aereocommicro-cinza",
            category: "aereo",
            name: "Aéreo com Micro",
            color: "Cinza Cobalto",
            price: "R$ 1.055,17",
            credit: "R$ 117,20",
            images: buildImages("aereocommicro/Cinza", [
                "aereocommicrocinza4.webp",
                "aereocommicrocinza1.webp",
                "aereocommicrocinza3.webp",
                "aereocommicrocinza2.webp"
            ])
        },
        {
            id: "aereocommicro-preto",
            category: "aereo",
            name: "Aéreo com Micro",
            color: "Preto",
            price: "R$ 1.055,17",
            credit: "R$ 117,20",
            images: buildImages("aereocommicro/Preto", [
                "aereocommicropreto4.webp",
                "aereocommicropreto1.webp",
                "aereocommicropreto3.webp",
                "aereocommicropreto2.webp"
            ])
        },
        {
            id: "aereocomnicho-branco",
            category: "aereo",
            name: "Aéreo com Nicho",
            color: "Branco",
            price: "R$ 870,00",
            credit: "R$ 102,99",
            images: buildImages("aereocomnicho/Branco", [
                "aereocomnicho3.webp",
                "aereocomnicho2.webp",
                "aereocomnicho1.webp",
                "aereocomnicho4.webp",
                "aereocomnicho5.webp",
                "aereocomnicho6.webp"
            ])
        },
        {
            id: "aereocomnicho-cinza",
            category: "aereo",
            name: "Aéreo com Nicho",
            color: "Cinza Cobalto",
            price: "R$ 1.000,00",
            credit: "R$ 110,00",
            images: buildImages("aereocomnicho/Cinza", [
                "aereocomnichocinza4.webp",
                "aereocomnichocinza2.webp",
                "aereocomnichocinza3.webp",
                "aereocomnichocinza1.webp",
                "aereocomnichocinza5.webp"
            ])
        },
        {
            id: "aereocomnicho-preto",
            category: "aereo",
            name: "Aéreo com Nicho",
            color: "Preto",
            price: "R$ 1.000,00",
            credit: "R$ 110,00",
            images: buildImages("aereocomnicho/Preto", [
                "aereocomnichopreto4.webp",
                "aereocomnichopreto2.webp",
                "aereocomnichopreto3.webp",
                "aereocomnichopreto1.webp",
                "aereocomnichopreto5.webp"
            ])
        },
        {
            id: "balcaocomcooktop-branco",
            category: "balcao",
            name: "Balcão Cooktop",
            color: "Branco",
            price: "R$ 1.110,00",
            credit: "R$ 124,99",
            images: buildImages("balcaocomcooktop/Branco", [
                "balcaocomcooktop2.webp",
                "balcaocomcooktop1.webp",
                "balcaocomcooktop3.webp",
                "balcaocomcooktop4.webp",
                "balcaocomcooktop5.webp",
                "balcaocomcooktop6.webp"
            ])
        },
        {
            id: "balcaocomcooktop-cinza",
            category: "balcao",
            name: "Balcão Cooktop",
            color: "Cinza Cobalto",
            price: "R$ 1.276.50",
            credit: "R$ 141,70",
            images: buildImages("balcaocomcooktop/Cinza", [
                "balcaocomcooktopcinza4.webp",
                "balcaocomcooktopcinza2.webp",
                "balcaocomcooktopcinza3.webp",
                "balcaocomcooktopcinza1.webp"
            ])
        },
        {
            id: "balcaocomcooktop-preto",
            category: "balcao",
            name: "Balcão Cooktop",
            color: "Preto",
            price: "R$ 1.276.50",
            credit: "R$ 141,70",
            images: buildImages("balcaocomcooktop/Preto", [
                "balcaocomcooktoppreto4.webp",
                "balcaocomcooktoppreto2.webp",
                "balcaocomcooktoppreto3.webp",
                "balcaocomcooktoppreto1.webp",
                "balcaocomcooktoppreto5.webp"
            ])
        },
        {
            id: "balcaopia-branco",
            category: "balcao",
            name: "Balcão Pia",
            color: "Branco",
            price: "R$ 1.690,00",
            credit: "R$ 189,00",
            images: buildImages("balcaopia/Branco", [
                "balcaopia2.webp",
                "balcaopia1.webp",
                "balcaopia3.webp",
                "balcaopia4.webp",
                "balcaopia5.webp"
            ])
        },
        {
            id: "balcaopia-cinza",
            category: "balcao",
            name: "Balcão Pia",
            color: "Cinza Cobalto",
            price: "R$ 1.943,50",
            credit: "R$ 215,80",
            images: buildImages("balcaopia/Cinza", [
                "balcaopiacinza4.webp",
                "balcaopiacinza2.webp",
                "balcaopiacinza3.webp",
                "balcaopiacinza1.webp",
                "balcaopiacinza5.webp"
            ])
        },
        {
            id: "balcaopia-preto",
            category: "balcao",
            name: "Balcão Pia",
            color: "Preto",
            price: "R$ 1.943,50",
            credit: "R$ 215,80",
            images: buildImages("balcaopia/Preto", [
                "balcaopiapreto4.webp",
                "balcaopiapreto2.webp",
                "balcaopiapreto3.webp",
                "balcaopiapreto1.webp",
                "balcaopiapreto5.webp"
            ])
        },
        {
            id: "balcaotanque-branco",
            category: "balcao",
            name: "Balcão Tanque",
            color: "Branco",
            price: "R$ 920,00",
            credit: "R$ 103,99",
            images: buildImages("balcaotanque/Branco", [
                "balcaotanque2.webp",
                "balcaotanque1.webp",
                "balcaotanque3.webp",
                "balcaotanque4.webp",
                "balcaotanque5.webp"
            ])
        },
        {
            id: "balcaotanque-cinza",
            category: "balcao",
            name: "Balcão Tanque",
            color: "Cinza Cobalto",
            price: "R$ 1.058,00",
            credit: "R$ 117,50",
            images: buildImages("balcaotanque/Cinza", [
                "balcaotanquecinza2.webp",
                "balcaotanquecinza4.webp",
                "balcaotanquecinza3.webp",
                "balcaotanquecinza1.webp"
            ])
        },
        {
            id: "balcaotanque-preto",
            category: "balcao",
            name: "Balcão Tanque",
            color: "Preto",
            price: "R$ 1.058,00",
            credit: "R$ 117,50",
            images: buildImages("balcaotanque/Preto", [
                "balcaotanquepreto2.webp",
                "balcaotanquepreto4.webp",
                "balcaotanquepreto3.webp",
                "balcaotanquepreto1.webp",
                "balcaotanquepreto5.webp"
            ])
        },
        {
            id: "banheiromodelo1",
            category: "banheiro",
            name: "Armário Flow 3D",
            images: buildImages("banheiromodelos/modelo 1", [
                "banheiromodelo12.webp",
                "banheiromodelo11.webp",
                "banheiromodelo13.webp",
                "banheiromodelo14.webp"
            ])
        },
        {
            id: "banheiromodelo2",
            category: "banheiro",
            name: "Armário Core Smart",
            images: buildImages("banheiromodelos/modelo 2", [
                "banheiromodelo23.webp",
                "banheiromodelo22.webp",
                "banheiromodelo24.webp",
                "banheiromodelo21.webp",
                "banheiromodelo25.webp"
            ])
        },
        {
            id: "banheiromodelo3",
            category: "banheiro",
            name: "Armário Open Line",
            images: buildImages("banheiromodelos/modelo 3", [
                "banheiromodelo33.webp",
                "banheiromodelo32.webp",
                "banheiromodelo34.webp",
                "banheiromodelo31.webp",
                "banheiromodelo35.webp"
            ])
        },
        {
            id: "banheiromodelo4",
            category: "banheiro",
            name: "Armário Prime Duo",
            images: buildImages("banheiromodelos/modelo 4", [
                "banheiromodelo42.webp",
                "banheiromodelo43.webp",
                "banheiromodelo44.webp",
                "banheiromodelo41.webp",
                "banheiromodelo45.webp"
            ])
        },
        {
            id: "complementos",
            category: "complemento",
            name: "Complementos de balcão",
            price: "R$ 726,00",
            credit: "R$ 82,99",
            images: buildImages("complementos", [
                "complementos2.webp",
                "complementos1.webp",
                "complementos7.webp",
                "complementos8.webp",
                "complementos5.webp",
                "complementos6.webp",
                "complementos3.webp",
                "complementos4.webp",
                "complementos9.webp"
            ])
        },
                {
            id: "complementos",
            category: "complemento",
            name: "Complementos aéreos",
            price: "R$ 726,00",
            credit: "R$ 82,99",
            images: buildImages("complementos", [
                "complementos3.webp",
                "complementos4.webp",
                "complementos5.webp",
                "complementos6.webp",
                "complementos9.webp"
            ])
        },
        {
            id: "cozinhacolunas-branco",
            category: "cozinha",
            name: "Cozinha Completa em linha",
            color: "Branco",
            price: "R$ 5.690,00",
            credit: "R$ 631,50",
            images: buildImages("cozinhacolunas/Branco", [
                "cozinhacompletacoluna4.webp",
                "cozinhacompletacoluna2.webp",
                "cozinhacompletacoluna3.webp",
                "cozinhacompletacoluna111.webp",
                "cozinhacompletacoluna5.webp"
            ])
        },
        {
            id: "cozinhacolunas-cinza",
            category: "cozinha",
            name: "Cozinha Completa em linha",
            color: "Cinza Cobalto",
            price: "R$ 6.543,50,00",
            credit: "R$ 726,40",
            images: buildImages("cozinhacolunas/Cinza", [
                "cozinhacompletacolunacinza3.webp",
                "cozinhacompletacolunacinza2.webp",
                "cozinhacompletacolunacinza1.webp",
                "cozinhacompletacolunacinza4.webp",
                "cozinhacompletacolunacinza5.webp"
            ])
        },
        {
            id: "cozinhacolunas-preto",
            category: "cozinha",
            name: "Cozinha Completa em linha",
            color: "Preto",
            price: "R$ 6.543,50,00",
            credit: "R$ 726,40",
            images: buildImages("cozinhacolunas/Preto", [
                "cozinhacompletacolunapreto3.webp",
                "cozinhacompletacolunapreto2.webp",
                "cozinhacompletacolunapreto1.webp",
                "cozinhacompletacolunapreto4.webp",
                "cozinhacompletacolunapreto5.webp"
            ])
        },
        {
            id: "cozinhajusta-branco",
            category: "cozinha",
            name: "Cozinha Completa Justa Posta",
            color: "Branco",
            price: "R$ 5.690,00",
            credit: "R$ 631,50",
            images: buildImages("cozinhajusta/Branco", [
                "cozinhacompletajustaposta4.webp",
                "cozinhacompletajustaposta2.webp",
                "cozinhacompletajustaposta3.webp",
                "cozinhacompletajustaposta1.webp",
                "cozinhacompletajustaposta5.webp",
                "cozinhacompletajustaposta6.webp",
                "cozinhacompletajustaposta7.webp"
            ])
        },
        {
            id: "cozinhajusta-cinza",
            category: "cozinha",
            name: "Cozinha Completa Justa Posta",
            color: "Cinza Cobalto",
            price: "R$ 6.543,50,00",
            credit: "R$ 726,40",
            images: buildImages("cozinhajusta/Cinza", [
                "cozinhacompletajustapostacinza3.webp",
                "cozinhacompletajustapostacinza2.webp",
                "cozinhacompletajustapostacinza1.webp",
                "cozinhacompletajustapostacinza4.webp"
            ])
        },
        {
            id: "cozinhajusta-preto",
            category: "cozinha",
            name: "Cozinha Completa Justa Posta",
            color: "Preto",
            price: "R$ 6.543,50,00",
            credit: "R$ 726,40",
            images: buildImages("cozinhajusta/Preto", [
                "cozinhacompletajustapostapreto3.webp",
                "cozinhacompletajustapostapreto2.webp",
                "cozinhacompletajustapostapreto1.webp",
                "cozinhacompletajustapostapreto4.webp"
            ])
        },
        {
            id: "cozinhajustapostamodificada",
            category: "cozinha",
            name: "Cozinha Completa Justa Posta Modificada",
            color: "Branco",
            price: "R$ 5.690,00",
            credit: "R$ 631,50",
            images: buildImages("cozinhajustapostamodificada", [
                "cozinhacompletajustapostamodificada3.webp",
                "cozinhacompletajustapostamodificada2.webp",
                "cozinhacompletajustapostamodificada1.webp",
                "cozinhacompletajustapostamodificada4.webp",
                "cozinhacompletajustapostamodificada5.webp",
                "cozinhacompletajustapostamodificada6.webp",
                "cozinhacompletajustapostamodificada7.webp",
                "cozinhacompletajustapostamodificada8.webp",
                "cozinhacompletajustapostamodificada9.webp"
            ])
        },
        {
            id: "cozinhajustapostamodificada",
            category: "cozinha",
            name: "Cozinha Completa Justa Posta Modificada",
            color: "Cinza Cobalto",
            price: "R$ 6.543,50,00",
            credit: "R$ 726,40",
            images: buildImages("cozinhajustapostamodificada", [
                "cozinhacompletajustapostamodificada3.webp",
                "cozinhacompletajustapostamodificada2.webp",
                "cozinhacompletajustapostamodificada1.webp",
                "cozinhacompletajustapostamodificada4.webp",
                "cozinhacompletajustapostamodificada5.webp",
                "cozinhacompletajustapostamodificada6.webp",
                "cozinhacompletajustapostamodificada7.webp",
                "cozinhacompletajustapostamodificada8.webp",
                "cozinhacompletajustapostamodificada9.webp"
            ])
        },
        {
                    id: "cozinhajustapostamodificada",
            category: "cozinha",
            name: "Cozinha Completa Justa Posta Modificada",
            color: "Preto",
            price: "R$ 6.543,50,00",
            credit: "R$ 726,40",
            images: buildImages("cozinhajustapostamodificada", [
                "cozinhacompletajustapostamodificada3.webp",
                "cozinhacompletajustapostamodificada2.webp",
                "cozinhacompletajustapostamodificada1.webp",
                "cozinhacompletajustapostamodificada4.webp",
                "cozinhacompletajustapostamodificada5.webp",
                "cozinhacompletajustapostamodificada6.webp",
                "cozinhacompletajustapostamodificada7.webp",
                "cozinhacompletajustapostamodificada8.webp",
                "cozinhacompletajustapostamodificada9.webp"
            ]),
        },
        {
            id: "geladeiratorre",
            category: "cozinha",
            name: "Torre para Geladeira",
            color: "Branco",
            images: buildImages("geladeiratorre/Branco", [
                "geladeiratorre1.webp",
                "geladeiratorre2.webp",
                "geladeiratorre3.webp",
                "geladeiratorre4.webp"
            ])
        },
                {
            id: "geladeiratorre",
            category: "cozinha",
            name: "Torre para Geladeira",
            color: "Cinza Cobalto",
            images: buildImages("geladeiratorre/Cinza", [
                "geladeiratorrecinza1.webp",
                "geladeiratorrecinza2.webp",
                "geladeiratorrecinza3.webp",
                "geladeiratorrecinza4.webp"
            ])
        },
                {
            id: "geladeiratorre",
            category: "cozinha",
            name: "Torre para Geladeira",
            color: "Preto",
            images: buildImages("geladeiratorre/Preto", [
                "geladeiratorrepreto1.webp",
                "geladeiratorrepreto2.webp",
                "geladeiratorrepreto3.webp",
                "geladeiratorrepreto4.webp",
                "geladeiratorrepreto5.webp"
            ])
        },
        {
            id: "painelerack-1",
            category: "painel",
            name: "Painel e Rack",
            price: "",
            color: "Freijó e Branco",
            images: buildImages("painelerack", [
                "painelerack2.webp", 
                "painelerack1.webp", 
                "painelerack3.webp",
                "painelerack4.webp",
                "painelerack3.3.webp",
                "painelerack5.5.webp", 
                "painelerack5.webp",])
        },
        {
            id: "painelerack-2",
            category: "painel",
            name: "Painel e Rack",
            price: "",
            color: "Freijó",
            images: buildImages("painelerack", [
                "painelerack6.webp", 
                "painelerack10.webp",
                "painelerack7.webp",
                "painelerack9.webp",
                "painelerack11.webp",
                "painelerack12.webp", 
                "painelerack8.webp"])
        },
        {
            id: "painelerack-3",
            category: "painel",
            name: "Painel e Rack com LED",
            price: "",
            color: "Freijó e branco (led)",
            images: buildImages("painelerack", [
                "painelerack22.webp", 
                "painelerack23.webp",
                "painelerack21.webp",
                "painelerack20.webp",
                "painelerack17.webp",
                "painelerack19.webp", 
                "painelerack18.webp"])
        },
        {
            id: "painelerack-4",
            category: "painel",
            name: "Painel e Rack",
            price: "",
            color: "Branco",
            images: buildImages("painelerack", [
                "painelerack110.webp", 
                "painelerack100.webp", 
                "painelerack120.webp",
                "painelerack130.webp",
                "painelerack233.webp",
                "painelerack24.webp",
                "painelerack28.webp",,])
        },
        {
            id: "painelmodelo1",
            category: "painel",
            name: "Painél BND Linea",
            price: "R$ 2.090,00",
            images: buildImages("painelmodelos/Painel modelo 1", [
                "painelmodelo13.webp",
                "painelmodelo12.webp",
                "painelmodelo11.webp",
                "painelmodelo14.webp"
            ])
        },
        {
            id: "painelmodelo2",
            category: "painel",
            name: "Painél BND Cover",
            price: "R$ 2.490,00",
            images: buildImages("painelmodelos/Painel Modelo 2", [
                "painelmodelo23.webp",
                "painelmodelo22.webp",
                "painelmodelo21.webp",
                "painelmodelo24.webp"
            ])
        },
        {
            id: "painelmodelo3",
            category: "painel",
            name: "Painél BND Wood Prime",
            price: "R$ 2.640,00",
            images: buildImages("painelmodelos/Painel Modelo 3", [
                "painelmodelo32.webp",
                "painelmodelo31.webp",
                "painelmodelo33.webp",
                "painelmodelo34.webp"
            ])
        },
        {
            id: "painelmodelo4",
            category: "painel",
            name: "Painél Smart Nicho",
            price: "R$ 2.390,00",
            images: buildImages("painelmodelos/Painel Modelo 4", [
                "painelmodelo43.webp",
                "painelmodelo42.webp",
                "painelmodelo41.webp",
                "painelmodelo44.webp"
            ])
        },
        {
            id: "painelmodelo5",
            category: "painel",
            name: "Painél Ripado Prime",
            price: "R$ 2.980,00",
            images: buildImages("painelmodelos/Painel Modelo 5", [
                "painelmodelo52.webp",
                "painelmodelo53.webp",
                "painelmodelo54.webp",
                "painelmodelo51.webp"
            ])
        },
        {
            id: "rack1",
            category: "rack",
            name: "Rack com tampa branca",
            price: "R$ 2.105,00",
            credit: "R$ 231,50",
            images: buildImages("rack/Rack 1", [
                "rack15.webp",
                "rack12.webp",
                "rack13.webp",
                "rack14.webp",
                "rack11.webp",
                "rack16.webp",
                "rack17.webp",
                "rack18.webp"
            ])
        },
        {
            id: "rack2",
            category: "rack",
            name: "Rack branco",
            price: "R$ 1.830,00",
            images: buildImages("rack/Rack 2", [
                "rack25.webp",
                "rack22.webp",
                "rack23.webp",
                "rack24.webp",
                "rack25.webp",
                "rack26.webp",
                "rack27.webp",
                "rack28.webp"
            ])
        },
        {
            id: "rack3",
            category: "rack",
            name: "Rack Cinza Cobalto",
            price: "R$ 2.105,00",
            credit: "R$ 231,50",
            images: buildImages("rack/Rack 3", [
                "rack35.webp",
                "rack32.webp",
                "rack33.webp",
                "rack34.webp",
                "rack31.webp",
                "rack36.webp",
                "rack37.webp",
                "rack38.webp"
            ])
        },
        {
            id: "rack4",
            category: "rack",
            name: "Rack Cobalto com branco",
            price: "R$ 2.105,00",
            credit: "R$ 231,50",
            images: buildImages("rack/Rack 4", [
                "rack45.webp",
                "rack42.webp",
                "rack43.webp",
                "rack44.webp",
                "rack41.webp",
                "rack46.webp",
                "rack47.webp",
                "rack48.webp",
                "rack49.webp"
            ])
        },
        {
            id: "rack5",
            category: "rack",
            name: "Rack branco com cobalto",
            price: "R$ 2.105,00",
            credit: "R$ 231,50",
            images: buildImages("rack/Rack 5", [
                "rack55.webp",
                "rack52.webp",
                "rack53.webp",
                "rack54.webp",
                "rack51.webp",
                "rack56.webp",
                "rack57.webp",
                "rack58.webp"
            ])
        },
        {
            id: "rack6",
            category: "rack",
            name: "Rack Freijó",
            price: "R$ 2.105,00",
            credit: "R$ 231,50",
            images: buildImages("rack/Rack 6", [
                "rack64.webp",
                "rack62.webp",
                "rack63.webp",
                "rack61.webp",
                "rack65.webp",
                "rack66.webp",
                "rack67.webp",
                "rack68.webp"
            ])
        },
        {
            id: "roupeiro3correr",
            category: "roupeiro",
            name: "Roupeiro 3 Portas de Correr",
            price: "R$ 5.000",
            images: buildImages("roupeiros/Roupeiro 3 portas de correr", [
                "roupeiro3portasdecorrer1.webp",
                "roupeiro3portasdecorrer2.webp",
                "roupeiro3portasdecorrer3.webp",
                "roupeiro3portasdecorrer4.webp",
                "roupeiro3portasdecorrer5.webp"
            ])
        },
        {
            id: "roupeiro3giro",
            category: "roupeiro",
            name: "Roupeiro 3 Portas de Giro",
            price: "R$ 4.300",
            images: buildImages("roupeiros/Roupeiro 3 portas de giro", [
                "roupeiro3portasdegiro1.webp",
                "roupeiro3portasdegiro2.webp",
                "roupeiro3portasdegiro3.webp",
                "roupeiro3portasdegiro4.webp",
                "roupeiro3portasdegiro5.webp"
            ])
        },
        {
            id: "roupeirog2correr",
            category: "roupeiro",
            name: "Roupeiro G 2 Portas de Correr",
            price: "R$ 5.000",
            images: buildImages("roupeiros/Roupeiro G 2 porta de correr", [
                "roupeirog2portadecorrer1.webp",
                "roupeirog2portadecorrer2.webp",
                "roupeirog2portadecorrer3.webp",
                "roupeirog2portadecorrer4.webp",
                "roupeirog2portadecorrer5.webp",
                "roupeirog2portadecorrer6.webp"
            ])
        },
        {
            id: "roupeirog4giro",
            category: "roupeiro",
            name: "Roupeiro G 4 Portas de Giro",
            price: "R$ 5.700",
            images: buildImages("roupeiros/Roupeiro G 4 portas de giro", [
                "roupeirog4portasdegiro1.webp",
                "roupeirog4portasdegiro2.webp",
                "roupeirog4portasdegiro3.webp",
                "roupeirog4portasdegiro4.webp",
                "roupeirog4portasdegiro5.webp",
                "roupeirog4portasdegiro6.webp"
            ])
        },
        {
            id: "roupeirop2correr",
            category: "roupeiro",
            name: "Roupeiro P 2 Portas de Correr",
            price: "R$ 3.970",
            images: buildImages("roupeiros/Roupeiro P 2 portas de correr", [
                "roupeirop2portasdecorrer1.webp",
                "roupeirop2portasdecorrer2.webp",
                "roupeirop2portasdecorrer3.webp",
                "roupeirop2portasdecorrer4.webp",
                "roupeirop2portasdecorrer5.webp"
            ])
        },
        {
            id: "roupeirop2giro",
            category: "roupeiro",
            name: "Roupeiro P 2 Portas de Giro",
            price: "R$ 3.270",
            images: buildImages("roupeiros/Roupeiro P 2 portas de giro", [
                "roupeirop2portasdegiro1.webp",
                "roupeirop2portasdegiro2.webp",
                "roupeirop2portasdegiro3.webp",
                "roupeirop2portasdegiro4.webp",
                "roupeirop2portasdegiro5.webp"
            ])
        }
    ]
};
