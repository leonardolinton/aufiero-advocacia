const areas = [
    {
        "id": "1",
        "titulo": "Direito Penal",
        "detalhe": "O direito penal ou direito criminal é a disciplina de direito público que regula o exercício do poder punitivo do Estado, tendo por pressuposto de ação delitos (isto é, comportamentos considerados altamente reprováveis ou danosos ao organismo social, afetando bens jurídicos indispensáveis à própria conservação e progresso da sociedade) e como consequência as penas.",
        "imagem": "../img/01_image.png"
    },
    {
        "id": "2",
        "titulo": "Direito Tributário",
        "detalhe": 'O direito tributário é um ramo do direito que objetiva o estudo das leis e normas que regulam as relações entre o Estado e os contribuintes, no que diz respeito à cobrança de taxas, impostos, contribuições de melhoria, contribuições especiais e empréstimos compulsório. Tanto o Estado, ao "exigir", como a pessoa sob sua jurisdição, ao "contribuir", deve obedecer a determinadas normas, cujo conjunto constitui o direito tributário. É compreendido como um segmento do direito financeiro, que define como serão cobrados dos cidadãos (contribuintes) os tributos e outras obrigações a ele relacionadas. Tem como contraparte o direito fiscal ou orçamentário, que é o conjunto de normas jurídicas destinadas à regulamentação do financiamento das atividades do Estado.',
        "imagem": "../img/02_image.png"
    },
    {
        "id": "3",
        "titulo": "Direito Familiar",
        "detalhe": "Direito de família é o ramo do direito que contém normas jurídicas relacionadas com a estrutura, organização e proteção da família. Ramo que trata das relações familiares e das obrigações e direitos decorrentes dessas relações, ou seja, é o ramo do Direito que regula e estabelece as normas de convivência familiar.",
        "imagem": "../img/03_image.png"
    },
    {
        "id": "4",
        "titulo": "Direito do Consumidor",
        "detalhe": "Tem por objetivo assegurar que os consumidores obtenham acesso a informações quanto a origem e qualidade dos produtos e serviços; assegurar proteção contra fraudes no mercado de consumo; garantir transparência a segurança para os usuários dos bens e serviços e harmonizar as relações consumo por meio da intervenção jurisdicional",
        "imagem": "../img/05_image.png"
    },
    {
        "id": "5",
        "titulo": "Direito Civil",
        "detalhe": "O Direito Civil, quando encarado sob uma perspectiva geral e considerando os códigos de cada país, contém alguns princípios básicos comuns, ou seja, tendências ou pilares frequentemente presentes nos ordenamentos jurídicos. São eles o princípio da Eticidade, o da Sociabilidade e o da Operacionalidade.",
        "imagem": "../img/05_image.png"
    }
];

// Obtendo o parâmetro da URL
const urlParams = new URLSearchParams(window.location.search);
const areaId = urlParams.get('area');

// Encontrando a advogado selecionada
const area = areas.find(f => f.id.trim().toLowerCase() === areaId);

// Exibindo os curriculo da advogado
if (area) {
    document.getElementById('area-titulo').textContent = area.titulo;
    document.getElementById('area-detalhe').textContent = area.detalhe;

    document.getElementById('area-img').src = area.imagem;
    document.getElementById('area-img').alt = `${area.titulo}`;
}