const moduladosBase = "/scr/modulados";

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
                "aereocomexaustor1.png",
                "aereocomexaustor2.png",
                "aereocomexaustor3.png",
                "aereocomexaustor4.png",
                "aereocomexaustor5.png"
            ])
        },
        {
            id: "aereocomexaustor-cinza",
            category: "aereo",
            name: "Aéreo com Exaustor",
            color: "Cinza Cobalto",
            price: "R$ 798,00",
            credit: "R$ 84,99",
            images: buildImages("aereocomexaustor/Cinza", [
                "aereocomexaustorcinza1.png",
                "aereocomexaustorcinza2.png",
                "aereocomexaustorcinza3.png",
                "aereocomexaustorcinza4.png",
                "aereocomexaustorcinza5.png"
            ])
        },
        {
            id: "aereocomexaustor-preto",
            category: "aereo",
            name: "Aéreo com Exaustor",
            color: "Preto",
            price: "R$ 798,00",
            credit: "R$ 84,99",
            images: buildImages("aereocomexaustor/Preto", [
                "aereocomexaustorpreto4.png",
                "aereocomexaustorpreto2.png",
                "aereocomexaustorpreto3.png",
                "aereocomexaustorpreto1.png",
                "aereocomexaustorpreto5.png"
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
                "aereocommicro2.png",
                "aereocommicro1.png",
                "aereocommicro3.png",
                "aereocommicro4.png",
                "aereocommicro5.png"
            ])
        },
        {
            id: "aereocommicro-cinza",
            category: "aereo",
            name: "Aéreo com Micro",
            color: "Cinza Cobalto",
            price: "R$ 918,00",
            credit: "R$ 103,98",
            images: buildImages("aereocommicro/Cinza", [
                "aereocommicrocinza4.png",
                "aereocommicrocinza1.png",
                "aereocommicrocinza3.png",
                "aereocommicrocinza2.png"
            ])
        },
        {
            id: "aereocommicro-preto",
            category: "aereo",
            name: "Aéreo com Micro",
            color: "Preto",
            price: "R$ 918,00",
            credit: "R$ 103,98",
            images: buildImages("aereocommicro/Preto", [
                "aereocommicropreto4.png",
                "aereocommicropreto1.png",
                "aereocommicropreto3.png",
                "aereocommicropreto2.png"
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
                "aereocomnicho3.png",
                "aereocomnicho2.png",
                "aereocomnicho1.png",
                "aereocomnicho4.png",
                "aereocomnicho5.png",
                "aereocomnicho6.png"
            ])
        },
        {
            id: "aereocomnicho-cinza",
            category: "aereo",
            name: "Aéreo com Nicho",
            color: "Cinza Cobalto",
            price: "R$ 870,00",
            credit: "R$ 102,99",
            images: buildImages("aereocomnicho/Cinza", [
                "aereocomnichocinza4.png",
                "aereocomnichocinza2.png",
                "aereocomnichocinza3.png",
                "aereocomnichocinza1.png",
                "aereocomnichocinza5.png"
            ])
        },
        {
            id: "aereocomnicho-preto",
            category: "aereo",
            name: "Aéreo com Nicho",
            color: "Preto",
            price: "R$ 870,00",
            credit: "R$ 102,99",
            images: buildImages("aereocomnicho/Preto", [
                "aereocomnichopreto4.png",
                "aereocomnichopreto2.png",
                "aereocomnichopreto3.png",
                "aereocomnichopreto1.png",
                "aereocomnichopreto5.png"
            ])
        },
        {
            id: "balcaocomcooktop-branco",
            category: "balcao",
            name: "Balcão com Cooktop",
            color: "Branco",
            price: "R$ 1.110,00",
            credit: "R$ 124,99",
            images: buildImages("balcaocomcooktop/Branco", [
                "balcaocomcooktop2.png",
                "balcaocomcooktop1.png",
                "balcaocomcooktop3.png",
                "balcaocomcooktop4.png",
                "balcaocomcooktop5.png",
                "balcaocomcooktop6.png"
            ])
        },
        {
            id: "balcaocomcooktop-cinza",
            category: "balcao",
            name: "Balcão com Cooktop",
            color: "Cinza Cobalto",
            price: "R$ 1.110,00",
            credit: "R$ 124,99",
            images: buildImages("balcaocomcooktop/Cinza", [
                "balcaocomcooktopcinza4.png",
                "balcaocomcooktopcinza2.png",
                "balcaocomcooktopcinza3.png",
                "balcaocomcooktopcinza1.png"
            ])
        },
        {
            id: "balcaocomcooktop-preto",
            category: "balcao",
            name: "Balcão com Cooktop",
            color: "Preto",
            price: "R$ 1.110,00",
            credit: "R$ 124,99",
            images: buildImages("balcaocomcooktop/Preto", [
                "balcaocomcooktoppreto4.png",
                "balcaocomcooktoppreto2.png",
                "balcaocomcooktoppreto3.png",
                "balcaocomcooktoppreto1.png",
                "balcaocomcooktoppreto5.png"
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
                "balcaopia2.png",
                "balcaopia1.png",
                "balcaopia3.png",
                "balcaopia4.png",
                "balcaopia5.png"
            ])
        },
        {
            id: "balcaopia-cinza",
            category: "balcao",
            name: "Balcão Pia",
            color: "Cinza Cobalto",
            price: "R$ 1.690,00",
            credit: "R$ 189,00",
            images: buildImages("balcaopia/Cinza", [
                "balcaopiacinza4.png",
                "balcaopiacinza2.png",
                "balcaopiacinza3.png",
                "balcaopiacinza1.png",
                "balcaopiacinza5.png"
            ])
        },
        {
            id: "balcaopia-preto",
            category: "balcao",
            name: "Balcão Pia",
            color: "Preto",
            price: "R$ 1.690,00",
            credit: "R$ 189,00",
            images: buildImages("balcaopia/Preto", [
                "balcaopiapreto4.png",
                "balcaopiapreto2.png",
                "balcaopiapreto3.png",
                "balcaopiapreto1.png",
                "balcaopiapreto5.png"
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
                "balcaotanque2.png",
                "balcaotanque1.png",
                "balcaotanque3.png",
                "balcaotanque4.png",
                "balcaotanque5.png"
            ])
        },
        {
            id: "balcaotanque-cinza",
            category: "balcao",
            name: "Balcão Tanque",
            color: "Cinza Cobalto",
            price: "R$ 920,00",
            credit: "R$ 103,99",
            images: buildImages("balcaotanque/Cinza", [
                "balcaotanquecinza2.png",
                "balcaotanquecinza4.png",
                "balcaotanquecinza3.png",
                "balcaotanquecinza1.png"
            ])
        },
        {
            id: "balcaotanque-preto",
            category: "balcao",
            name: "Balcão Tanque",
            color: "Preto",
            price: "R$ 920,00",
            credit: "R$ 103,99",
            images: buildImages("balcaotanque/Preto", [
                "balcaotanquepreto2.png",
                "balcaotanquepreto4.png",
                "balcaotanquepreto3.png",
                "balcaotanquepreto1.png",
                "balcaotanquepreto5.png"
            ])
        },
        {
            id: "banheiromodelo1",
            category: "banheiro",
            name: "Banheiro Modelo 1",
            images: buildImages("banheiromodelos/modelo 1", [
                "banheiromodelo12.png",
                "banheiromodelo11.png",
                "banheiromodelo13.png",
                "banheiromodelo14.png"
            ])
        },
        {
            id: "banheiromodelo2",
            category: "banheiro",
            name: "Banheiro Modelo 2",
            images: buildImages("banheiromodelos/modelo 2", [
                "banheiromodelo23.png",
                "banheiromodelo22.png",
                "banheiromodelo24.png",
                "banheiromodelo21.png",
                "banheiromodelo25.png"
            ])
        },
        {
            id: "banheiromodelo3",
            category: "banheiro",
            name: "Banheiro Modelo 3",
            images: buildImages("banheiromodelos/modelo 3", [
                "banheiromodelo33.png",
                "banheiromodelo32.png",
                "banheiromodelo34.png",
                "banheiromodelo31.png",
                "banheiromodelo35.png"
            ])
        },
        {
            id: "banheiromodelo4",
            category: "banheiro",
            name: "Banheiro Modelo 4",
            images: buildImages("banheiromodelos/modelo 4", [
                "banheiromodelo42.png",
                "banheiromodelo43.png",
                "banheiromodelo44.png",
                "banheiromodelo41.png",
                "banheiromodelo45.png"
            ])
        },
        {
            id: "complementos",
            category: "complemento",
            name: "Complementos",
            price: "R$ 726,00",
            credit: "R$ 82,99",
            images: buildImages("complementos", [
                "complementos2.png",
                "complementos1.png",
                "complementos3.png",
                "complementos4.png",
                "complementos5.png",
                "complementos6.png",
                "complementos7.png",
                "complementos8.png",
                "complementos9.png"
            ])
        },
        {
            id: "cozinhacolunas-branco",
            category: "cozinha",
            name: "Cozinha Completa com Coluna",
            color: "Branco",
            price: "R$ 5.690,00",
            credit: "R$ 631,50",
            images: buildImages("cozinhacolunas/Branco", [
                "cozinhacompletacoluna4.png",
                "cozinhacompletacoluna2.png",
                "cozinhacompletacoluna3.png",
                "cozinhacompletacoluna111.png",
                "cozinhacompletacoluna5.png"
            ])
        },
        {
            id: "cozinhacolunas-cinza",
            category: "cozinha",
            name: "Cozinha Completa com Coluna",
            color: "Cinza Cobalto",
            price: "R$ 5.690,00",
            credit: "R$ 631,50",
            images: buildImages("cozinhacolunas/Cinza", [
                "cozinhacompletacolunacinza3.png",
                "cozinhacompletacolunacinza2.png",
                "cozinhacompletacolunacinza1.png",
                "cozinhacompletacolunacinza4.png",
                "cozinhacompletacolunacinza5.png"
            ])
        },
        {
            id: "cozinhacolunas-preto",
            category: "cozinha",
            name: "Cozinha Completa com Coluna",
            color: "Preto",
            price: "R$ 5.690,00",
            credit: "R$ 631,50",
            images: buildImages("cozinhacolunas/Preto", [
                "cozinhacompletacolunapreto3.png",
                "cozinhacompletacolunapreto2.png",
                "cozinhacompletacolunapreto1.png",
                "cozinhacompletacolunapreto4.png",
                "cozinhacompletacolunapreto5.png"
            ])
        },
        {
            id: "cozinhajusta-branco",
            category: "cozinha",
            name: "Cozinha Completa Justa Posta",
            color: "Branco",
            images: buildImages("cozinhajusta/Branco", [
                "cozinhacompletajustaposta4.png",
                "cozinhacompletajustaposta2.png",
                "cozinhacompletajustaposta3.png",
                "cozinhacompletajustaposta1.png",
                "cozinhacompletajustaposta5.png",
                "cozinhacompletajustaposta6.png",
                "cozinhacompletajustaposta7.png"
            ])
        },
        {
            id: "cozinhajusta-cinza",
            category: "cozinha",
            name: "Cozinha Completa Justa Posta",
            color: "Cinza Cobalto",
            images: buildImages("cozinhajusta/Cinza", [
                "cozinhacompletajustapostacinza3.png",
                "cozinhacompletajustapostacinza2.png",
                "cozinhacompletajustapostacinza1.png",
                "cozinhacompletajustapostacinza4.png"
            ])
        },
        {
            id: "cozinhajusta-preto",
            category: "cozinha",
            name: "Cozinha Completa Justa Posta",
            color: "Preto",
            images: buildImages("cozinhajusta/Preto", [
                "cozinhacompletajustapostapreto3.png",
                "cozinhacompletajustapostapreto2.png",
                "cozinhacompletajustapostapreto1.png",
                "cozinhacompletajustapostapreto4.png"
            ])
        },
        {
            id: "cozinhajustapostamodificada",
            category: "cozinha",
            name: "Cozinha Completa Justa Posta Modificada",
            price: "R$ 5.690,00",
            credit: "R$ 631,50",
            images: buildImages("cozinhajustapostamodificada", [
                "cozinhacompletajustapostamodificada3.png",
                "cozinhacompletajustapostamodificada2.png",
                "cozinhacompletajustapostamodificada1.png",
                "cozinhacompletajustapostamodificada4.png",
                "cozinhacompletajustapostamodificada5.png",
                "cozinhacompletajustapostamodificada6.png",
                "cozinhacompletajustapostamodificada7.png",
                "cozinhacompletajustapostamodificada8.png",
                "cozinhacompletajustapostamodificada9.png"
            ])
        },
        {
            id: "geladeiratorre",
            category: "cozinha",
            name: "Torre para Geladeira",
            images: buildImages("geladeiratorre", [
                "geladeiratorre1.png",
                "geladeiratorre2.png",
                "geladeiratorre3.png"
            ])
        },
        {
            id: "painelerack-1",
            category: "painel",
            name: "Painel e Rack",
            price: "",
            color: "Freijó e Branco",
            images: buildImages("painelerack", [
                "painelerack2.png", 
                "painelerack1.png", 
                "painelerack3.png",
                "painelerack4.png",
                "painelerack3.3.png",
                "painelerack5.5.png", 
                "painelerack5.png",])
        },
        {
            id: "painelerack-2",
            category: "painel",
            name: "Painel e Rack",
            price: "",
            color: "Freijó",
            images: buildImages("painelerack", [
                "painelerack6.png", 
                "painelerack10.png",
                "painelerack7.png",
                "painelerack9.png",
                "painelerack11.png",
                "painelerack12.png", 
                "painelerack8.png"])
        },
        {
            id: "painelerack-3",
            category: "painel",
            name: "Painel e Rack com LED",
            price: "",
            color: "Freijó e branco (led)",
            images: buildImages("painelerack", [
                "painelerack22.png", 
                "painelerack23.png",
                "painelerack21.png",
                "painelerack20.png",
                "painelerack17.png",
                "painelerack19.png", 
                "painelerack18.png"])
        },
        {
            id: "painelerack-4",
            category: "painel",
            name: "Painel e Rack",
            price: "",
            color: "Branco",
            images: buildImages("painelerack", [
                "painelerack110.png", 
                "painelerack100.png", 
                "painelerack120.png",
                "painelerack130.png",
                "painelerack233.png",
                "painelerack24.png",
                "painelerack28.png",,])
        },
        {
            id: "painelmodelo1",
            category: "painel",
            name: "Painél Freijó com branco",
            price: "R$ 2.090,00",
            images: buildImages("painelmodelos/Painel modelo 1", [
                "painelmodelo13.png",
                "painelmodelo12.png",
                "painelmodelo11.png",
                "painelmodelo14.png"
            ])
        },
        {
            id: "painelmodelo2",
            category: "painel",
            name: "Painél com tampa branca",
            price: "R$ 2.490,00",
            images: buildImages("painelmodelos/Painel Modelo 2", [
                "painelmodelo23.png",
                "painelmodelo22.png",
                "painelmodelo21.png",
                "painelmodelo24.png"
            ])
        },
        {
            id: "painelmodelo3",
            category: "painel",
            name: "Painél Freijó",
            price: "R$ 2.640,00",
            images: buildImages("painelmodelos/Painel Modelo 3", [
                "painelmodelo32.png",
                "painelmodelo31.png",
                "painelmodelo33.png",
                "painelmodelo34.png"
            ])
        },
        {
            id: "painelmodelo4",
            category: "painel",
            name: "Painél com Nicho",
            price: "R$ 2.390,00",
            images: buildImages("painelmodelos/Painel Modelo 4", [
                "painelmodelo43.png",
                "painelmodelo42.png",
                "painelmodelo41.png",
                "painelmodelo44.png"
            ])
        },
        {
            id: "painelmodelo5",
            category: "painel",
            name: "Painél com ripado",
            price: "R$ 2.980,00",
            images: buildImages("painelmodelos/Painel Modelo 5", [
                "painelmodelo52.png",
                "painelmodelo53.png",
                "painelmodelo54.png",
                "painelmodelo51.png"
            ])
        },
        {
            id: "rack1",
            category: "rack",
            name: "Rack com tampa branca",
            price: "R$ 2.105,00",
            credit: "R$ 231,50",
            images: buildImages("rack/Rack 1", [
                "rack15.png",
                "rack12.png",
                "rack13.png",
                "rack14.png",
                "rack11.png",
                "rack16.png",
                "rack17.png",
                "rack18.png"
            ])
        },
        {
            id: "rack2",
            category: "rack",
            name: "Rack branco",
            price: "R$ 1.830,00",
            images: buildImages("rack/Rack 2", [
                "rack25.png",
                "rack22.png",
                "rack23.png",
                "rack24.png",
                "rack25.png",
                "rack26.png",
                "rack27.png",
                "rack28.png"
            ])
        },
        {
            id: "rack3",
            category: "rack",
            name: "Rack Cinza Cobalto",
            price: "R$ 2.105,00",
            credit: "R$ 231,50",
            images: buildImages("rack/Rack 3", [
                "rack35.png",
                "rack32.png",
                "rack33.png",
                "rack34.png",
                "rack31.png",
                "rack36.png",
                "rack37.png",
                "rack38.png"
            ])
        },
        {
            id: "rack4",
            category: "rack",
            name: "Rack Cobalto com branco",
            price: "R$ 2.105,00",
            credit: "R$ 231,50",
            images: buildImages("rack/Rack 4", [
                "rack45.png",
                "rack42.png",
                "rack43.png",
                "rack44.png",
                "rack41.png",
                "rack46.png",
                "rack47.png",
                "rack48.png",
                "rack49.png"
            ])
        },
        {
            id: "rack5",
            category: "rack",
            name: "Rack branco com cobalto",
            price: "R$ 2.105,00",
            credit: "R$ 231,50",
            images: buildImages("rack/Rack 5", [
                "rack55.png",
                "rack52.png",
                "rack53.png",
                "rack54.png",
                "rack51.png",
                "rack56.png",
                "rack57.png",
                "rack58.png"
            ])
        },
        {
            id: "rack6",
            category: "rack",
            name: "Rack Freijó",
            price: "R$ 2.105,00",
            credit: "R$ 231,50",
            images: buildImages("rack/Rack 6", [
                "rack64.png",
                "rack62.png",
                "rack63.png",
                "rack61.png",
                "rack65.png",
                "rack66.png",
                "rack67.png",
                "rack68.png"
            ])
        },
        {
            id: "roupeiro3correr",
            category: "roupeiro",
            name: "Roupeiro 3 Portas de Correr",
            images: buildImages("roupeiros/Roupeiro 3 portas de correr", [
                "roupeiro3portasdecorrer1.png",
                "roupeiro3portasdecorrer2.png",
                "roupeiro3portasdecorrer3.png",
                "roupeiro3portasdecorrer4.png",
                "roupeiro3portasdecorrer5.png"
            ])
        },
        {
            id: "roupeiro3giro",
            category: "roupeiro",
            name: "Roupeiro 3 Portas de Giro",
            images: buildImages("roupeiros/Roupeiro 3 portas de giro", [
                "roupeiro3portasdegiro1.png",
                "roupeiro3portasdegiro2.png",
                "roupeiro3portasdegiro3.png",
                "roupeiro3portasdegiro4.png",
                "roupeiro3portasdegiro5.png"
            ])
        },
        {
            id: "roupeirog2correr",
            category: "roupeiro",
            name: "Roupeiro G 2 Portas de Correr",
            images: buildImages("roupeiros/Roupeiro G 2 porta de correr", [
                "roupeirog2portadecorrer1.png",
                "roupeirog2portadecorrer2.png",
                "roupeirog2portadecorrer3.png",
                "roupeirog2portadecorrer4.png",
                "roupeirog2portadecorrer5.png",
                "roupeirog2portadecorrer6.png"
            ])
        },
        {
            id: "roupeirog4giro",
            category: "roupeiro",
            name: "Roupeiro G 4 Portas de Giro",
            images: buildImages("roupeiros/Roupeiro G 4 portas de giro", [
                "roupeirog4portasdegiro1.png",
                "roupeirog4portasdegiro2.png",
                "roupeirog4portasdegiro3.png",
                "roupeirog4portasdegiro4.png",
                "roupeirog4portasdegiro5.png",
                "roupeirog4portasdegiro6.png"
            ])
        },
        {
            id: "roupeirop2correr",
            category: "roupeiro",
            name: "Roupeiro P 2 Portas de Correr",
            images: buildImages("roupeiros/Roupeiro P 2 portas de correr", [
                "roupeirop2portasdecorrer1.png",
                "roupeirop2portasdecorrer2.png",
                "roupeirop2portasdecorrer3.png",
                "roupeirop2portasdecorrer4.png",
                "roupeirop2portasdecorrer5.png"
            ])
        },
        {
            id: "roupeirop2giro",
            category: "roupeiro",
            name: "Roupeiro P 2 Portas de Giro",
            images: buildImages("roupeiros/Roupeiro P 2 portas de giro", [
                "roupeirop2portasdegiro1.png",
                "roupeirop2portasdegiro2.png",
                "roupeirop2portasdegiro3.png",
                "roupeirop2portasdegiro4.png",
                "roupeirop2portasdegiro5.png"
            ])
        }
    ]
};
