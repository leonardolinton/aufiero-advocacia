const equipe = [
    {
        "id": "1",
        "nome": "Aniello Miranda Aufiero",
        "registro": "OAB/AM 1.579",
        "imagem": "../img/01_image.png",
        "curriculo": [
            "Sócio do Aufiero & Associados Advogados.",
            "Graduado em Direito – Universidade Federal do Amazonas/UFAM (1986).",
            "Professor de Direito Penal, Direito Processual Penal, Prática Penal, nas Faculdades, Cursos Preparatórios e Pós- graduação.",
            "Conferencista e Autor de livros Jurídicos.",
            "Membro associado do Instituto Brasileiro de Ciências Criminais – IBCCRIM",
            "Membro associado do Instituto Brasileiro de Advogados – IAB"
        ]
    },
    {
        "id": "2",
        "nome": "Aldenize Magalhães Aufiero",
        "registro": "OAB/AM 1.874",
        "imagem": "../img/02_image.png",
        "curriculo": [
            "Sócia de Aufiero & Associados Advogados.",
            "Graduação em Direito – Universidade Federal do Amazonas/UFAM (1987).",
            "Presidente da Caixa de Assistência dos Advogados do Amazonas (triênio 2016-2018)."
        ]
    },
    {
        "id": "3",
        "nome": "Danielle Aufiero Monteiro de Paula",
        "registro": "OAB/AM 6.945",
        "imagem": "../img/03_image.png",
        "curriculo": [
            "Graduada em Direito – Centro Universitário do Norte/UNINORTE (2007)",
            "Pós-graduada em Processo Judiciário pela Escola Superior de Advocacia (ESA/AM)",
            "Corregedora da Ordem dos Advogados do Brasil, Seção Amazonas (triênio 2016-2018)"
        ]
    },
    {
        "id": "4",
        "nome": "Mario Vitor M. Aufiero",
        "registro": "OAB/AM 8.787",
        "imagem": "../img/05_image.png",
        "curriculo": [
            "Graduado em Direito – Universidade do Estado do Amazonas/UEA (2013)",
            "Especialista em Direito Processual Civil – FDDJ (2015)",
            "Mestrando em Direito Processual – USP",
            "Idiomas: inglês fluente e italiano intermediário"
        ]
    },
    {
        "id": "5",
        "nome": "Thaís Soares Tabosa dos Reis",
        "registro": "OAB/AM 10.484",
        "imagem": "../img/04_image.png",
        "curriculo": [
            "Graduada em Direito – Universidade Federal do Amazonas/UFAM (2015).",
            "Estágio no escritório Aufiero & Associados (2014-2015);",
            "Estágio Ministério Público do Estado do Amazonas (2012-2014);",
            "Estágio Tribunal de Justiça do Estado do Amazonas (2010-2012).",
            "Idiomas: Inglês fluente.",
            "Interesse pessoal pelas áreas de relações públicas, política interna e internacional, direitos humanos, segurança pública, sistema prisional e gerenciamento de crise."
        ]
    },
    {
        "id": "6",
        "nome": "Daniela Morgantini Tavares Tempesta",
        "registro": "OAB/AM 8.411",
        "imagem": "../img/07_image.png",
        "curriculo": [
            "Graduação Direito – Centro Integrado de Ensino Superior do Amazonas/CIESA (2012)",
            "Pós-Graduanda em Direito Processual Civil – FDDJ",
            "Idiomas: Inglês básico"
        ]
    },
    {
        "id": "7",
        "nome": "Diego das Neves Loureiro",
        "registro": "OAB/AM 11.271",
        "imagem": "../img/08_image.png",
        "curriculo": [
            "Graduação em Direito – Centro Integrado de Ensino Superior do Amazonas/CIESA (2015)",
            "Pós-graduando em Direito Penal e Processual Penal – CIESA",
            "Idiomas: inglês básico"
        ]
    }
];

// Obtendo o parâmetro da URL
const urlParams = new URLSearchParams(window.location.search);
const advogadoId = urlParams.get('advogado');

// Encontrando a advogado selecionada
const advogado = equipe.find(f => f.id.trim().toLowerCase() === advogadoId);

// Exibindo os curriculo da advogado
if (advogado) {
    document.getElementById('advogado-img').src = advogado.imagem;
    document.getElementById('advogado-img').alt = `${advogado.nome}`;
    document.getElementById('advogado-nome').textContent = advogado.nome;
    document.getElementById('advogado-registro').textContent = advogado.registro;

    const curriculoList = document.getElementById('advogado-curriculo');
    advogado.curriculo.forEach(curriculo => {
        const li = document.createElement('li');
        li.textContent = curriculo;
        curriculoList.appendChild(li);
    });
}